import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();

const RegisterPage = () => {
    const {creatUser , setUser, updateUser} = use (AuthContext);

    const navigate = useNavigate();

    const handleGoogleSingIn = () =>{
      signInWithPopup(auth,googleProvider)
      .then(result =>{
        // console.log(result)
      })
      .catch(error =>{
        console.log(error)
      })
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name,photo,email,password});
        
        if (password.length < 6){
          alert('Password must be at least 6 characters');
          return;
        }
        creatUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            updateUser({displayName:name, photoURL:photo}).then(()=>{

              setUser({...user, displayName:name, photoURL:photo});
              navigate('/')
            })
            .catch((error) => {
              console.log(error);
              setUser(user)
            })
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
    return (  
  <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
             {/* name */}
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required />
          {/* photo url */}
          <label className="label">photo URL</label>
          <input name='photo' type="text" className="input" placeholder="photo URL" required />
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />

          <div className='space-y-3 '>
                          <div>
                              <button onClick={handleGoogleSingIn} className='btn w-full btn-outline btn-secondary'> <FcGoogle size={24}/> Login with google</button>
                          </div>
                          <div>
                              <button className='btn w-full btn-outline btn-primary'> <FaGithub size={24}/> Login with Github</button>
                          </div>
                      </div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='text-center pt-5 text-[16px]'>Allready Have an account <Link to={'/loginPage'}><span className='text-secondary'>Login?</span></Link></p>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default RegisterPage;