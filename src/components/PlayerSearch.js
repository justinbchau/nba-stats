import React from 'react';

const PlayerSearch = ({ placeholder, onSearch}) => {
    return (
        <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'spacing 1fr spacing', marginLeft: "40px", marginRight: '40px' }} className="ui input focus">
            <input 
            placeholder={placeholder} 
            onChange={onSearch}
            />
        </div>
    )
}


export default PlayerSearch;
