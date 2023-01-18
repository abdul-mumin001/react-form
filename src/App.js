import {useState, useEffect} from "react"
import './App.css';

function App() {

  const initialValues={username:"",email:"",password:""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange = (e)=>{
    // console.log(e.target);
    const {name,value}=e.target;
    setFormValues({...formValues, [name]:value})
  // console.log(formValues);
  };

const handleSubmit =(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues))
  setIsSubmit(true);
}
useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues)
  }
},[formErrors])

const validate=(values) =>{
  const errors={};
  const regex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  if(!values.username){
    errors.username="Usename is required"
  }
  if(!values.email){
    errors.email="Email is required"
  }
  if(!values.password){
    errors.password="Password is required"
  }
return errors;

}
  return (
    <div className="container">
    <from onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <div className='form'>
        <div className='field'>
          <label>Username</label>
          <input type='text' name='username' placeholder='username' value={formValues.username} onChange={handleChange}/>
        </div>
        <p>{formErrors.username}</p>
        <div className='field'>
        <label>Email</label>
          <input type='text' name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
        </div>
        <p>{formErrors.email}</p>
        <div className='field'>
        <label>Password</label>
          <input type='password' name='password' placeholder='password' value={formValues.password} onChange={handleChange}/>
        </div>
        <p>{formErrors.password}</p>
        <button className='submit'>Submit</button>
      </div>
    </from>
  </div>
  );
}

export default App;
