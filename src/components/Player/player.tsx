import React from 'react';
import {player, PlayerContainer} from "./player.css";
import {Artist, SongTitle} from "./components/Text/Text";

export const LekkerePlayer = () => {
    return (
        <div className={player}>
            <div className={PlayerContainer}>
                <SongTitle />
                <Artist />
            </div>
        </div>
    );
};
