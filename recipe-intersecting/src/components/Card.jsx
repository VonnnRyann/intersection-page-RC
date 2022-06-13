import React from 'react'


const Card = ({recipe}) => {
  const {label,image} = recipe;

  return (
    <aside>
      <p className='wow'>{label}</p>
      <img src={image} alt={label} />
      <hr />
      <hr />
    </aside>
  )
}

export default Card