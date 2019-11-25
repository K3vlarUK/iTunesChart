import React from 'react';

const SongDetail = (props) => {
    // debugger
    if (!props.data) return null;
    return(
        <div className="position-wrapper">
            <h3 className="position">Number {props.position + 1}</h3>
            <div className="chart-position">
                <p>"{props.data["im:name"].label}" by {props.data["im:artist"].label}</p>
                <img src={props.data["im:image"][2].label} />
            </div>
            <div className="player">
                <audio controls>
                    <source src={props.data.link[1].attributes.href} type="audio/mpeg" />
                    Your Browser doesnt support audio.
                </audio>
            </div>
        </div>
    )
}

export default SongDetail;