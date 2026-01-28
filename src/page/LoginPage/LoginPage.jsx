import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const LoginPage = () => {
  const [error,setError] = useState('')
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)

  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password});
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      // console.log(user);
      navigate(`${location.state? location.state : '/'}`)
    })
    .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // alert(errorCode,errorMessage);
    setError(errorCode)
  });
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input 
          name='email' 
          type="email" 
          className="input" 
          placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input 
          name='password' 
          type="password" 
          className="input" 
          placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>

            <div className='space-y-3 '>
                <div>
                    <button className='btn w-full btn-outline btn-secondary'> <FcGoogle size={24}/> Login with google</button>
                </div>
                <div>
                    <button className='btn w-full btn-outline btn-primary'> <FaGithub size={24}/> Login with Github</button>
                </div>
            </div>

            {error && <p className='text-red-400 text-xs'>{error}</p>}

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='text-center pt-5 text-[16px]'>Create an account <Link to={'/ragisterPage'}><span className='text-secondary'>Register?</span></Link></p>
        </fieldset>
      </form>
    </div>
  
</div>
        </div>
    );
};

export default LoginPage;