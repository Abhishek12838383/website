import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="nav"> 
        <span class="material-symbols-outlined">
list
</span>
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
      <div className="img">
       
          <img src="https://images.unsplash.com/photo-1619947603049-1cc0708f336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
       
    </div>
      <div className="txt">
        <h1>More than justadesign agency</h1>
      </div>
      <button className='btn'>Discover More</button>
    </div>
  )
}

export default Home
