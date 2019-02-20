import React from 'react';


class SearchBar extends React.Component {
    state = {term : ''}


    handleInputChange = event => {
        
        this.setState({term: event.target.value})
    };

    handleFormSubmit = event => {
        event.preventDefault();

        //TODO make sure we call 
        //callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment"> 
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                            <label>Video Search</label>
                            <input 
                            type="text" 
                            value={this.state.term}  
                            onChange={this.handleInputChange} />
                    </div>
                </form>
            
            </div>

        )
    }
}

export default SearchBar;