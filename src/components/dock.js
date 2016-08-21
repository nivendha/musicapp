import React from "react"

const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;

const fs = require('fs');	
const mm = require('musicmetadata');
export default class Layout extends React.Component {
	addMusicFolder(){
	dialog.showOpenDialog({ 
		     filters: [{name: 'mp3 file', extensions: ['mp3']}],
		     properties: [ 'openFile']
		   },
		     function (fileNames) {
		        if (fileNames === undefined) return;
		        var fileName = fileNames[0];

			var parser = mm(fs.createReadStream(fileName), function (err, metadata) {
			  if (err) throw err;
			  console.log(metadata);
			});

		    }
		)

	}
    render(){
        return <div onClick={this.addMusicFolder}>
       click here to import mp3
        </div>
    }
}