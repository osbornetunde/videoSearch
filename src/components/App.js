import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'


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
            I have found {this.state.videos.length} videos.
        </div>
        )}
}

export default App;