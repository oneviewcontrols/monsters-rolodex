import React, { Component } from 'react';
import './search-box.styles.css';


const SearchBox = ({className,placeholder,onChangeHandler}) => (
        <input className={className} 
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}/>
    )

// class SearchBox extends Component {

//     constructor() {
//         super();
//         this.state = {
//             searchField : ''
//         }
//     }

//     render() {
        
//         return (
//             <input className={this.props.className} 
//                    type='search' 
//                    placeholder={this.props.placeholder} 
//                    onChange={this.props.onChangeHandler}/>
//         )
//     }

// }

export default SearchBox;