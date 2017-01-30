import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//mui
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange200, orange900, grey200, white} from 'material-ui/styles/colors';

import ThreadsPreviewView from '../components/ThreadsPreviewView.jsx'
import FormView from '../components/FormView.jsx'
import Header from '../components/Header.jsx'

import * as appActions from '../actions/App.js'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange900,
    primary1Color: orange900,
    primary2Color: orange200
  },
})

function mapStateToProps (state) {
  return {
    writing: state.app.writing,
    fetching: state.app.fetching,
    threads: state.app.threads
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

class App extends Component {
  handleAddThread() {
    const {writePost} = this.props.appActions
    writePost();
  }
  handleCancel() {
    const {writePost} = this.props.appActions
    writePost(true);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {postWritten} = this.props.appActions
    const threads = this.props.threads

    let curr_tid = threads.length == 0
                    ? 0
                    : threads.sort((p, n) => {
                        return p.tid > n.tid ? 1 : p.tid < n.tid ? -1 : 0
                      }).slice(-1)[0].tid

    const message = new FormData(e.target).get('thread_message');
    postWritten({tid: ++curr_tid, message});
  }
  componentWillMount() {
    const {getThreads} = this.props.appActions
    getThreads()
  }
  render() {
    const {threads, writing, fetching} = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          { writing
            ? <FormView handleSubmit={::this.handleSubmit} handleCancel={::this.handleCancel}/>
            : <div className='actions center'>
                <RaisedButton
                  label="Добавить пост"
                  primary={true}
                  onTouchTap={::this.handleAddThread}
                  className='button'
                />
              </div>
          }
          {
           fetching
           ? <div className='progress'><CircularProgress /></div>
           : <ThreadsPreviewView threads={threads}/>
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)