import React from 'react'

const RecipeCards = ({result}) => {
  return (
    <div className='result'>
        <span>{result.name}</span>
    </div>
  )
}

export default RecipeCards;