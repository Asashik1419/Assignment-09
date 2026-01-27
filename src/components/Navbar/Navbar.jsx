import React, { use } from 'react';
import logo from './../../assets/react.svg'
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=use(AuthContext)
  const handleLogOut = ()=>{
    console.log('user trying to LogOut');
    logOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  const links = <>
  
    <div>
      <Link to={'/'}><li>Home</li></Link>
    </div>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <div>{user && user.email}</div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
        {
          links
        }
        
        
      </ul>
    </div>
    <Link to={'/'}><li className="btn btn-ghost text-sm md:text-xl">ToyTopia</li></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  
  <div className="navbar-end">
    <div>
  <a className="btn btn-ghost mr-3 flex items-center gap-2">
    <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
    <span>My Profile</span>
  </a>
</div>
{
  user ? <button onClick={handleLogOut} className='btn btn-primary btn-ghost'>Log Out</button> : <Link to={'/loginPage'}><li className='btn btn-primary btn-ghost'>Login</li></Link>
}
    
  </div>
  
</div>
    );
};

export default Navbar;