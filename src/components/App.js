import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends React.Component {
    state = {videos: [] };


    handelTermSubmit = async term => {
          const response = await  youtube.get('/search', {
                params: {
                    q: term
                }
            });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
        <div className="container">
            <SearchBar onFormSubmit={this.handelTermSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>
        )}
}

export default App;