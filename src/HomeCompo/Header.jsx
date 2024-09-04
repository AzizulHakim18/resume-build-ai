import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <img src="./logo.svg" width={50} height={50} alt="" />

            {
                isSignedIn ?
                    <div className='flex justify-center items-center gap-8'>
                        <Link to={'/dashboard'}>
                            <Button>Dashboard</Button></Link>
                        <div className='w-10'>
                            <UserButton></UserButton>
                        </div>
                    </div> :
                    <Link to={'/auth/signin'}>
                        <Button>Get Started</Button>
                    </Link>
            }


        </div>
    );
};

export default Header;