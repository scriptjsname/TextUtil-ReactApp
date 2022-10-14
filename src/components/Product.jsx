import React from 'react'
import ClassCompo from './ClassCompo'
import FuncCOmpo from './FuncCOmpo'

const Product = ({name,price,color}) => {
  return (
      <div>
          {/* <FuncCOmpo name={ name} color={color} /> */}
          <ClassCompo
              name={name} color={color} 
              
          />
          <h1>{price}</h1>
    </div>
  )
}

export default Product