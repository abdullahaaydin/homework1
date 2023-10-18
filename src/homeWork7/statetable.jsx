import React, {useState} from 'react'
import { suppliersData } from '../data/supplierData';

function StateTable() {
    const [suppliers, setsuppliers] = useState(suppliersData) ;
    
    const sorting = () => [...suppliers].sort((a, b) =>
    a.companyName > b.companyName ? 1 : -1, )


    const deletesupplier = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredsuppliers = suppliers.filter(q => q.id != id);
            setsuppliers([...filteredsuppliers])
    } }

  
    
  return (<>
  <h1>Lenght: {suppliers.length}</h1>
  <table className='w3-table w3-striped'>
    <thead>
        <tr>
            <th>id</th>
            <th><button onClick={() => sorting()}>Company Name</button></th>
            <th>Contact Name</th>
            <th>Phone</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            suppliers.map((item) => {
                return <tr>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.phone}</td>
                    <td><button onClick={() => deletesupplier(item.id)} className='w3-button w3-red'>Delete</button></td>
                </tr>
            }
                )
        }
    </tbody>
  </table>
    
    </> )
}

export default StateTable