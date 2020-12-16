import React from 'react'

const ColorBox = ({color, setSelectedColor}) => {
  return (
    <div className='colorContainer' onClick={() => setSelectedColor(color)}>
      <div className='color' style={{background: color}}/>
      <div className='hex'>
        {color}
      </div>
    </div>
  )
}

export default ColorBox
