import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
        <div className='Left'>
            <img src={require('../img/footer.png')} alt='png'></img>
            <h2>Melody Music</h2>
        </div>
        <div className='Mid'>
            <p>©2023 All right reserved. <span>Jeevesh Rai</span></p>
        </div>
        <div className='Right'>
        <a href='https://jeeveshportfolio.netlify.app/' target='_blank' rel="noreferrer"><i className="fa-solid fa-id-card-clip"></i></a>
        <i className="fa-brands fa-square-instagram"></i>
        <a href='https://www.linkedin.com/in/jeevesh-rai-b678a0241/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/Jeevesh0207' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default Footer