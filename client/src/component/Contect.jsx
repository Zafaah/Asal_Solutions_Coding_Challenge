import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBTextArea, MDBValidationItem } from 'mdb-react-ui-kit';
import ContectList from './ContectList';
import axios from 'axios';
import Contects from '../page/Contects';

const Contact = () => {
   const [fullName, setName] = useState('');
   const [mobile, setMobil] = useState('');
   const [targetGroup, setTarget] = useState([]);

   const handleSubm = async (e) => {
      e.preventDefault();
      try {
         if (mobile.startsWith('61') && mobile.length === 9 ||
            mobile.startsWith('77') && mobile.length === 9 ||
            mobile.startsWith('90') && mobile.length === 9 ||
            mobile.startsWith('62') && mobile.length === 9
         ) {
            const respond = await axios.post("http://localhost:9000/beneficiaries", {
               fullName: fullName,
               mobile: mobile,
               targetGroup: targetGroup
            })
            console.log(respond.data)
         } else {
            alert("pls try again the number")
         }
      } catch (error) {
         console.error(error)
      }
   }


   const onMobile = (e) => {
      // if (mobile.startsWith('61') && mobile.length() === 9 ||
      //    mobile.startsWith('77') && mobile.length() === 9 ||
      //    mobile.startsWith('90') && mobile.length() === 9 ||
      //    mobile.startsWith('62') && mobile.length() === 9
      // ) {
      setMobil(e.target.value)
      // } else {
      //    alert("shcjs")
      // }
   };

   return (
      <div className='mt-3 p-5' style={{ backgroundColor: "MenuText", height: "800px" }}>
         <div className='container  mt-5 p-5 align-items-center justify-content-center'
            style={{ width: "25%", backgroundColor: "ButtonFace" }}
         >
            <h1 className=' text-center'>Contect From</h1>
            <form className='m-4' onSubmit={handleSubm}>
               <div className="mb-3 ">
                  <label className="form-label" htmlFor="FullName">
                     FullName
                  </label>
                  <input className="form-control" type="text"
                     value={fullName} onChange={(e) => setName(e.target.value)} required />
               </div>
               <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                     Mobile
                  </label>
                  <input className="form-control" type="number"
                     onChange={onMobile} required />
               </div>
               <div className="mb-3">
                  <label className="form-label" htmlFor="Target">
                     Target Group
                  </label>
                  <input className="form-control" type="text"
                     value={targetGroup} onChange={(e) => setTarget(e.target.value)}
                     required />
               </div>
               <div className="d-flex justify-content-center">
                  <button type="submit" className="m-4 btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                     Submitt
                  </button>
               </div>
            </form>



         </div>
      </div>
   )
}

export default Contact