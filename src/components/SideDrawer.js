import React from 'react'

const SideDrawer = ({ colors, setSelectedColor}) => {

  const handleRandomizer = () => {
    setSelectedColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return(
    <div className='sideDrawer'>
      <div className='sideDrawerContent'>
        <button className='button' onClick={handleRandomizer}>Random Color</button>
        <label>Red</label>
        <label>Orange</label>
        <label>Yellow</label>
        <label>Green</label>
        <label>Blue</label>
        <label>Purple</label>
        <label>Brown</label>
        <label>Gray</label>
      </div>
    </div>
  )
}

export default SideDrawer
