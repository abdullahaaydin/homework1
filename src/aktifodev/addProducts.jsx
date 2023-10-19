import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';


const addProductsValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name boş bıralılamaz."),
    unitPrice: Yup.number().min(0, "0'dan küçük olamaz.").required("Name boş bıralılamaz."),
    stock: Yup.number().min(0, "0'dan küçük olamaz.").required("Name boş bıralılamaz."),
    qualityPerUnit: Yup.number().required("Name boş bıralılamaz.")

})


function addProducts() {
    const formik = useFormik({
        initialValues: {
            name: "",
            unitPrice: "",
            stock: "",
            qualityPerUnit: "",
        },
        validationSchema:addProductsValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    

  return (<>
    <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' name='name' onChange={formik.handleChange}
                    value={formik.values.name}  />
                {formik.errors.name ? <p style={{color:'red'}}>{formik.errors.name}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' name='unitPrice' onChange={formik.handleChange}
                    value={formik.values.unitPrice}  />
                      {formik.errors.unitPrice ? <p style={{color:'red'}}>{formik.errors.unitPrice}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='text' name='stock' onChange={formik.handleChange}
                    value={formik.values.stock}  />
                    {formik.errors.stock ? <p style={{color:'red'}}>{formik.errors.stock}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Quality Per Unit</label>
                <input type='text' name='qualityPerUnit' onChange={formik.handleChange}
                    value={formik.values.qualityPerUnit}  />
                    {formik.errors.qualityPerUnit ? <p style={{color:'red'}}>{formik.errors.qualityPerUnit}</p> : <></>}
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
  
  
  </>
    
  )}


export default addProducts