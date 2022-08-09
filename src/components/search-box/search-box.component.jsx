import React, { Component } from 'react';

class SearchBox extends Component {

    constructor() {
        super();
        this.state = {
            searchField : ''
        }
    }

    render() {
        
        return (
            <input className={this.props.className} 
                   type='search' 
                   placeholder={this.props.placeholder} 
                   onChange={this.props.onChangeHandler}/>
        )
    }

}

export default SearchBox;