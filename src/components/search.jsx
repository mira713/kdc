import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { search } from '../redux/search/search.action';
import './modal.css';
import './home.css';

const Search = () => {
  const data = useSelector(store => store.SearchReducer.data);
  let [query, setQuery] = useState('')
  let [res, setRes] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(query))
  }, [query])

  let openModal=(item)=>{
    window.location.reload()
      return(
        <div className="modal">
          <div className="modal-content">kjhk</div>
        </div>
      )
  }
  console.log("from search page", data)
  return (
    <>
      <div className="searchContainer">
        <div className="searchInner input">
        <input placeholder='Search by Title' onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className={query[0]?"dropdown":"dropdownEmpty"}style={{height:data[4]?"200px":"auto"}}>
          {data.map((el=>{
            return (
              <div className="dropdown-row" key={el._id}>
                     <p onClick={()=>openModal(el)}>{el.title}</p>
              </div>
            )
          }))}
        </div>
      </div>
    </>

  )
}

export default Search