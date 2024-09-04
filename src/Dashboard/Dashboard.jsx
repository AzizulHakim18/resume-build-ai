import React, { useEffect, useState } from 'react';
import AddResume from './Resume/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../service/GlobalApi';
import ResumeItem from './Resume/ResumeItem';

const Dashboard = () => {
    const { user } = useUser();
    const [resumeList, setResumeList] = useState()
    useEffect(() => {
        user && GetUserResumesList()
    }, [user])
    const GetUserResumesList = () => {
        GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(resp => {
            console.log(resp.data.data);
            setResumeList(resp.data.data)
        })
    }
    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='font-bold text-3xl'>My Resume</h2>
            <p>Start Creating AI resume to you next job role</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-4'>
                <AddResume></AddResume>
                {resumeList?.length > 0 &&
                    resumeList.map((resume, index) => (
                        <ResumeItem
                            key={index}
                            resume={resume}
                        ></ResumeItem>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;