 import { useFormik } from 'formik';
 import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined
} from "@ant-design/icons"
import { Input } from "antd"

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
     <form className='form-login' onSubmit={formik.handleSubmit}>
      <div className='login-container'>
 <div className='email'>
       <label htmlFor="email">Email Address:</label>
       <Input
         id="email"
         name="email"
         className='input'
         prefix={<MailOutlined />}
         placeholder='Email Address'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
</div>
<div className='password'>
  <label htmlFor="password">Password</label>
      <Input.Password
        id="password"
        name="password"
        type='password'
        className='input'
        prefix={<LockOutlined/>}
        placeholder="input password"
        onChange={formik.handleChange}
        value={formik.values.password}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
</div>
       <button className='btn' type="submit">Login</button>
     </div>  
   </form>
   );
 };

 export default Login;