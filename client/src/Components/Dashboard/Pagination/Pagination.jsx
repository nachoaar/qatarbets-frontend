import React from "react";
import { useState } from "react";

export default function Pagination({allGames, itemsPerPages, setCurrentPage, currentPage}){
  const [pageLimit] = useState(5)
  const [maxPage, setMaxPage] = useState(5)
  const [minPage, setMinPage] = useState(0)

  const pages = []

  for (let i = 1; i < Math.ceil(allGames.length / itemsPerPages); i++) {
    pages.push(i)
  }


  const clickHandler = (e) =>{
    setCurrentPage(Number(e.target.id))
    window.scrollTo(0,0)
  }

  const handleNextBtn  = () =>{
    setCurrentPage(1)
    if(currentPage + 1 > maxPage){
      setMaxPage(maxPage + pageLimit)
        setMinPage(minPage + pageLimit)
    }
  }

  const handlePrevBtn = ()=>{
    setCurrentPage(currentPage - 1)
      if((currentPage - 1) % pageLimit === 0){
        setMaxPage(maxPage - pageLimit)
        setMinPage( minPage - pageLimit)
      }
  }

  let pageIncrementeBtn = null

    if (pages.length > maxPage){
      pageIncrementeBtn = <li onClick={handleNextBtn}> &hellip; </li>
    }

  let pageDecrementBtn = null

  if(minPage >= 1){
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>
    }

  const renderPageNumbers = pages.map(number =>{
    if (number < maxPage +1 && number > minPage){
      return(
        <li key={number} id={number} onClick={e => clickHandler(e)}
          className={currentPage === number ? 'active' : null}>{number}</li>
      )
    }else{
      return null
    }
  })


  return (
    <div className="flex order-1">
      <ul className="pageNumbers">
        <li>
          <button
            disabled={currentPage === pages[0] ? true :false}
            onClick={handlePrevBtn}>
            Prev
          </button>
        </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementeBtn}
        <li>
          <button disabled={currentPage === pages[pages.length - 1] ? true : false}>
            next
          </button>
        </li>
      </ul>
    </div>
  )
}
