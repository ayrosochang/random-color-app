import React, { useState, useEffect } from 'react'
import ColorBox from './components/ColorBox'
import SideDrawer from './components/SideDrawer'
import Pagination from './components/Pagination'
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
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const colorPerPage = 10
  
  const { data, error, loading } = useQuery(GET_ALL_COLORS)

  useEffect(() => {
    if(!!data) {
      setColors(data.getAllColors)
    }
  }, [data])

  useEffect(() => {
    if(search.length === 0 && !!data) {
      setColors(data.getAllColors)
    }
  // eslint-disable-next-line
  }, [search])
  
  if (error) return <div>{error}</div>
  if (loading) return <div>{loading}</div>

  const handleSearch = (value) => {
    setColors(colors.filter(color => color.indexOf(value) > -1))

    setSearch(value)
  }

  // get current posts
  const indexOfLastColor = currentPage * colorPerPage
  const indexOfFirstColor = indexOfLastColor - colorPerPage
  const currentColor = colors?.slice(indexOfFirstColor, indexOfLastColor) || []

  //change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='app'>
      <div className='header'>
        <div>
          <img src={logo} alt='Logo'/>
        </div>
        <input className='search' type='text' placeholder='Search' value={search} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div className='body'>
        <SideDrawer colors={colors} setSelectedColor={setSelectedColor} />
        <div className='bodyContent1'>
          <div className='bodyContent'>
            {
              !!selectedColor 
              ? 
              <RandomSelectedColor colors={currentColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
              :
              currentColor.map((color) => (<div key={color}><ColorBox color={color} setSelectedColor={setSelectedColor} /></div>))
            }
          </div>
          <Pagination colorPerPage={colorPerPage} colors={colors.length} paginate={paginate}/>
        </div>
      </div>
    </div>
  )
}

export default App;
