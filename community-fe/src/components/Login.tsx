import React from 'react';
 import { useFormik } from 'formik';
 import "./component.css"
 
 const Login = () => {
   const formik = useFormik({
     initialValues: {
       email: '',
       password: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>

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
 
       <button type="submit">Login</button>
     </form>
   );
 };

 export default Login;