import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//mui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange200, orange900, grey200, white} from 'material-ui/styles/colors';

import ThreadsPreviewView from '../components/ThreadsPreviewView.jsx'
import FormView from '../components/FormView.jsx'

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
    const message = new FormData(e.target).get('thread_message');
    postWritten(message);
  }
  render() {
    const {threads, writing} = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>Анонимная имиджборда. Добро пожаловать. Снова.</h1>
          { writing
            ? <FormView handleSubmit={::this.handleSubmit} handleCancel={::this.handleCancel}/>
            : <RaisedButton
                label="Добавить пост"
                primary={true}
                onTouchTap={::this.handleAddThread}
              />
          }
          <ThreadsPreviewView threads={threads}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)