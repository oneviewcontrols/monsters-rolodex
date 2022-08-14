import React, { Component } from 'react';
import './card.styles.css';


const Card = ({id,monster}) => (
            <div className='card-container' key={id}>
                {console.log(id)}
                <img alt={`monster ${monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>           
)

export default Card

