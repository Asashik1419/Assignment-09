import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div>
            



            <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>

            <div className='space-y-3 '>
                <div>
                    <button className='btn w-full btn-outline btn-secondary'> <FcGoogle size={24}/> Login with google</button>
                </div>
                <div>
                    <button className='btn w-full btn-outline btn-primary'> <FaGithub size={24}/> Login with Github</button>
                </div>
            </div>

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center pt-5 text-[16px]'>Create an account <Link to={'/ragisterPage'}><span className='text-secondary'>Register?</span></Link></p>
        </fieldset>
      </div>
    </div>
  
</div>
        </div>
    );
};

export default LoginPage;