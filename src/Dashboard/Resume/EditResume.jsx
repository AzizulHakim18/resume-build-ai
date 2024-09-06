import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../DynamicResume/FormSection';
import PreviewSeciton from '../DynamicResume/PreviewSeciton';
import GlobalApi from '../../../service/GlobalApi';
import { ResumeInfoContext } from '@/ContextInfo/ResumeInfoContext';
import dummy from '@/data/dummy';

const EditResume = () => {
    const { resumeId } = useParams();
    const [resumeInfo, setResumeInfo] = useState();
    useEffect(() => {

        // setResumeInfo(dummy)
        GetResumeInfo()
    }, [])


    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            console.log(resp.data.data.attributes);
            setResumeInfo(resp.data.data.attributes);
        })
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                <FormSection></FormSection>

                <PreviewSeciton></PreviewSeciton>
            </div>
        </ResumeInfoContext.Provider>
    );
};

export default EditResume;