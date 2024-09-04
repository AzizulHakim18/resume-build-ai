
import { ResumeInfoContext } from '@/ContextInfo/ResumeInfoContext';
import React, { useContext } from 'react';
import EducationalPreview from './PreviewItem/EducationalPreview';
import ExperiencePreview from './PreviewItem/ExperiencePreview';
import PersonalDetils from './PreviewItem/PersonalDetils';
import SkillsDetails from './PreviewItem/SkillsDetails';
import SummeryPreview from './PreviewItem/SummeryPreview';

const PreviewSeciton = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
            style={{
                borderColor: resumeInfo?.themeColor
            }}>
            <EducationalPreview resumeInfo={resumeInfo}></EducationalPreview>
            <ExperiencePreview resumeInfo={resumeInfo}></ExperiencePreview>
            <PersonalDetils resumeInfo={resumeInfo}></PersonalDetils>
            <SkillsDetails resumeInfo={resumeInfo}></SkillsDetails>
            <SummeryPreview resumeInfo={resumeInfo}></SummeryPreview>


        </div>
    );
};

export default PreviewSeciton;