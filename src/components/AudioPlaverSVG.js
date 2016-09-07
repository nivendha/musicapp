import React from 'react'

export default class Layout extends React.Component {

  render() {
    return (
    <div className="AudioPlayerSVG">
    <svg version="1.1" x="0px" y="0px"  width="200px" height="200px" viewBox="0 0 200 200"  id="cd-animated-svg" >
    <g id="cd-loading">
          <g id="cd-circle">
            <circle id="cd-loading-circle" class="cd-stroke cd-stroke-color-2" cx="100" cy="100" r="77.5"/>
            <circle id="cd-loading-circle-filled" class="cd-stroke cd-stroke-color-3" cx="100" cy="100" r="77.5" transform="rotate(-90 100 100)"/>
          </g>
          <g id="cd-play-btn">
            <rect class="cd-pointer" x="84" y="78" width="33" height="44"/>
            <polygon class="cd-fill-color-1" points="84,78 116,100 84,122   "/>
          </g>
          <g id="cd-pause-btn" transform="translate(100 100) scale(0)">
            <rect class="cd-pointer" x="81" y="80" width="38" height="40"/>
            <rect class="cd-fill-color-1" x="81" y="80" width="11" height="40"/>
            <rect class="cd-fill-color-1" x="108" y="80" width="11" height="40"/>
          </g>
        </g>
    </svg>
    </div>
    );
  }
}