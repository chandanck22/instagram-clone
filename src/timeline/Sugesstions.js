import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material'

function Sugesstions() {
  return (
    <div className='sugesstions'>
        <div className="sugesstions__title">Sugesstions</div>
        <div className="sugesstions__usernames">

          <div className="sugesstions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>C</Avatar>
              </span>
              <div className="username__info">
                <div className="username">shyam_</div>
                <div className="relation">New to Instagram</div>
              </div>
            </div>
            <button className='follow__button'>Follow</button>
          </div>

          <div className="sugesstions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>C</Avatar>
              </span>
              <div className="username__info">
                <div className="username">saman_</div>
                <div className="relation">New to Instagram</div>
              </div>
            </div>
            <button className='follow__button'>Follow</button>
          </div>

          <div className="sugesstions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>C</Avatar>
              </span>
              <div className="username__info">
                <div className="username">_ram</div>
                <div className="relation">New to Instagram</div>
              </div>
            </div>
            <button className='follow__button'>Follow</button>
          </div>

          <div className="sugesstions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>C</Avatar>
              </span>
              <div className="username__info">
                <div className="username">ayush</div>
                <div className="relation">New to Instagram</div>
              </div>
            </div>
            <button className='follow__button'>Follow</button>
          </div>

        </div>
    </div>
  )
}

export default Sugesstions
