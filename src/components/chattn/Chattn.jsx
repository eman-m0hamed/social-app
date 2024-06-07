/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'

import './chattn.css'
import img9 from './images/img9.jpg'
import img8 from './images/img8.jpg'
import img7 from './images/img7.jpg'
import img6 from './images/img6.jpg'
import img5 from './images/img5.jpg'
import img4 from './images/img4.jpg'
import img3 from './images/img3.jpg'
import img2 from './images/img2.jpg'
import img1 from './images/img1.jpg'

export class Chattn extends Component {
  render() {
    return (
   
      <React.Fragment>
    <div className="container">
        <div className="leftSide">
       
            <div className="header">
                <div className="userimg">
                    <img src={img1} alt="" className="cover"/>
                </div>
                <ul className="nav_icons">
                    <li><ion-icon name="scan-circle-outline"></ion-icon></li>
                    <li><ion-icon name="chatbox"></ion-icon></li>
                    <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>
           
            <div className="search_chat">
                <div>
                    <input type="text" placeholder="Search or start new chat"/>
                    <ion-icon name="search-outline"></ion-icon> 
                </div>                
            </div>
           
            <div className="chatlist">
                <div className="block active">
                    <div className="imgBox">
                        <img src={img2} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Jhon Doe</h4>
                            <p className="time">10:56</p>
                        </div>
                        <div className="message_p">
                            <p>How are you doing?</p>
                        </div>
                    </div>
                </div>

                <div className="block unread">
                    <div className="imgBox">
                        <img src={img3} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Andre</h4>
                            <p className="time">12:34</p>
                        </div>
                        <div className="message_p">
                            <p>I love your youtube videos!</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>

                <div className="block unread">
                    <div className="imgBox">
                        <img src={img4} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Olivia</h4>
                            <p className="time">Yesterday</p>
                        </div>
                        <div className="message_p">
                            <p>I just subscribed to your channel</p>
                            <b>2</b>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img5} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Parker</h4>
                            <p className="time">Yesterday</p>
                        </div>
                        <div className="message_p">
                            <p>Hey!</p>                            
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img6} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Zoey</h4>
                            <p className="time">18/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>I'll get back to you</p>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img7} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Josh</h4>
                            <p className="time">17/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>Congratulations</p> 
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img8} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Dian</h4>
                            <p className="time">15/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>Thanks alot</p>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img9} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Sam</h4>
                            <p className="time">Yesterday</p>
                        </div>
                        <div className="message_p">
                            <p>Did you finish the project?</p>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img6} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Junior</h4>
                            <p className="time">18/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>Nice course</p>
                        </div>
                    </div>
                </div>
                <div className ="block">
                    <div className="imgBox">
                        <img src={img3}className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Zoey</h4>
                            <p className="time">18/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>'ll get back to you</p>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img1} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Josh</h4>
                            <p className="time">17/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>Congratulations</p> 
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="imgBox">
                        <img src={img7} className="cover" alt=""/>
                    </div>
                    <div className="details">
                        <div className="listHead">
                            <h4>Dian</h4>
                            <p className="time">15/01/2022</p>
                        </div>
                        <div className="message_p">
                            <p>Thanks alot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightSide">
            <div className="header">
                <div className="imgText">
                    <div className="userimg">
                        <img src={img8} alt="" className="cover"/>
                    </div>
                    <h4>Qazi <br/><span>online</span></h4>
                </div>
                <ul className="nav_icons">
                    <li><ion-icon name="search-outline"></ion-icon></li>
                    <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
            </div>

            
            <div className="chatbox">
                <div className="message my_msg">
                    <p>Hi <br/><span>12:18</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Hey <br/><span>12:18</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid fugiat accusamus dolore qui vitae ratione optio sunt <br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur <br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div className="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
            </div>
            
            
            <div className="chat_input">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Type a message"/>
                <ion-icon name="mic"></ion-icon>
            </div>
        </div>
    </div>
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </React.Fragment>
   
    )
  }
}

export default Chattn