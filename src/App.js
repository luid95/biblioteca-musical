import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {

  componentDidMount() {
    console.log("La aplicación se ha cargado correctamente.");
  }

  render() {
    return (
        <div className="app">
            <Header />
            <div className="songs-list">
                <Song title="Blinding Lights" artist="The Weeknd" duration="3:20" />
                <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" />
                <Song title="Shape of You" artist="Ed Sheeran" duration="4:02" />
            </div>
        </div>
    );
}
}

export default App;
