import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
            <form onSubmit={handleSubmit}>
              <TextField
                floatingLabelText='Введите текст…'
                multiLine={true}
                rows={5}
                rowsMax={10}
                name='thread_message'
              />
              {show_cancel_btn
                ? <RaisedButton
                    label="Отмена"
                    primary={true}
                    onTouchTap={handleCancel}
                  />
                : null
              }
              <RaisedButton
                label="Отправить"
                primary={true}
                type='submit'
              />
            </form>
          </MuiThemeProvider>
  }
}