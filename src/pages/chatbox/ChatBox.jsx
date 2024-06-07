import './ChatBox.css'

//components...........
import Stories from '../../components/stories/Stories'
//fack apis............
import CurrentUserData from '../../FackApis/CurrentUserData'
//FontAwesomeIcon.........
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'
function ChatBox() {
  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img
            src={
              "https://proj.nozoluna.com/public/dash/assets/img/" +
              localStorage.getItem("image")
            }
            alt=""
          />
          <div className="user-name">
            <h3 style={{ width: 'auto' }}>{localStorage.getItem("name")} </h3>
          </div>
        </div>
        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder="write something" />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label type="submit" className="btn btn-primary" htmlFor="CFile">
              <FontAwesomeIcon icon={faFileAlt} />
              <input type="flile" id="CFile" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatBox