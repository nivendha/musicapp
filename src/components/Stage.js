import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {addMusic, play} from "../actions/stageAction"

import Paper from 'material-ui/Paper';

const pstyle = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

@connect((store) => {
  return {
    stg: store.stage,
    dock:store.dock
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  //  this.props.dispatch(addMusic('123',{'name':'nive'}))
   // this.props.dispatch(addMusic('223',{'name':'ndive'}))
  }

  playMusic() {
    //this.props.dispatch(stage.play(id,music))
  }

  render() {
    const { onStage,onPlay } = this.props.stg;
    const { list } =this.props.dock;
    const music = list[onStage];
    const {name,info} = music || {}
    return <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={pstyle} zDepth={1}>
        {name}
        </Paper>
        </MuiThemeProvider>
    </div>
  }
}
