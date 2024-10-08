import React, { useEffect, useState } from 'react'
import arrow from '../assests/icons/arrow.svg'
import mail from '../assests/icons/mail.svg'
import send from '../assests/icons/send.svg'
import technology from '../assests/icons/jobDetails/Technology.svg'
import location from '../assests/icons/jobDetails/location.svg'
import reference from '../assests/icons/jobDetails/reference.svg'
import date from '../assests/icons/jobDetails/date.svg'
import term from '../assests/icons/jobDetails/term.svg'
import job from '../assests/icons/jobDetails/job.svg'
import instance from "../axiosApis/getUrl";
import { Tooltip } from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom';



const JobDetails = () => {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate()
    const [data, setData] = useState({})

    const getData = () => {

        instance
          .get(`ATS/Requisition/GetRequisitionDetailInfo?uKey=''&RequisitionId=${id}&forViewOnly=true`)
          .then((response) => {
            // Handle the response
            console.log("REquest Post", response);
            if (response.status === 200) {
              console.log(response.data.Table0[0])
              setData(response.data.Table0[0])
            }
          })
          .catch((error) => {
            // Handle the error
            if (error.response.status==401){
              localStorage.setItem("login", false);
              localStorage.setItem("token","")
              navigate("/login")
            }
            console.error(error);
        });
    };

    useEffect(()=>{
        getData()
    },[])
    

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };
    return (
        <div className='flex flex-col page-width'>
            <div className='flex flex-col md:flex-row py-7 justify-between gap-3'>
                <div className='text-[#4846F1] font-medium text-sm flex gap-2 items-center cursor-pointer'>
                    <img alt='description' src={arrow} className='h-5' />
                    <Link onClick={handleGoBack}>
                    Back to results
                    </Link>
                    
                </div>
                <div className='py-2 px-4 text-[#4846F1] border-[#4846F1] border-2 rounded cursor-pointer text-base'>Redefine Search</div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='border rounded py-2 md:py-4 px-4 md:px-8 flex flex-col md:flex-row gap-2 md:gap-8'>
                    <div className='flex flex-row border-2 mr-auto md:mr-0 md:mb-auto rounded-md'>
                        <img alt='description'
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEX///+pF/6qIPqmAP/p0/iiAP7///327vqoEf6iAPunB/6+bPfo0fj69futNvjRnvepJfjlyvi4XPe2VvfevPe0UPfgwvXNlffQmve8Z/erLvjUpffAc/fWqvf8+fzCePfs2fjYr/fEffeyRfjy5vnLjvevPffHh/fct/fGgvfw4PmCJcwmAAABOElEQVRIie2W2ZKCMBBFSWICBJBFRVFEcJvR//9AA05NKUlIJ48z3vdTp6Cb23jeJ38uJXPjGA/WvhOIAxIWub1WgAhxije22gFESGgrO+0PiHptliYu4KCNYhdw0G53MO0IHLT1DAKiEShC6HzfGMk6JDIqtIfWRPppRrmECu21M2lZXmm0x7tRu8Fq7enbhLKy0Ghvxvn4a0wUWgpYClYuKJFAyFg973xBo6cFgkK7XL2hYFDEr7kLyPIocDAm400CgSyOpGkCwGS3VeyPaY5spvtQ2ims2c/l0ZsboT1oZFU8UX1Nd1XLsnSqbO9HnWy6Z1mglJmbXWq5XlYATtgY5BTBrtc7SOgCei9fQE6DyxlGvYKErpY25+oJihfyBZf9gn0J2p9kTMObsXZVxlPn+Nvxyf/LA13jD/Wy0EsqAAAAAElFTkSuQmCC'
                            className='h-10 w-10 md:h-14 md:w-14 '
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-base font-medium'>{data.Formatted_Position_Name}</p>
                        <p className='text-sm'>{data.Ext_Account_ID}</p>
                        <div className='flex flex-row gap-4 md:mt-2 md:mb-3'>
                            <Tooltip label="Email to friend" aria-label="A tooltip">
                                <img alt='description' src={mail} className='w-6 h-6 cursor-pointer' />
                            </Tooltip>
                            <Tooltip label="Send to friend" aria-label="A tooltip">
                                <img alt='description' src={send} className='w-6 h-6 cursor-pointer' />
                            </Tooltip>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                            <div className='py-2 px-10 text-white bg-[#4160D8] rounded cursor-pointer text-base text-center'>Apply</div>
                            <div className='py-2 px-10  bg-[#FBCA4B] rounded cursor-pointer text-base text-center'>Save Job</div>
                        </div>

                    </div>
                </div>
                <div className='border rounded py-4 md:py-8 px-6 md:px-12 flex flex-wrap gap-y-5 md:gap-y-10 justify-between'>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={technology} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Industry</p>
                        <p className='text-sm md:text-base font-medium'>{data.Industry_Id}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={job} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Job Type</p>
                        <p className='text-sm md:text-base font-medium'>{data.Job_Type_Id}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={term} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Job Term</p>
                        <p className='text-sm md:text-base font-medium'>{data.Job_Term_ID}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={date} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Posted Date</p>
                        <p className='text-sm md:text-base font-medium'>{data.Requisition_Received_Date}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={reference} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Reference#</p>
                        <p className='text-sm md:text-base font-medium'>{data.Reference_ID}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <img alt='description' src={location} className='h-6 w-6 md:h-8 md:w-8 mb-1' />
                        <p className='text-sm text-[#A3A3A3]'>Location</p>
                        <p className='text-sm md:text-base font-medium'>{data.City}, {data.Country}</p>
                    </div>
                </div>
                <div className='border rounded py-2 md:py-4 px-4 md:px-8 flex flex-col gap-2 md:gap-4'>
                    <p className='font-medium text-base'>Job description</p>
                    <p className='text-sm' dangerouslySetInnerHTML={ {__html: data.Formatted_Position_Description} }>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobDetails