import Message from '../message/Message'
import './rightBar.css'
import FirendReqe from '../firendReqe/FirendReqe'
function RightBar() {
  return (
    <div className='rightBar'>
      <div className="rightbar-container">
        <Message/>
        <FirendReqe/>
      </div>
    </div>
  )
}

export default RightBar