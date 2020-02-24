import React from 'react';

const PlayerSearch = ({ placeholder, onSearch}) => {
    return (
        <div style={{ marginTop: '10px' }} className="ui input focus">
            <input 
            placeholder={placeholder} 
            onChange={onSearch}
            />
        </div>
    )
}


export default PlayerSearch;
