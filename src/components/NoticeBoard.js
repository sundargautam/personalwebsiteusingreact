import React from 'react'
import '../componentscss/notificationboard.css';
export function NoticeBoard() {
    return (
        <div className="notice-board">
        <div className="row notice-board-content">
          <p>
            If you would like to learn web development and mobile app
            development click here !!
            <a
              href="https://www.youtube.com/channel/UC3H7rkHOhwfRszIOTUa7GzQ"
              target="popup"
              ><i className="fas fa-external-link-alt"/></a>
          </p>
        </div>
      </div>
    )
}
