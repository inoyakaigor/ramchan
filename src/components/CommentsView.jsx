import React, {Component} from 'react'

export default class CommentsView extends Component {
  render() {
    let comments = this.props.comments
    return <div>
      {comments.map((comment, idx) => {
              return <p key={idx}>{comment.text}</p>
            }
          )
      }
    </div>
  }
}