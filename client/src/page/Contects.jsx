import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ContectList from '../component/ContectList';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Contects = () => {
   const [contect, setContect] = useState([]);
   const [filteredContect, setfilttered] = useState();
   const [tic, setTic] = useState([])
   const [targetGroup, setTarget] = useState({
      Household: false,
      Teacher: false,
      Principal: false,
      FHW: false,
      FHS: false,
   })

   const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      // console.log(name, checked)
      setTarget((prevTargetGroup) => ({
         ...prevTargetGroup,
         [name]: checked,
      }));
      if (checked) {
         setTic([...tic, name])
      }
      else {
         const filter = tic.filter((item) => item != name)
         setTic(filter)
      }



   };
   useEffect(() => {
      // console.log(tic)
      if (tic.length == 0) {

         setfilttered(contect)
      } else {
         let res = []
         tic.map((item) => {
            const filter = contect.filter((element) => element.targetGroup == item)
            res = [...res, ...filter]

            // console.log(filter)

         })
         setfilttered(res)


      }

   }, [tic])



   const fetch = async () => {
      try {
         const res = await axios.get("http://localhost:9000/beneficiaries");
         setContect(res.data)
         console.log(res.data)
      } catch (error) {
         console.error('Error fetching beneficiaries:', error);
      }
   }
   useEffect(() => {
      fetch()
   }, [])



   const onSearch = (e) => {
      const text = e.target.value.toLowerCase();

      if (text.length < 0) {
         setfilttered(contect)
      }
      const filter = contect.filter((contects) => contects.fullName.toLowerCase().includes(text));
      setfilttered(filter);



   }

   useEffect(() => {
      setfilttered(contect);
   }, [contect])



   return (
      <>
         <div className="container mb-5 mt-5  align-items-center justify-content-center"
            style={{ backgroundColor: "ButtonFace" }}
         >


            <h1 className='text-center p-4'>
               Beneficiaries Lists
            </h1>


            <div className="card-body row  no-gutters align-items-center">

               <div className="col-auto">
                  <i className="fas fa-search h4 text-body" />
               </div>
               <div className="col">
                  <input className="form-control form-control-lg " style={{ width: "300px" }} onChange={onSearch}
                     type="search" placeholder='search the Name.....' />
               </div>
               <button className='m-4 p-2 ms-auto form-control form-control-lg' style={{
                  backgroundColor: "white", width: "250px"
               }}> <Link to="/contectForm" className='btn-primary' >Add new Beneficiary</Link></button>
               <div>
                  <label className='m-4 text-center '>
                     <input type='checkbox'
                        name='Household'
                        checked={targetGroup.Household}
                        onChange={handleCheckboxChange}
                     />
                     Household
                  </label>
                  <label className='m-3 text-center '>
                     <input type='checkbox'
                        name='Teacher'
                        checked={targetGroup.Teacher}
                        onChange={handleCheckboxChange}
                     />
                     Teacher
                  </label>
                  <label className='m-3 text-center '>
                     <input
                        type="checkbox"
                        name="Principal"
                        checked={targetGroup.Principal}
                        onChange={handleCheckboxChange}
                     />
                     Principal
                  </label>

                  <label className='m-3 text-center '>
                     <input type='checkbox'
                        name='FHS'
                        checked={targetGroup.FHS}
                        onChange={handleCheckboxChange}
                     />
                     FHS
                  </label>
                  <label className='m-3 text-center '>
                     <input
                        type="checkbox"
                        name="FHW"
                        checked={targetGroup.FHW}
                        onChange={handleCheckboxChange}
                     />
                     FHW
                  </label>

               </div>
            </div>
            <div className='row'>
               {
                  filteredContect?.map((contect, index) => <ContectList key={index} contect={contect} />)
               }

            </div>


         </div>
      </>

   )
}

export default Contects