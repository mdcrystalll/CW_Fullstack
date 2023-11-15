import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>user</span>
            <p>posted</p>
          </div>
          <div className="edit">
            <Link to ={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe assumenda, eligendi neque illum porro aspernatur perspiciatis rerum. Consequatur iste vitae, nam optio corporis aspernatur doloremque culpa tempore distinctio fugiat aliquid!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam sit harum praesentium. Nostrum in officia recusandae consequuntur repellat maxime, facilis magni modi autem quaerat assumenda, asperiores quas quidem explicabo?</p>
      </div>
     <Menu />
    </div>
  )
}

export default Single
