import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/ContextInfo/ResumeInfoContext';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../service/GlobalApi';
import { LayoutGrid } from 'lucide-react';
import toast from 'react-hot-toast';

const ThemeColor = () => {
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
        "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
        "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
        "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
    ]

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [selectedColor, setSelectedColor] = useState();
    const { resumeId } = useParams();
    const onColorSelect = (color) => {
        setSelectedColor(color)
        setResumeInfo({
            ...resumeInfo,
            themeColor: color
        });
        const data = {
            data: {
                themeColor: color
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId, data).then(resp => {
            console.log(resp);
            toast.success('Theme Color Updated')
        })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm"
                    className="flex gap-2" > <LayoutGrid /> Theme</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className=' p-4 border rounded-lg bg-stone-800 shadow-lg shadow-stone-900'>
                    <h2 className='mb-2 text-sm font-bold text-white text-center'>Select Theme Color</h2>
                    <div className='grid grid-cols-5 gap-3 '>
                        {colors.map((item, index) => (
                            <div
                                onClick={() => onColorSelect(item)}
                                className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor == item && 'border border-black'}
             `}
                                style={{
                                    background: item
                                }}>

                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ThemeColor;