import React from 'react'
import './About.css'

function  About() {
  return (
    <div className='about'>
    <div className="left">
        <img src="https://plus.unsplash.com/premium_photo-1677695598264-6d88f8ee31f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="" />
    </div>
    <div className="rightt">
        <div className="title">
            <h5>ABOUT THE AGENCY</h5>
        </div>
        <div className="heaing">
            <h2>We're Top Notch &  Best <mark> Webdesign & SEO </mark> Agency</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam maxime ducimus facilis nam cumque accusamus possimus corporis fuga? Sint quas natus exercitationem soluta quam at suscipit obcaecati ad deleniti repudiandae temporibus consequuntur ducimus odit eius molestias nisi, cum accusamus architecto provident? Ea ipsa mollitia ad beatae aut sunt exercitationem</p>
      
        <button className='btnn'>Discover More</button>
        
    </div>
    </div>
  )
}

export default  About
