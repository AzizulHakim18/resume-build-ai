import { MoreVertical, Notebook } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import GlobalApi from '../../../service/GlobalApi';
import toast from 'react-hot-toast';



const ResumeItem = ({ resume, refreshData }) => {
    const navigation = useNavigate();
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);



    const title = resume.attributes.title
    const id = resume.id
    console.log(title, id);

    const onDelete = () => {
        setLoading(true);
        GlobalApi.DeleteResumeById(resume.documentId).then(resp => {
            console.log(resp);
            toast.success('Resume Deleted!');
            refreshData()
            setLoading(false);
            setOpenAlert(false);
        }, (error) => {
            setLoading(false);
        })
    }
    return (
        <div>
            <Link to={'/dashboard/resume/' + id + "/edit"}>
                <div className='p-14 bg-secondary flex items-center justify-center 
            h-[280px] border border-primary rounded-lg hover:scale-105 transition-all
            hover:shadow-md shadow-primary bg-gradient-to-b
          from-pink-100 via-purple-200 to-blue-200'  style={{
                        borderColor: resume?.themeColor
                    }}>
                    <Notebook></Notebook>
                </div>
                {/* <h2 className='text-center my-1 font-bold text-xl'>{title}</h2> */}
            </Link>

            <div className='border p-3 flex justify-between font-bold
             rounded-b-lg shadow-lg'
                style={{
                    background: resume?.themeColor
                }}>
                <h2 className='text-sm'>{title}</h2>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical className='h-4 w-4 cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>

                        <DropdownMenuItem onClick={() => navigation('/dashboard/resume/' + id + "/edit")}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigation('/myresume/' + id + "/view")}>View</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigation('/myresume/' + id + "/view")}>Download</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

                <AlertDialog open={openAlert}>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={onDelete}
                                disabled={loading}>
                                {loading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    );
};

export default ResumeItem;