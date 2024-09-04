import { SignIn } from '@clerk/clerk-react';
import React from 'react';

const AuthSignIn = () => {
    return (
        <div className='my-20 flex justify-center items-center'>
            <SignIn></SignIn>
        </div>
    );
};

export default AuthSignIn;