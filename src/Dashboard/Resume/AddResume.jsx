import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from '../../../service/GlobalApi';

const AddResume = () => {

    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState()
    const { user } = useUser()
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()




    const onCreate = async () => {
        setLoading(true)
        const uuid = uuidv4()
        console.log(uuid, resumeTitle, 'from the add resume');


        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName

            }
        }
        GlobalApi.CreateNewResume(data).then(resp => {
            console.log(resp);
            if (resp) {
                setLoading(false)
            }
        }, (error) => {
            setLoading(false)
        })
    }

    return (
        <div>
            <div className='p-14 py24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-110 transition-all hover:shadow-md cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare></PlusSquare>
            </div>

            <Dialog open={openDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>Add a title for your new resume
                            <Input className="my-2"
                                onChange={(e) => { setResumeTitle(e.target.value) }}
                                placeholder="Ex.Full Stack resume"

                            ></Input>
                        </DialogDescription>
                        <div className='flex justify-end gap-4'>
                            <Button variant="ghost"
                                onClick={() => setOpenDialog(false)}
                            >Cancel</Button>
                            <Button
                                disabled={!resumeTitle || loading}
                                onClick={() => { onCreate() }}
                            >
                                {
                                    loading ?
                                        <Loader2 className='animate-spin'></Loader2> :
                                        'Create'
                                }
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default AddResume;