import React from 'react'

const Pagination = ({ colorPerPage, colors, paginate }) => {
  let pageNumbers = []

  for(let i = 1; i <= Math.round(colors / colorPerPage); i++ ) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => (
           <li key={pageNumber} className='pageItem'>
             <a href="#" onClick={() => paginate(pageNumber)} style={{color: '#0D2323'}} >
               {pageNumber}
              </a>
           </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
