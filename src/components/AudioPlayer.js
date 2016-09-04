import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <ReactAudioPlayer
        src={this.props.musicSrc}
        autoPlay="true"
      />
      </div>
    );
  }
}