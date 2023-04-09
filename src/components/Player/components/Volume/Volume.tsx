import React from 'react';
import * as Slider from '@radix-ui/react-slider'
import {VolumeSliderRange, VolumeSliderRoot, VolumeSliderThumb, VolumeSliderTrack} from "./VolumeSlider.css";
import {Button} from "../../Player.css";
import {VolumeFilled, VolumeMuted} from "../../../../shared/icons";
import {VolumeContainer} from "./Volume.css";


interface VolumeSliderProps {
    volume: number;
    setVolume: (volume: number) => void;
}

export const VolumeSlider = ({volume, setVolume}: VolumeSliderProps) => {
    return (
        <div className={VolumeContainer}>
            <button className={Button} onClick={() => setVolume(volume > 0 ? 0 : 1)}>
                {volume > 0 ?
                    <VolumeFilled width={26} height={26}/> :
                    <VolumeMuted width={26} height={26} />}
            </button>
            <Slider.Root className={VolumeSliderRoot}
                         value={[volume]}
                         max={1}
                         step={.01}
                         onValueChange={(e) => setVolume(e[0])}
                         aria-label="CurrentTime">
                <Slider.Track className={VolumeSliderTrack}>
                    <Slider.Range className={VolumeSliderRange}/>
                </Slider.Track>
                <Slider.Thumb className={VolumeSliderThumb}/>
            </Slider.Root>
        </div>
    );
}