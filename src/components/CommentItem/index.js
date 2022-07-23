// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const deleteImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'
const likeImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {eachItem, changeLikeImage, removeComment} = props
  const {name, date, comment, isLiked, id, className} = eachItem
  // const bgIndex=Math.ceil(Math.random()*())

  const surname = name[0] // charAt(0)

  const likedImage = isLiked ? likedImg : likeImg
  // console.log(className)

  const onLikeButtonClick = () => {
    // console.log(id)
    changeLikeImage(id)
  }

  const onDelete = () => {
    removeComment(id)
  }

  return (
    <li className="list-item">
      <div className="each-comment">
        <div className="initial-name-date-container">
          <p className={`initial ${className}`}>{surname}</p>
          <p className="person-name">{name}</p>
          <p className="date">{`${formatDistanceToNow(new Date(date))} ago`}</p>
        </div>
        <p>{comment}</p>
        <div className="like-delete-button">
          <div>
            <button
              className="bg-button"
              type="button"
              onClick={onLikeButtonClick}
            >
              <img src={likedImage} className="like-image" alt="like" />
            </button>
            <span>Like</span>
          </div>

          <button
            className="bg-button"
            type="button"
            onClick={onDelete}
            testid="delete"
          >
            <img src={deleteImg} className="delete-image" alt="delete" />
          </button>
        </div>
        <hr className="h-line" />
      </div>
    </li>
  )
}
export default CommentItem
