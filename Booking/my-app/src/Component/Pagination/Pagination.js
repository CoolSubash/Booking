import React from 'react'
import './pagination.css'
function Pagination() {
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <div className="pagination-details">
        {page.map((e) => {
          return <button className="pagination_items">{e}</button>
        })}
      </div>
    </>
  )
}

export default Pagination
