import React, { Component } from 'react';

class Song extends Component {
    render() {
        // Recibimos los props
        const { title, artist, duration } = this.props; // destructuracion

        return (
            <div className="song">
                <h3>{title}</h3>
                <p>🎤 {artist}</p>
                <p>⏳ {duration}</p>
            </div>
        );
    }
}

export default Song;
