import React from 'react';
import SongDetail from './SongDetail';

class SongList extends React.Component {
    render(){
        const songs = this.props.songs.map((song, index) => {
            return (
                <SongDetail data={song} key={index} position={index} />
            );
        });

        return(
            <div className="song-list">
                {songs}
            </div>
        )
    }
}

export default SongList;