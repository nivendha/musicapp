import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

export default class GridListExampleSimple extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
      return <MuiThemeProvider muiTheme={getMuiTheme()}>
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {this.props.tilesData.map((tile) => (
        <GridTile onClick={this.props.hostPlay.bind(null,tile.id,tile)}
          key={tile.id}
          title={tile.title}
          subtitle={<span><b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
                    <div dangerouslySetInnerHTML={{__html: tile.img}}>
                    </div>
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>    
    }
}