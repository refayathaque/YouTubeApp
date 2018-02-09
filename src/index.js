import React from 'react';
// ^ Only creates and manages components, (below) is what renders to the DOM
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const youTubeApiKey = 'AIzaSyB5SX3vWsqJ2QtdFcU6ibHCGfeRlneuQCc'

// Creating new component, and this component will produce some HTML
// * One component per file, golden rule
// ES6 'fat arrow' version
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};
// const App = function() {
//     return <div>Hi!</div>;
// }

// Take the above component's generated HTML and place it in the DOM (Document Object Model)
ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> is same as <App></App>, this is making an instance of the App class
// Second argument is the target container (check index.html for div inside body tag, this will be the root container element)
