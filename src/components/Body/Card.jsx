import React from 'react'
import "../CSS/Card.css"
import { poempicked } from '../../Global/Slice'
import { useDispatch } from 'react-redux'

const Card = ({setOpenPoem, openPoem, poem}) => {
const dispatch = useDispatch()
  const poemselected =()=>{
    dispatch(poempicked(poem))
    setOpenPoem(!openPoem)
  }
  
  return (
    <div className='Card' onClick={poemselected}>
        <strong>
          {poem.Title}
        </strong>
        <p></p>
    </div>
  )
}

export default Card