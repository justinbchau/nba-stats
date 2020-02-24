import React from 'react';
import { connect } from 'react-redux';
import { getPlayers, getPlayer, getStats } from '../actions';

import PlayerSearch from './PlayerSearch';

class PlayerCard extends React.Component {

    componentDidMount() {
        this.props.getPlayers();
        this.props.getStats(Math.floor(Math.random() * 100));
    }

    renderPlayers() {
        return this.props.players.map(player => {
            return (
                <div className="ui cards" key={player.id}>
                    <div className="card">
                                {this.renderStats(player)}
                        <div className="content">
                            <div className="header">
                                {player.first_name} {player.last_name} - {player.position}
                                </div>
                                <div className="ui inverted divider"></div>
                                <div className="description">
                                Team: {player.team.full_name} | {player.team.abbreviation}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderStats(player) {
        if (player.full_name === this.props.stats) {
            return (
                <div>
                    {this.props.stats.player}
                </div>
            )
        }
    }

    onSearch = async e => {
        e.preventDefault();
        const id = await this.props.getPlayer(e.target.value);
        console.log(id);
        
    };


    render() {
        if (!this.props.players) {
            return (
                <div class="ui container">
                    <p></p>
                    <div class="ui active dimmer">
                        <div class="ui loader"></div>
                    </div>
                </div>

            )
        }
    return (
        <div style={{ marginLeft: '20px' }}>
            <PlayerSearch 
            placeholder="Search for a player" 
            onSearch={this.onSearch}
            />

            <h2>Players</h2>

            <div className="ui list">
                {this.renderPlayers()}
            </div>

        </div>
    );
  }
}

const mapStatetoProps = (state) => {
    return { 
        players: Object.values(state.players),
        stats: Object.values(state.stats)
    }
}

export default connect(mapStatetoProps, { getPlayers, getPlayer, getStats })(PlayerCard);
