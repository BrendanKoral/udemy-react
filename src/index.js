//Create a new component that produces HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDDTU8hjJTNuwZE9R2qV8Z8jgPoqdYZ2Ns';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'));