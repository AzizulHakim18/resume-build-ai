import { Notebook } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ResumeItem = ({ resume }) => {

    const title = resume.attributes.title
    const id = resume.id
    console.log(title, id);
    return (
        <Link to={'/dashboard/resume/' + id + "/edit"}>
            <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary'>
                <Notebook></Notebook>
            </div>
            <h2 className='text-center my-1 font-bold text-xl'>{title}</h2>
        </Link>
    );
};

export default ResumeItem;