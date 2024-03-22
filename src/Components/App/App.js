//import logo from './logo.svg';
import React, {Component} from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends Component() {

constructor(props)
{
super(props);
 this.state = {
  searchResults:[ {
    name: 'Track 1',
    artist: 'Meher Zain',
    album: 'Love',
    id:1
  },
  {
    name: 'Track 2',
    artist: 'Atif Aslam',
    album: 'Festival',
    id:2
  }]

 };
  }

  render(){
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
       <div className='App-playlist'>
       <SearchResults searchResults={this.state.searchResults}/>
       <Playlist/>
       </div>

      </div>
    </div>
  );
}
}
export default App;
