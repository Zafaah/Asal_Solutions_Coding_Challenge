import React from 'react'

const ContectList = ({ contect }) => {

   const { fullName, mobile, targetGroup } = contect

   return (

      <div className="container card m-3" style={{ width: '18rem' }}>
         <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            className="card-img-top" alt="..." style={{ color: 'ButtonFace' }} />
         <div className="card-body">
            <p className="card-text">Name: {fullName}</p>
            <p className="card-text">Mobile: {mobile}</p>
            <p className="card-text">Target Group: {targetGroup}</p>
         </div>
      </div>

   )
}

export default ContectList