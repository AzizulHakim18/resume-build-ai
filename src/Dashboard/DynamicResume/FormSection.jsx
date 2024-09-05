import React, { useState } from 'react';
import PersonalDetails from './FormItem/PersonalDetails';
import Summery from './FormItem/Summery';
import Experience from './FormItem/Experience';
import Education from './FormItem/Education';
import Skills from './FormItem/Skills';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

const FormSection = () => {

    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(true);
    const { resumeId } = useParams();
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>

                    <Button variant='outline'><LayoutGrid></LayoutGrid>Theme</Button>


                </div>
                <div className='flex gap-2'>
                    {activeFormIndex > 1
                        && <Button size="sm"
                            onClick={() => setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft /> </Button>}
                    <Button

                        className="flex gap-2" size="sm"
                        disabled={!enableNext}
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    > Next
                        <ArrowRight /> </Button>
                </div>
            </div>

            {activeFormIndex == 1 ? <PersonalDetails enabledNext={(v) => setEnableNext(v)}></PersonalDetails> : null}



            <Summery></Summery>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>

        </div>
    );
};

export default FormSection;