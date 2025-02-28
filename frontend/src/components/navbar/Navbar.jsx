import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <nav id = "navbar">
        <div className='logo'>
          <img src="https://stock.adobe.com/in/images/young-woman-practicing-yoga-doing-forearm-stand-crane-pose-asana-in-dark-room/293097377" alt="yoga image" srcset="" />
        </div>


        <div className='sign up'>
          <button>Sign Up</button>
          <button>Log In</button>
        </div>


        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor, saepe optio esse sit non fuga commodi laudantium ratione unde rem aliquid incidunt voluptas officiis tenetur blanditiis, cupiditate quia iusto eligendi dignissimos repellendus numquam velit corporis tempore! Rerum molestias dolorem saepe! Neque est atque hic maxime, minus corporis. Corporis nisi odio quidem non dolore obcaecati?</p>
        </div>
    </nav>
  )
}

export default Navbar