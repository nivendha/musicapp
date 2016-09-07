import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import AudioPlaverSVG from './AudioPlaverSVG'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <AudioPlaverSVG/>
      <ReactAudioPlayer
        src={this.props.musicSrc}
      />
      </div>
    );
  }
}