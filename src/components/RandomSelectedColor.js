import React from 'react'
import ColorBox from './ColorBox'

const RandomSelectedColor = ({colors, selectedColor, setSelectedColor}) => {
  return(
    <div className='randomContainer'>
      <div style={{display: 'flex'}}>
        <div className='selectedColor'>
          <div className='color' style={{background: selectedColor}}/>
          <div className='hex selectedColorLabel'>
            {selectedColor}
          </div>
        </div>
      </div>
      <div className='body bodyContent'>
        {!!colors && colors.map((color) => (<div key={color}><ColorBox color={color} setSelectedColor={setSelectedColor} /></div>))}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <button className='button' onClick={() => setSelectedColor(null)}>Clear</button>
      </div>
    </div>
  )
}

export default RandomSelectedColor
