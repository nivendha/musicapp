import React from "react"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import AudioPlayer from "./AudioPlayer"

const cstyle = {
  height:400    
};

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
    return <div style={cstyle}>
       <Card>
    
    <CardMedia
    overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.auctor} />}
    >
    <div dangerouslySetInnerHTML={{__html: this.props.data.img}}></div>
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    </CardText>
    <CardActions>
    <AudioPlayer musicSrc={this.props.data.source}/>
    </CardActions>
  </Card>
    </div>
  }
}
