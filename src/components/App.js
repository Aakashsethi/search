import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query: term},
            headers:{
                Authorization: 'Client-ID c2d6f4b4633c5bc33b12f3d5f93a18c8f97eb9be05bdfcedb04ac7389b1626a8'
            }

        });
    }
 render(){
    return (
        <div className = "ui container" style={{marginTop:'100px'}} > 
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    );
  }
}
export default App;