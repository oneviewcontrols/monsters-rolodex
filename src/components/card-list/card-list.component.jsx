import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({monsters}) => (
        <div className='card-list'>
            {monsters.map((monster) => {
                const {name, email, id} = monster;                
                return (                    
                    <Card id={monster.id} monster={monster}/>
            )})}   
        </div>
);

// class CardList extends Component {

//     render() {
//         const {monsters} = this.props;
//         return (
//             <div className='card-list'>
//             {monsters.map((monster) => {
//                 const {name, email, id} = monster;                
//                 return (                    
//                     <Card key={monster.id} monster={monster}/>
//             )})}   
//         </div>)
//     }
// }

export default CardList