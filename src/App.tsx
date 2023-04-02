import React, {RefObject, useEffect, useRef, useState} from 'react'
import './App.css'
import ThemeProvider from './providers/theme-provider'
import {LekkerePlayer} from "./components/Player/player";
interface Lyric {
    start: number;
    end: number;
    text: string;
}

interface LyricsProps {
    lyrics: Lyric[];
    audioSrc: string;
}

const Lyrics = ({ lyrics, audioSrc }: LyricsProps) => {
    const [activeLyricIndex, setActiveLyricIndex] = useState(-1);
    const audioRef = useRef<HTMLAudioElement>(null);
    const lyricRefs = useRef<RefObject<HTMLAnchorElement>[] | null>(null);

    useEffect(() => {
        // Create refs for the lyric elements
        if (lyrics.length) {
            lyricRefs.current = lyrics.map(() => React.createRef<HTMLAnchorElement>());
        }
    }, [lyrics]);

    useEffect(() => {
        const handleTimeUpdate = () => {
            const currentTime = audioRef.current?.currentTime;
            const newActiveIndex = lyrics.findIndex(
                (lyric) => currentTime && currentTime >= lyric.start && currentTime <= lyric.end
            );
            if (newActiveIndex !== activeLyricIndex) {
                setActiveLyricIndex(newActiveIndex);
            }
        };

        // Add event listener to the audio tag
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            // Remove event listener when component unmounts
            audio?.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [audioRef, lyrics, activeLyricIndex]);

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
            <audio ref={audioRef} src={audioSrc} controls />

            <div className="lyrics">
                {lyrics.map((lyric, index) => (
                    <a
                        onClick={() => {
                            if (audioRef && audioRef.current) {
                                audioRef.current.currentTime = lyric.start;
                                audioRef.current.play().then()
                            }
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


const lyrics = [
    {
        start: 10,
        end: 13,
        text: "I had a vision"
    },
    {
        start: 14,
        end: 18,
        text: "A vision of my nails in the kitchen"
    },
    {
        start: 19.5,
        end: 24,
        text: "Scratchin' counter tops, I was screamin'"
    },
    {
        start: 24.5,
        end: 26.7,
        text: "My back arched like a cat"
    },
    {
        start: 27,
        end: 31,
        text: "My position couldn't stop, you were hittin'"
    },
    {
        start: 31.5,
        end: 39,
        text: "And I shouldn't cry, but I love it, starboy"
    },
    {
        start: 41.7,
        end: 50,
        text: "And I shouldn't cry, but I love it (I love it), starboy"
    },
    {
        start: 52,
        end: 60,
        text: "And I shouldn't cry, but I love it, starboy"
    },
    {
        start: 63,
        end: 72,
        text: "And I shouldn't cry, but I love it, starboy"
    },
    {
        start: 74,
        end: 82,
        text: "I just wanna see you shine 'cause I know you are a stargirl"
    },
    {
        start: 85,
        end: 92,
        text: "I just wanna see you shine 'cause I know you are a stargirl"
    },
    {
        start: 96,
        end: 103,
        text: "I just wanna see you shine 'cause I know you are a stargirl"
    }
];

const audioSrc =
    "https://files.sharpdownload.com/download/uploads/2023/01/The-Weeknd-Ft-Lana-Del-Rey-Stargirl-Interlude-24Naijamuzic-com.mp3?_=1";

function App() {

  return (
    <ThemeProvider>
      <div className="container">
          <Lyrics lyrics={lyrics} audioSrc={audioSrc} />
      </div>
      <LekkerePlayer />
    </ThemeProvider>
  )
}

export default App
