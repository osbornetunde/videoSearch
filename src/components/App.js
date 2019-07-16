import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {videos: [], selectedVideo: null };

    componentDidMount() {
        const values = ['trendings', 'football', 'children stories', 'technology', 'music', 'funny videos'];
        var value = values[Math.floor(Math.random()*values.length)];
        this.handelTermSubmit(value);
    }


    handelTermSubmit = async term => {
          const response = await  youtube.get('/search', {
                params: {
                    q: term
                }
            });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
    });
    };

    handleVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
        <div className="container">
            <SearchBar onFormSubmit={this.handelTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        onVideoSelect={this.handleVideoSelect} 
                        videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default App;