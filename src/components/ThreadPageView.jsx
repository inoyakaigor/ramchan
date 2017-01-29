import React, {Component} from 'react'
import {Link} from 'react-router'
import Comments from './Comments.jsx'
import Header from '../components/Header.jsx'
import Paper from 'material-ui/Paper'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange200, orange900, grey200, white} from 'material-ui/styles/colors';
import ThreadHeader from './ThreadHeader.jsx'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange900,
    primary1Color: orange900,
    primary2Color: orange200
  },
})

export default class ThreadPageView extends Component {
  render() {
    let {message, date} = this.props
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Header/>
              <Link to='/' className='back-link'>← На главную</Link>
              <Paper className='thread-preview'>
                <ThreadHeader date={date} />
                {message}
              </Paper>
              <Comments/>
            </div>
    </MuiThemeProvider>
  }
}