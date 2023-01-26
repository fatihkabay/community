import React from 'react';
 import { useFormik } from 'formik';
 import "./component.css"
 
 const Login = () => {
   const formik = useFormik({
     initialValues: {
      firstname: '',
      lastname: '',
       email: '',
       password: '',
       gender: '',
       birthday: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstname">First Name</label>
       <input
         id="fistname"
         name="firstname"
         placeholder='First Name'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstname}
       />

<label htmlFor="lastname">Last Name</label>
       <input
         id="lastname"
         name="lastname"
         placeholder='Last Name'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastname}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         placeholder='Email Address'
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

<label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         placeholder="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />

<label htmlFor="gender">Man</label>
       <input
         id="gender"
         name="gender"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.gender}
       />

<label htmlFor="gender">Women</label>
       <input
         id="gender"
         name="gender"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.gender}
       />

<label htmlFor="birthday">Birthday</label>
       <input
         id="gender"
         name="gender"
         placeholder='Birthday'
         type="number"
         onChange={formik.handleChange}
         value={formik.values.gender}
       />
 
       <button type="submit">Login</button>
     </form>
   );
 };

 export default Login;