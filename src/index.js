import _ from 'lodash';
import React, { Component } from 'react';
// ^ Only creates and manages components, (below) is what renders to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

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

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('volvo')
    }

    videoSearch(term) {
        YTSearch({key: youTubeApiKey, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //^ same as this.setState({videos:videos})
        });
    }

    //Setting state causes component to re-render

    render() {
        //Way to throttle user input to make sure they don't search too often
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        console.log(this.state)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

// Take the above component's generated HTML and place it in the DOM (Document Object Model)
ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> is same as <App></App>, this is making an instance of the App class
// Second argument is the target container (check index.html for div inside body tag, this will be the root container element)
