import React from 'react'
import './App.css'
import ThemeProvider from './providers/theme-provider'
import {LekkerePlayer} from "./components/Player/Player";
import {Lyrics} from "./components/Lyrics/Lyrics";
import {AudioPlayer} from "./providers/audio-provider";


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

function App() {
    return (
        <ThemeProvider>
            <AudioPlayer src={'./song.mp3'}>
                <div className="container">
                    <Lyrics lyrics={lyrics}/>
                </div>
                <LekkerePlayer/>
            </AudioPlayer>
        </ThemeProvider>
    )
}

export default App
