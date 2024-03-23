//import logo from './logo.svg';
import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import { Spotify } from '../../util/Spotify';

class App extends React.Component {

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
  }],
  playlistName: 'Example Playlist',
  playlistTracks: [{
    name: 'Playlist track 1',
    artist: 'Meher Zain playlist',
    album: 'Love playlist',
    id:3
  },
  {
    name: 'Playlist Track 2',
    artist: 'Atif Aslam playlist',
    album: 'Festival playlist',
    id:4
  }

  ]

 };
 this.addTrack = this.addTrack.bind(this);
 this.removeTrack = this.removeTrack.bind(this);
 this.updatePlaylistName = this.updatePlaylistName.bind(this);
 this.savePlaylist = this.savePlaylist.bind(this);  
 this.search = this.search.bind(this);
}

addTrack(track){
  const foundTrack = this.state.playlistTracks.find(playlistTrack => 
    playlistTrack.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);
    if(foundTrack){
      console.log("Track already exists");
    }
    else{
      this.setState({playlistTracks: newTrack});
    }
}

removeTrack(track){
  const isPresent = this.state.playlistTracks.filter(
    (playlistTrack) => playlistTrack.id !== track.id
  );
  this.setState({playlistTracks: isPresent});
}

updatePlaylistName(name){
 this.setState({playlistName: name});
}

savePlaylist(){
  const trackURIs = this.state.playlistTracks.map((track) =>
  track.uri );
  const name = this.state.playlistName;
  Spotify.savePlaylistName(name, trackURIs).then(() => {
    this.setState({
      
    playlistName: "New Playlist",
    playlistTracks: []
    }
    );
  });

}

search(term){
  Spotify.search(term).then((result) => {
    this.setState({searchResults: result});
  });
}

  render(){
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
       <div className='App-playlist'>
       <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
       <Playlist playlistName={this.state.playlistName} 
       playlistTracks={this.state.playlistTracks}
       onRemove={this.removeTrack}
       onNameChange={this.updatePlaylistName}
       onSave= {this.savePlaylist}/>
       </div>

      </div>
    </div>
  );
}
}

export default App;