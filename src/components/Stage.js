import React from "react"
import { connect } from "react-redux"

import {addMusic, play} from "../actions/stageAction"

@connect((store) => {
  return {
    stg: store.stage
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchUser())
    console.log(this.props);
    this.props.dispatch(addMusic('123',{'name':'nive'}))
  }

  playMusic() {
    //this.props.dispatch(stage.play(id,music))
  }

  render() {
    const { _stg } = this.props;

    return <div>
     {_stg}
    </div>
  }
}
