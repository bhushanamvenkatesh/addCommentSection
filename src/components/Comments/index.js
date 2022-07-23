import {Component} from 'react'
import {v4 as uid} from 'uuid'

import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  addListItem = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const randomNum = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const bgClass = initialContainerBackgroundClassNames[randomNum]

    const newItem = {
      id: uid(),
      name: nameInput,
      date: new Date(),
      comment: commentInput,
      isLiked: false,
      className: bgClass,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newItem],
      nameInput: '',
      commentInput: '',
    }))
  }

  onNameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onTextChange = event => {
    this.setState({commentInput: event.target.value})
  }

  removeComment = id => {
    console.log(id)
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  renderCommentItem = () => {
    const {commentsList} = this.state
    return commentsList.map(eachItem => (
      <CommentItem
        key={eachItem.id}
        eachItem={eachItem}
        changeLikeImage={this.changeLikeImage}
        removeComment={this.removeComment}
      />
    ))
  }

  changeLikeImage = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }

        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, commentInput, nameInput} = this.state
    return (
      <div>
        <h1 className="heading">Comments</h1>

        <div className="comments-container">
          <form onSubmit={this.addListItem}>
            <div className="top-section">
              <div className="add-comment-section">
                <p className="text">Say something about 4.0 Technologies</p>
                <input
                  className="name"
                  onChange={this.onNameChange}
                  placeholder="Your Name"
                  value={nameInput}
                />
                <textarea
                  row="30"
                  cols="30"
                  className="text-area"
                  onChange={this.onTextChange}
                  placeholder="Your Comment"
                  value={commentInput}
                />
                <button className="button" type="submit">
                  Add Comment
                </button>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="comments-image"
                alt="comments"
              />
            </div>
          </form>
          <hr className="h-line" />
          <div>
            <div className="comments-count-container">
              <p className="comments-count">
                <span className="comments-number">{commentsList.length}</span>
                Comments
              </p>
            </div>
            <ul className="comments-list">{this.renderCommentItem()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
