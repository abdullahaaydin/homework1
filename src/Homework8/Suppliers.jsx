import React, { useState, useEffect} from 'react';
import axios from 'axios';



function SuppliersPage() {

    const [suppliers,setSuppliers] = useState([])

    useEffect(() => {
        loadData();
     
    }, [])
    function loadData() {
        fetch("https://northwind.vercel.app/api/suppliers")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setSuppliers(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }
    const deleteSupplier = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
          axios
            .delete("https://northwind.vercel.app/api/suppliers/" + id)
            .then((res) => {
              loadData();
            });
        }
      };
    
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
            suppliers && suppliers.map((item) => {
                return  (<tr>
                    <th>{item.id}</th>
                    <th>{item.companyName}</th>
                    <th>{item.contactName}</th>
                    <th>{item.address}</th>
                    <th><button onClick={() => deleteSupplier(item.id)}>Delete</button></th>
                </tr>
                );
            })}   
        </tbody>
    </table>
  
  
  </> 
  );
   
  
}

export default SuppliersPage