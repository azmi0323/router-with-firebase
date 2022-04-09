import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='mt-4'>
                <input className='px-3 py-2 m-2' type="email" name="" id="" placeholder='Enter Your Email'/>
                <br />
                <input className='px-3 py-2 m-2' type="password" placeholder='Your password' name="" id="" />
                <br />
                <input className='btn btn-primary' type="button" value="Login" />
            </form>
        </div>
    );
};

export default Login;