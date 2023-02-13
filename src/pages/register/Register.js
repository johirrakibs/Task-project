import React, { useState } from 'react';
import './registerStyle.css';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let users = JSON.parse(localStorage.getItem("users")) || [];
  //   let newUser = { firstName, lastName, email, password };
  //   users.push(newUser);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPassword("");
  // };
  //
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      event.preventDefault();
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let newUser = formData;
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      // submit the form
      setFormSubmitted(true);
    }
  };
  //
  return (
    <form onSubmit={handleSubmit}>
      {formSubmitted && <div>Form submitted successfully!</div>}
      <div className="main-div">
        <div className="sub-main-div">

          <div className="input-main-div">

            <h1 className="header">Register Your Account</h1>

            <div className="input-div">
              <input className="input-filed"
                type="text"
                name='firstName'
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              // onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className='error'>{errors.firstName}</div>}
              <input className="input-filed"
                type="text"
                name='lastName'
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className='error'>{errors.lastName}</div>}

            </div>
            <div className="input-div">
              <input className="input-filed"
                type="email"
                name='email'
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className='error'>{errors.email}</div>}
              <input className="input-filed"
                type="password"
                name='password'
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className='error'>{errors.password}</div>}
            </div>

            <button type="submit" className="btttn-submit">Sign In</button>
            <a href="#" className="cancel">Cancel</a>

          </div></div></div>
    </form>
  );
  //     const [email, setEmail] = useState('');
  //     const [password, setPassword] = useState('');
  //     const [state, setState] = useState({
  //       firstName: "",
  //       lastName: ""
  //     });


  //   const  handleChange =(evt)=> {
  //       const value = evt.target.value;
  //       setState({
  //         ...state,
  //         [evt.target.name]: value
  //       });
  //     }


  //   const  submitHandler  = (e) => {
  //     // e.preventDefault();

  //     // let userInfo = JSON.stringify(
  //       e.preventDefault();
  //       let users = JSON.parse(localStorage.getItem("users")) || [];
  //       let newUser = { state.firstName, state.lastName, email, password };
  //       users.push(newUser);
  //       localStorage.setItem("users", JSON.stringify(users));
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPassword("");

  //     //   firstName: state.firstName,
  //     //   lastName: state.lastName,
  //     //   email: email,
  //     //   password: password
  //     //   })
  //     //   let usersList = localStorage.getItem("users")
  //     //   console.log([...usersList, userInfo])
  //     //   localStorage.setItem("users", userInfo)
  //     // // console.log(state, email, password); 

  //     };
  //   return (
  //     <div >
  //     <form onSubmit={submitHandler }> 
  //     <label>

  //     <input
  //       type="text"
  //       name="firstName"
  //       placeholder={"First Name "}
  //       value={state.firstName}
  //       onChange={handleChange}
  //     />
  //   </label>
  //   <label>

  //     <input
  //       type="text"
  //       name="lastName"
  //       placeholder={"Last Name "}
  //       value={state.lastName}
  //       onChange={handleChange}
  //     />
  //   </label>


  //     <input type={"email"} onChange={(e)=>{setEmail(e.target.value)
  //  }} name={"Email"}  placeholder={"Enter Your Email"}/>

  //     <input type={"password"} onChange={(e)=>{setPassword(e.target.value)
  //          }} name={"Pasword"}  placeholder={"Enter Your Password"}/>

  //     <button type={"submit"} >Sign In</button>
  //     </form>
  //     </div>
  //   )
}
export default Register;