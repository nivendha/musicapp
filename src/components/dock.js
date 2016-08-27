import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {addToList, stageMusic} from "../actions/dockAction"

import Paper from 'material-ui/Paper';
import MusicgridList from "./MusicgridList"
import RaisedButton from 'material-ui/RaisedButton';

import os from "os"
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;
const fs = require('fs');	
const mm = require('musicmetadata');

  const divStyle = {
  };

  const pstyle = {
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
  };
@connect((store) => {
  return {
    dock: store.dock
  };
})

export default class Layout extends React.Component {
	constructor(props) {
    super(props);
    this.addMusicFolder = this.addMusicFolder.bind(this);
		this.hostPlay = this.hostPlay.bind(this);
  }
  	hostPlay(id,dtl){
  		this.props.dispatch(stageMusic(id,dtl));
  	}
	addMusicFolder(){
	const _this=this;
	dialog.showOpenDialog({ 
		     filters: [{name: 'mp3 file', extensions: ['mp3']}],
		     properties: [ 'openFile']
		   },
		     function (fileNames) {
		        if (fileNames === undefined) return;
		        var fileName = fileNames[0];

			var parser = mm(fs.createReadStream(fileName), function (err, metadata) {
			 // if (err) throw err;
			  console.log(os);
			  _this.props.dispatch(addToList(_.last(fileName.split(os.platform()==='win32'?'\\':'/')),fileName,metadata));
			});

		    }
		)

	}
    render(){
    	const {dock} = this.props;
    	const dockData=[];
    	_.forIn(dock.list, function(value, key) {
    		var base64Image='';
    		if(value.info.picture[0]){
    		base64Image = new Buffer(value.info.picture[0].data, 'binary').toString('base64');	
    		}
		  dockData.push({
		  		id:value.id,
			    img: '<img style="display:block; width:100%;height:100%;" src= "data:image/jpeg;base64,'+base64Image+'"/>',
			    title: value.name,
			    author: value.info.album
			  })
		});
        return <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={pstyle} zDepth={1}>
		        <div onClick={this.addMusicFolder}>
		       		<RaisedButton label="click here to import mp3" fullWidth={true} primary={true} />
		        </div>
		        <MusicgridList hostPlay={this.hostPlay} tilesData={dockData}/></Paper>
		        </MuiThemeProvider>
        </div>
    }
}