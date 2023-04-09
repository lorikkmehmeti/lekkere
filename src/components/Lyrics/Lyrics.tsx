import React, {RefObject, useContext, useEffect, useRef, useState} from "react";
import {AudioContext} from "../../providers/audio-provider";
interface Lyric {
    start: number;
    end: number;
    text: string;
}

interface LyricsProps {
    lyrics: Lyric[];
    audioSrc?: string;
    audioRef?: any;
}

export const Lyrics = ({ lyrics }: LyricsProps) => {
    const [activeLyricIndex, setActiveLyricIndex] = useState(-1);
    const lyricRefs = useRef<RefObject<HTMLAnchorElement>[] | null>(null);
    const {currentTime, play, seek, ended} = useContext(
        AudioContext
    );

    useEffect(() => {
        // Create refs for the lyric elements
        if (lyrics.length) {
            lyricRefs.current = lyrics.map(() => React.createRef<HTMLAnchorElement>());
        }
    }, [lyrics]);

    useEffect(() => {

        const newActiveIndex = lyrics.findIndex(
            (lyric) => currentTime && currentTime >= lyric.start && currentTime <= lyric.end
        );
        if (newActiveIndex !== activeLyricIndex) {
            setActiveLyricIndex(newActiveIndex);
        }
        // check if audio has ended and scroll to first lyric
        if (ended && lyricRefs.current && lyricRefs.current.length) {
            (lyricRefs.current[0].current as HTMLElement).scrollIntoView({behavior: "smooth", block: "center"})
        }
    }, [lyrics, activeLyricIndex, currentTime, ended]);

    const scrollToActiveLyric = () => {
        if (lyricRefs.current && activeLyricIndex !== -1) {
            const activeLyricRef = lyricRefs.current[activeLyricIndex].current;
            if (activeLyricRef) {
                (activeLyricRef as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    useEffect(() => {
        scrollToActiveLyric();
    }, [activeLyricIndex]);

    return (
        <div className="lyrics-container">
            <div className="lyrics">
                {lyrics.map((lyric, index) => (
                    <a
                        onClick={() => {
                            seek(lyric.start);
                            play();
                        }}
                        key={index}
                        ref={lyricRefs && lyricRefs.current && lyricRefs.current[index]}
                        className={index === activeLyricIndex ? "active" : ""}
                    >
                        {lyric.text}
                    </a>
                ))}
            </div>
        </div>
    );
};