import React from 'react';
import {ArtistStyle, SongStyle} from "./text.css";

export const SongTitle = () => {
    return (
        <div>
            <h4 className={SongStyle}>Stargirl Interlude</h4>
        </div>
    );
};

export const Artist = () => {
    return (
        <div>
            <h4 className={ArtistStyle}>The Weeknd, Lana Del Rey</h4>
        </div>
    )
}