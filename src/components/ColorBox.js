import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div className='colorContainer'>
      <div className='color' style={{background: color}}/>
      <div className='hex'>
        {color}
      </div>
    </div>
  )
}

export default ColorBox
