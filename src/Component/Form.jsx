import React, { useRef, useState } from 'react';
import "./Form.css";

function Form() {
  const [error, setError] = useState('');
  const userNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    const userName = userNameRef.current.value.trim();
    const phoneNumber = phoneNumberRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Validation
    if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // If all validations pass, log the values
    console.log('UserName:', userName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      <form className='preview' onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1 className='high'>Fill the Form</h1>
          {error && <div className="error">{error}</div>} {/* Error message display */}
          <label htmlFor="exampleInputUserName" className="form-label">
            <h5 className='fun'>UserName</h5>
          </label>
          <input
            type="text"
            placeholder='Enter Your Name'
            className="form-control"
            id="exampleInputUserName"
            ref={userNameRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPhoneNumber" className="form-label">
            <h5 className='fun'>Phone Number</h5>
          </label>
          <input
            type="text"
            placeholder='Enter Your Number'
            className="form-control"
            id="exampleInputPhoneNumber"
            ref={phoneNumberRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            <h5 className='fun'>Email</h5>
          </label>
          <input
            type="email"
            placeholder='Enter Your Email'
            className="form-control"
            id="exampleInputEmail"
            ref={emailRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            <h5 className='fun'>Password</h5>
          </label>
          <input
            type="password"
            placeholder='Enter Your Password'
            className="form-control"
            id="exampleInputPassword"
            ref={passwordRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputConfirmYourPassword" className="form-label">
            <h5 className='fun'>Confirm Password</h5>
          </label>
          <input
            type="password"
            placeholder='Confirm Your Password'
            className="form-control"
            id="exampleInputConfirmYourPassword"
            ref={confirmPasswordRef}
          />
        </div>
        <button type="submit" className="fly">Submit</button>
      </form>
    </div>
  );
}

export default Form;
