import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import {SliderRange, SliderRoot, SliderThumb, SliderTrack} from "./AudioSlider.css";

interface AudioSliderProps {
    currentTime: number;
    durationTime: number;
    seek: (time: number) => void;
}

export const AudioSlider = ({currentTime, durationTime, seek}: AudioSliderProps) => {
    return (
        <Slider.Root className={SliderRoot}
                     value={[currentTime]}
                     defaultValue={[0]}
                     onValueChange={(values) => seek(values[0])}
                     onValueCommit={(values) => seek(values[0])}
                     min={0}
                     max={durationTime}
                     step={1}
                     aria-label="CurrentTime">
            <Slider.Track className={SliderTrack}>
                <Slider.Range className={SliderRange}/>
            </Slider.Track>
            <Slider.Thumb className={SliderThumb}/>
        </Slider.Root>
    );
};
