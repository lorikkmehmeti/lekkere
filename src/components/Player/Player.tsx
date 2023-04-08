import React, {useContext} from 'react';
import {Artist, SongTitle} from "./components/Text/Text";
import {AudioSlider} from "./components/AudioPlayer/AudioSlider/AudioSlider";
import {Button, player, PlayerContainer} from "./Player.css";
import {AudioContext} from "../../providers/audio-provider";
import {Pause, Play, SkipBackward, SkipForward, VolumeFilled} from "../../shared/icons";

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
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", flex: 1}}>
                <div style={{ display: "flex", alignItems: "center", gap: 5}}>
                    <button className={Button}>
                        <SkipBackward width={28} height={28}/>
                    </button>
                    <button onClick={isPlaying ? pause : play}
                            className={Button}>
                        {isPlaying ? <Pause width={40} height={40}/> : <Play width={40} height={40}/>}
                    </button>
                    <button className={Button}>
                        <SkipForward width={28} height={28}/>
                    </button>
                </div>
                <AudioSlider currentTime={currentTime} seek={seek} durationTime={durationTime}/>
            </div>
            <div style={{flex: "none", flexBasis: "240px"}}>
                <button className={Button}>
                    <VolumeFilled width={26} height={26}/>
                </button>
            </div>
        </div>
    );
};
