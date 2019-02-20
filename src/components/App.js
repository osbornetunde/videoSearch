import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {videos: [], selectedVideo: '' };


    handelTermSubmit = async term => {
          const response = await  youtube.get('/search', {
                params: {
                    q: term
                }
            });

        this.setState({ videos: response.data.items });
    };

    handleVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
        <div className="container">
            <SearchBar onFormSubmit={this.handelTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={this.handleVideoSelect} 
            videos={this.state.videos}/>
        </div>
        )}
}

export default App;