import React, {useEffect, useState} from 'react';

// Create a new context for the audio player
export const AudioContext = React.createContext<{
    currentTime: number;
    durationTime: number;
    isPlaying: boolean;
    play: () => void;
    pause: () => void;
    seek: (time: number) => void;
}>({
    currentTime: 0,
    durationTime: 0,
    isPlaying: false,
    play: () => {
    },
    pause: () => {
    },
    seek: () => {
    },
});

// Create a new audio player component
export const AudioPlayer: React.FC<{ src: string, children: React.ReactNode }> = ({src, children}) => {
    const [audioTrack, setAudioTrack] = useState<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [durationTime, setDurationTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [, setIsSeeking] = useState<boolean>(false);

    // Initialize the audio player when the component mounts
    useEffect(() => {
        const audioElement = new Audio(src);
        audioElement.volume = .2;
        setAudioTrack(audioElement);
        audioElement.addEventListener('timeupdate', () => handleTimeUpdate(audioElement));
        audioElement.addEventListener('durationchange', () => handleDuration(audioElement));
        audioElement.addEventListener('play', handlePlay);
        audioElement.addEventListener('pause', handlePause);
        audioElement.addEventListener('seeking', handleSeeking);
        audioElement.addEventListener('seeked', () => handleSeeked(audioElement));
        return () => {
            audioElement.removeEventListener('timeupdate', () => handleTimeUpdate(audioElement));
            audioElement.removeEventListener('play', handlePlay);
            audioElement.removeEventListener('durationchange', () => handleDuration(audioElement));
            audioElement.removeEventListener('pause', handlePause);
            audioElement.removeEventListener('seeking', handleSeeking);
            audioElement.removeEventListener('seeked', () => handleSeeked(audioElement));

            if (audioElement) audioElement.pause();
        };
    }, [src]);

    // Update the current time when the audio is playing
    const handleTimeUpdate = (audioElement: HTMLAudioElement) => {
        setCurrentTime(audioElement.currentTime);
    };

    const handleDuration = (audioElement: HTMLAudioElement) => {
        setDurationTime(audioElement!.duration);
    }

    // Set the isPlaying state to true when the audio starts playing
    const handlePlay = () => {
        setIsPlaying(true);
    };

    // Set the isPlaying state to false when the audio is paused
    const handlePause = () => {
        setIsPlaying(false);
    };

    // Set the isSeeking state to true when the user starts seeking
    const handleSeeking = () => {
        setIsSeeking(true);
    };

    // Set the isSeeking state to false and update the current time when the user finishes seeking
    const handleSeeked = (audioElement: HTMLAudioElement) => {
        setIsSeeking(false);
        setCurrentTime(audioElement!.currentTime);
    };

    // Set the duration time when the audio's metadata has been loaded

    // Play the audio when the play function is called
    const play = () => {
        audioTrack?.play().then();
        handlePlay();
    };

    // Pause the audio when the pause function is called
    const pause = () => {
        audioTrack?.pause();
        handlePause();
    };

    // Seek to a specific time when the seek function is called
    const seek = (time: number) => {
        audioTrack!.currentTime = time;
    };

    return (
        <AudioContext.Provider
            value={{currentTime, durationTime, isPlaying, play, pause, seek}}
        >
            {children}
        </AudioContext.Provider>
    )
}
