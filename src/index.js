import React, { Component } from 'react';
// ^ Only creates and manages components, (below) is what renders to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const youTubeApiKey = 'AIzaSyB5SX3vWsqJ2QtdFcU6ibHCGfeRlneuQCc'


// Creating new component, and this component will produce some HTML
// * One component per file, golden rule
// ES6 'fat arrow' version
//Functional component example
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };
// const App = function() {
//     return <div>Hi!</div>;
// }

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: youTubeApiKey, term: 'volvo'}, (videos) => {
            this.setState({ videos });
            //^ same as this.setState({videos:videos})
        });
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take the above component's generated HTML and place it in the DOM (Document Object Model)
ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> is same as <App></App>, this is making an instance of the App class
// Second argument is the target container (check index.html for div inside body tag, this will be the root container element)
