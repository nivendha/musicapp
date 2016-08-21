import React from "react"
import { connect } from "react-redux"
import {addToList, stageMusic} from "../actions/dockAction"
import _ from "lodash"
import GridListExampleSimple from "./GridListExampleSimple"

const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;

const fs = require('fs');	
const mm = require('musicmetadata');

@connect((store) => {
  return {
    dock: store.dock
  };
})
export default class Layout extends React.Component {
	constructor(props) {
    super(props);
    this.addMusicFolder = this.addMusicFolder.bind(this);
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
			  console.log(metadata);
			  _this.props.dispatch(addToList(_.last(fileName.split('\\')),fileName,metadata));
			});

		    }
		)

	}
    render(){
    	const {dock} = this.props;
    	const dockData=[];
    	_.forIn(dock.list, function(value, key) {
		  console.log(key);
		  var base64Image = new Buffer(value.music.picture[0].data, 'binary').toString('base64');
		    var decodedImage = new Buffer(base64Image, 'base64').toString('binary');
		    fs.writeFile('build/'+value.id+'.jpg', decodedImage, 'binary', function(err) {
		    	console.log(arguments);
		    });
		  dockData.push({
			    img: value.id+'.jpg',
			    title: value.name,
			    author: value.music.album
			  })
		});
        return <div>
        <div onClick={this.addMusicFolder}>
       click here to import mp3
        </div>
        <GridListExampleSimple tilesData={dockData}/>
        </div>
    }
}