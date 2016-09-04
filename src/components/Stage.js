import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import StageCard from "./stageCard"
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
    if(!onStage){return <div></div>}
    const { list } =this.props.dock;
    const music = list[onStage];
    const {name,info,path} = music || {}
    var base64Image='';
        if(info.picture[0]){
        base64Image = new Buffer(info.picture[0].data, 'binary').toString('base64');  
        }
    const stageData = {
          img: '<img style="display:block; width:100%;height:100%;" src= "data:image/jpeg;base64,'+base64Image+'"/>',
          title: name,
          source:path,
          author: info.album
        }
    return <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <StageCard data={stageData}></StageCard>
        </MuiThemeProvider>
    </div>
  }
}
