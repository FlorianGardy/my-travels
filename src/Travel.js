// src/Travel.js
import React from "react";

const Travel = (props) => (
    <div class="travel">
        <ul>
            <li>Destination: {props.destination}</li>
            <li>Country: {props.country}</li>
            <li>Distance: {props.distance}</li>
        </ul>
        <img src={props.photo} alt="Travel destination"/>
        <hr />
    </div>
);

export default Travel;