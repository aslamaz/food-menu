import React from 'react'

const Head = () => {
  return (
    <div>
        <div className='headerDiv'>
                <div className='navDiv'>
                   
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul class="menu">
                        <li><a href="/Home">HOME</a></li>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">MAKE A RESERVATION</a></li>
                        <li><a href="#">CONTACT AS</a></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Head