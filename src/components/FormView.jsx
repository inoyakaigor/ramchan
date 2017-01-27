import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class FormView extends Component {
  render() {
    const {handleSubmit, handleCancel} = this.props

    return <form onSubmit={handleSubmit}>
              <TextField
                floatingLabelText='Введите текст поста'
                multiLine={true}
                rows={5}
                rowsMax={10}
                name='thread_message'
              />
              <RaisedButton
                label="Отмена"
                primary={true}
                onTouchTap={handleCancel}
              />
              <RaisedButton
                label="Отправить"
                primary={true}
                type='submit'
              />
            </form>
  }
}