import React, { Component } from 'react';
import Raid from './Raid';

const RaidDetail = (props) => {
    if(!props.raid){
        return "Loading..."
    }

    const pirates = props.raid.pirates.map((pirate, index) => {
        return <li key={index}>{pirate.firstName} {pirate.lastName}</li>
    })

    const handleDelete = () => {
        props.onDelete(props.raid.id);
    }

    return ( 
        <div className="component">
            <Raid raid={props.raid} />
            <p>Pirates:</p>
            <ul>{pirates}</ul>
            <p>Loot: {props.raid.loot} golden nuggets</p>
            <button onClick={handleDelete}>Delete {props.raid.location}</button>
        </div>
     );
}
 
export default RaidDetail;