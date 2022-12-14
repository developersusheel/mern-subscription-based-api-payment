import React, {useState} from 'react'
import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    console.log(name, email, password);
  }

  return (
    <div className="d-flex justify-content-center" style={{height: '80vh'}}>
      <div className="container align-items-center d-flex-center">
        <div className="row col-md-6 offset-md-3 text-center">
            <h1 className="pt-5 fw-bold">Let's get started</h1>
            <p className="lead pb-4">Sign up for free. No Credit card required.</p>
            
            <div className="form-group">
              <Input label="Name" value={name} setValue={setName}/>
              <Input label="Email" type="email" value={email} setValue={setEmail}/>
              <Input label="Password" type="password" value={password} setValue={setPassword}/>
              <div className="d-grid"><Button handleClick={handleClick} type="primary" text="Register" Size="lg"/></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Register