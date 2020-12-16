import React, { useState, useEffect } from 'react'
import ColorBox from './components/ColorBox'
import SideDrawer from './components/SideDrawer'
import RandomSelectedColor from './components/RandomSelectedColor'
import logo from './icons/logo-symbol.svg'
import { useQuery, gql } from '@apollo/client'
import './App.css'

const GET_ALL_COLORS = gql`
  query getAllColors {
    getAllColors
  }
`

const App = () => {
  const [colors, setColors] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [search, setSearch] = useState(null)

  const { data, error, loading } = useQuery(GET_ALL_COLORS)

  useEffect(() => {
    setColors(data && data.getAllColors)
  }, [data])

  useEffect(() => {
    if(!!search && search.length === 0) {
      setColors(data && data.getAllColors)
    }
  }, [search]) // eslint-disable-next-line

  if (error) return <div>{error}</div>
  if (loading) return <div>{loading}</div>

  const handleSearch = (e) => {
    setColors(colors.filter(color => color.indexOf(e.target.value) > -1))

    setSearch(e.target.value)
  }

  return (
    <div className='app'>
      <div className='header'>
        <div>
          <img src={logo} alt='Logo'/>
        </div>
        <input className='search' type='text' placeholder='Search' value={search} onChange={handleSearch} />
      </div>
      <div className='body'>
        <SideDrawer colors={colors} setSelectedColor={setSelectedColor} />
        <div className='bodyContent'>
          {
            !!selectedColor 
            ? 
            <RandomSelectedColor colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            :
            !!colors && colors.map((color) => (<ColorBox color={color} />))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
