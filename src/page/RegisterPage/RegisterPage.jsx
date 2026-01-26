import React from 'react';
import { Link } from 'react-router';

const RegisterPage = () => {
    return (  
  <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <div className="card-body">
        <fieldset className="fieldset">
             {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* photo url */}
          <label className="label">photo URL</label>
          <input type="text" className="input" placeholder="photo URL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-center pt-5 text-[16px]'>Allready Have an account <Link to={'/loginPage'}><span className='text-secondary'>Login?</span></Link></p>
        </fieldset>
      </div>
    </div>
  </div>

    );
};

export default RegisterPage;