import React from 'react';

const Register = () => {
    return (
        <div>
            <form className='mt-4'>
                <input className='px-3 py-2 m-2' type="text" placeholder='Please Enter Your Name'/>
                <br />
                <input className='px-3 py-2 m-2' type="email" name="" id="" placeholder='Enter Your Email'/>
                <br />
                <input className='px-3 py-2 m-2' type="password" placeholder='Your password' name="" id="" />
                <br />
                <input className='btn btn-primary' type="button" value="Register" />
            </form>
        </div>
    );
};

export default Register;