import React, { useContext } from 'react';
import {Artist, SongTitle} from "./components/Text/Text";
import {AudioSlider} from "./components/AudioPlayer/AudioSlider/AudioSlider";
import { player, PlayerContainer } from "./Player.css";
import { AudioContext } from "../../providers/audio-provider";

export const LekkerePlayer = () => {
    const {currentTime, durationTime, isPlaying, play, pause, seek} = useContext(
        AudioContext
    );

    return (
        <div className={player}>
            <div className={PlayerContainer}>
                <SongTitle/>
                <Artist/>
            </div>
            <button onClick={isPlaying ? pause : play} style={{ color: "black", marginRight: 20, minWidth: 120}}>{isPlaying ? 'Pause' : 'Play'}</button>
            <AudioSlider currentTime={currentTime} seek={seek} durationTime={durationTime}/>
        </div>
    );
};
