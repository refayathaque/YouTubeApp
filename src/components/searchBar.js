import React, { Component } from 'react';

// Component class names MUST be in PascalCase (aka UpperCamelCase)! File names do not have to be in PascalCase but for consistency make them PascalCase

//Functional component (do not have state), as opposed to Class component (used for internal record keeping, state?)
// const SearchBar = () => {
//     return (
//         <input />
//     );
// };

//Class component (ES6 class)
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
        <div>
            <input onChange={event => this.setState({ term: event.target.value })} />
            Value of the input is: {this.state.term}
        </div>
        );
    }
    //^^ ES6 refactoring of `return <input onChange={this.onInputChange} />`
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
}

export default SearchBar;
