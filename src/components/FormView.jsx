import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
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

export default class FormView extends Component {
  render() {
    const {handleSubmit, handleCancel} = this.props
    const show_cancel_btn = !!handleCancel

    return <MuiThemeProvider muiTheme={muiTheme}>
            <Paper className='form' zDepth={0}>
              <form onSubmit={handleSubmit}>
                <TextField
                  floatingLabelText='Введите текст…'
                  multiLine={true}
                  rows={5}
                  rowsMax={10}
                  name='thread_message'
                  fullWidth={true}
                />
                <div className='actions'>
                  {show_cancel_btn
                    ? <RaisedButton
                        label="Отмена"
                        primary={true}
                        onTouchTap={handleCancel}
                        className='button'
                      />
                    : null
                  }
                  <RaisedButton
                    label="Отправить"
                    primary={true}
                    type='submit'
                    className='button'
                  />
                </div>
              </form>
            </Paper>
          </MuiThemeProvider>
  }
}