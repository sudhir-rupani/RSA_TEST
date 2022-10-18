import React from 'react'

const Box = ({
  className = '',
  title,
  price,
  desc,
  priceText,
  buttonText,
  onClick,
  isSelected,
}) => {
  const Title = () => {
    return title ? (
      <div className='title'>
        <h2>{title}</h2>
        <p>{`£${price} ${priceText}`}</p>
      </div>
    ) : (
      <>
        <h1>{`£${price}`}</h1>
        <b>{priceText}</b>
      </>
    )
  }
  return (
    <div className={`box ${className}`}>
      <Title />
      <p>{desc}</p>
      <button
        className={isSelected ? 'selected' : ''}
        onClick={(event) => onClick(event, title)}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Box
