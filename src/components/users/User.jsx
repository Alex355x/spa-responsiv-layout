import React from "react";
import "./user.scss";


const User = ({ photo, name, position, email, phone }) => {
      
   return (
      <div className="user">
         <img src={photo} className='user__photo' alt='foto'></img>
         <h2 className='user__name'>{name}</h2>
         <h3 className='user__spec'>{position}</h3>
         <p className='user__email'>{email}</p>
         <p className='user__phone'>{phone}</p>
      </div>
   )
}

export default User;