import React from 'react'

function Loading() {
  return (
    <div className='Loading'>
        <img src={require('../img/favicon.png')} alt='png'/>
        <div className='circle'></div>
    </div>
  )
}

export default Loading