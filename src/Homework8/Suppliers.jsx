import React, { useState, useEffect} from 'react'


function SuppliersPage() {

    const [suppliers,setSuppliers] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/suppliers')
        .then(res => res.json())
        .then(data => {
            setSuppliers(data);
        })
    }, [])
    
    
  return (<>
    <h1>Suppliers Lenght: {suppliers.length}</h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Title</th>
                <th>Address</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>{
            suppliers && suppliers.map(item => {
                return <tr>
                    <th></th>
                    <th>item</th>
                    <th>item</th>
                    <th>item</th>
                    <th><button>Delete</button></th>
                </tr>
                
            })}   
        </tbody>
    </table>
  
  
  </> 
  )
   
  
}

export default SuppliersPage