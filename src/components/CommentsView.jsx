import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange200, orange900, grey200, white} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange900,
    primary1Color: orange900,
    primary2Color: orange200
  },
})

export default class CommentsView extends Component {
  render() {
    let comments = this.props.comments
    return <MuiThemeProvider muiTheme={muiTheme}>
              <Paper className='thread-comments' zDepth={0}>
                <h2>Обсуждение</h2>
                <Divider/>
                {comments.map((comment, idx) => {
                        return <div key={idx} className='thread-comment'>
                                  <p className='text'>{comment.text}</p>
                                  <Divider/>
                               </div>
                      }
                    )
                }
              </Paper>
    </MuiThemeProvider>
  }
}