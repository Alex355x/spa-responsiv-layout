import React, { useState } from "react";
import "./registration.scss";
import { createUser } from '../Gateway';

const Registration = ({fetchUsers, positions}) => {
  const [state, setUpdateState] = useState({ 
    name: '',
    email: '',
    phone: '',
    position: '',
    position_id: '',
    registration_timestamp: Date.now(),
    photo: 'Upload your photo',
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('phone', state.phone);
    formData.append('position', state.position);
    formData.append('position_id', state.position_id);
    formData.append('registration_timestamp', state.registration_timestamp);
    formData.append('photo', state.photo);

    createUser(formData).then(() => fetchUsers());
    setUpdateState({
      name: '',
      email: '',
      phone: '',
      position: '',
      position_id: '',
      registration_timestamp: '',
      photo: '',
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateState({
      ...state,
      [name]: value.replace(/^.*\\/, ""),
    });
  };
 
  const handleRadioClick = (e) => {
    const { id, value } = e.target;
      setUpdateState({
        ...state,
        position_id: id,
        position: value,
      });
  }

  const [stateError, setUpdateStateError] = useState({
    error: '',
    errorName: '',
    errorTel: '',
    errorPhoto: '',
  })

  const isRequired = value => value !== '' ? undefined : 'Required';
  const regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const isEmail = value => regEmail.test(value) ? undefined : 'Error';
  const regPhone = new RegExp(/^[\+]{0,1}380([0-9]{9})$/);
  const isPhone = value => value.length <= 13 && regPhone.test(value) ? undefined : 'Error';
  
  const validatorsByField = {
    email: [isEmail],
    name: [isRequired],
    phone: [isPhone],
    photo: [isRequired],
  }
  const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
      .map(validator => validator(value))
      .filter(errorText => errorText)
      .join(',');
  }
  const onEmailChange = e => {
    e.preventDefault();
    const errorText = validate('email', e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      error: errorText, });
  }
  const onNameChange = e => {
    e.preventDefault();
    const errorText = validate('name', e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorName: errorText, });
  }
  const onTelChange = e => {
    e.preventDefault();
    const errorText = validate('phone', e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorTel: errorText, });
  }
 
  const styleRedInput = { border: "1px solid rgb(243, 11, 23)", 
    boxShadow: "0px 0px 3px 0px rgba(243, 11, 23,1)"
  };
  const styleRedInput2 = { border: "1px solid rgb(243, 11, 23)"};
  const styleRedInput3 = { border: "1px solid rgb(84, 137, 236)"};

  const upLoadPhoto = (e) => { 
    e.preventDefault();
    const errorText = validate('photo', e.target.files[0].name)
    console.log(errorText)
    setUpdateStateError({
      ...stateError,
      errorPhoto: errorText, });
    setUpdateState({
      ...state,
     photo: e.target.files[0],
    });
  };
  
  return (
    <section id='reg' className='registration'>
        <h1 className='registration__title'>Register to get a work</h1>
        <p className='registration__attention'>Attention! After successful registration and alert, update the list of users in the block from the top</p>
        <form className="registration__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="registration__label">Name</label>
          <input
            style={stateError.errorName !== '' ? styleRedInput : null}
            className="registration__input"
            name="name"
            type="text"
            required minLength="2" maxLength="60"
            value={state.name}
            placeholder="Your name"
            onChange={onNameChange}
            autoComplete="off"
          />
          <span className='error-text'>{stateError.errorName}</span>
        </div>
          <div>
            <label htmlFor="email" className="registration__label">Email</label>
            <input
              style={stateError.error !== '' ? styleRedInput : null}
              className="registration__input"
              name="email"
              type="email"
              value={state.email}
              placeholder="Your email"
              required minLength="2" maxLength="100"
              autoComplete="off"         
              onChange={onEmailChange}
            />
            <span className='error-text error-text_email'>{stateError.error}</span>
          </div>
          <div>
            <label htmlFor="phone" className="registration__label">Phone number</label>
            <input
              style={stateError.errorTel !== '' ? styleRedInput : null}
              className="registration__input"
              name="phone"
              type="tel"
              value={state.phone}
              placeholder="+380 XX XXX XX XX"
              required minLength="13" maxLength="13"
              onChange={onTelChange}
              autoComplete="off"
            />
            <span className='error-text'>{stateError.errorTel}</span>
            <div className="registration__notate">Enter phone number in open format</div>
          </div>
          <div className="select">
            <div className="select__title"> Select your position</div>
            <div className="select__radio"> 
              {positions.map(el =>                   
                    <label key={el.name} className="container">{el.name}
                      <input type="radio"
                        name='key'
                        value={el.name}
                        id={el.id}
                        onClick={handleRadioClick}
                      />
                      <span className="checkmark"></span>
                    </label>)}
            </div>
          </div>
          <div className="photo__upload_title">
            <label htmlFor="image_uploads">Photo</label>
            <div className="preview"
            style={stateError.errorPhoto === '' ? null : styleRedInput2}
            >
              <p>{state.photo === 'Upload your photo' ? 'Upload your photo' : state.photo.name}</p>
              <button className='preview_btn-browse'
               style={stateError.errorPhoto === '' ? null : styleRedInput2}>
              <input 
              required
              placeholder='Upload your photo'
              className="input_standard" 
              onChange={upLoadPhoto}
              type="file" name="photo" accept=".jpg, .jpeg" />
              Browse
              </button>
            </div>
          </div>
          <button className='registration__btn_sign' type='submit'>Sing up now</button>
        </form>
    </section>
  )
}

export default Registration;








// можно переделать логику на работу через formData
  // const initialFormData = Object.freeze({
  //   photo: 'Upload your photo',
  // });
  
  // const [formData, updateFormData] = useState(initialFormData);
     // updateFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value.trim()
    // });