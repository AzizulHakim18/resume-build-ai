import React, { useState } from 'react';
import PersonalDetails from './FormItem/PersonalDetails';
import Summery from './FormItem/Summery';
import Experience from './FormItem/Experience';
import Education from './FormItem/Education';
import Skills from './FormItem/Skills';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react';

const FormSection = () => {

    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(true);
    const { resumeId } = useParams();
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <Link to={"/dashboard"}>
                        <Button><Home></Home></Button>
                    </Link>
                    <Button variant='outline'><LayoutGrid></LayoutGrid>Theme</Button>


                </div>
                <div className='flex gap-2'>
                    {activeFormIndex > 1
                        && <Button size="sm"
                            onClick={() => setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft /> </Button>}
                    <Button
                        disabled={!enableNext}
                        className="flex gap-2" size="sm"
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    > Next
                        <ArrowRight /> </Button>
                </div>
            </div>

            {activeFormIndex == 1 ? <PersonalDetails enabledNext={(v) => setEnableNext(v)}></PersonalDetails>
                : activeFormIndex == 2 ? <Summery enabledNext={(v) => setEnableNext(v)}></Summery>
                    : activeFormIndex == 3 ? <Experience enabledNext={(v) => setEnableNext(v)}></Experience>
                        : activeFormIndex == 4 ? <Education enabledNext={(v) => setEnableNext(v)}></Education>
                            : activeFormIndex == 5 ? <Skills enabledNext={(v) => setEnableNext(v)}></Skills>
                                : activeFormIndex == 6 ?
                                    <Navigate to={'/myresume/' + resumeId + "/view"} />

                                    : null}

        </div>
    );
};

export default FormSection;