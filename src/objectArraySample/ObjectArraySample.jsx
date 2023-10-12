import React from 'react'
import { products } from '../data/products'

function ObjectArraySample() {
  return (<>
  <table className='w3-table'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>unitPrice</th>
            <th>unitsInStock</th>
        </tr>
    </thead>
    <tbody>
      {
        products.map((item) => {
          return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.unitPrice}</td>
            <td>{item.unitsInStock}</td>
          </tr>
        })
      }
    </tbody>
  </table>
  </>

    
  )
}

export default ObjectArraySample