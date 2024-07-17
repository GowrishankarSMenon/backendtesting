import React from 'react'
import arrow from '../assests/icons/arrow.svg'
import mail from '../assests/icons/mail.svg'
import send from '../assests/icons/send.svg'

const jobDetails = () => {
    return (
        <div className='flex flex-col page-width'>
            <div className='flex flex-col md:flex-row py-7 justify-between gap-3'>
                <div className='text-[#4846F1] font-medium text-sm flex gap-2 items-center cursor-pointer'>
                    <img src={arrow} className='h-5' />
                    Back to results
                </div>
                <div className='py-2 px-4 text-[#4846F1] border-[#4846F1] border-2 rounded cursor-pointer text-base'>Redefine Search</div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='border rounded py-2 md:py-4 px-4 md:px-8 flex flex-col md:flex-row gap-2 md:gap-8'>
                    <div className='flex flex-row border-2 mr-auto md:mr-0 md:mb-auto rounded-md'>
                        <img
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEX///+pF/6qIPqmAP/p0/iiAP7///327vqoEf6iAPunB/6+bPfo0fj69futNvjRnvepJfjlyvi4XPe2VvfevPe0UPfgwvXNlffQmve8Z/erLvjUpffAc/fWqvf8+fzCePfs2fjYr/fEffeyRfjy5vnLjvevPffHh/fct/fGgvfw4PmCJcwmAAABOElEQVRIie2W2ZKCMBBFSWICBJBFRVFEcJvR//9AA05NKUlIJ48z3vdTp6Cb23jeJ38uJXPjGA/WvhOIAxIWub1WgAhxije22gFESGgrO+0PiHptliYu4KCNYhdw0G53MO0IHLT1DAKiEShC6HzfGMk6JDIqtIfWRPppRrmECu21M2lZXmm0x7tRu8Fq7enbhLKy0Ghvxvn4a0wUWgpYClYuKJFAyFg973xBo6cFgkK7XL2hYFDEr7kLyPIocDAm400CgSyOpGkCwGS3VeyPaY5spvtQ2ims2c/l0ZsboT1oZFU8UX1Nd1XLsnSqbO9HnWy6Z1mglJmbXWq5XlYATtgY5BTBrtc7SOgCei9fQE6DyxlGvYKErpY25+oJihfyBZf9gn0J2p9kTMObsXZVxlPn+Nvxyf/LA13jD/Wy0EsqAAAAAElFTkSuQmCC'
                            className='h-10 w-10 md:h-14 md:w-14 '
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-base font-medium'>Software Engineer</p>
                        <p className='text-sm'>Accenture</p>
                        <div className='flex flex-row gap-4 md:mt-2 md:mb-3'>
                            <img src={mail} className='w-6 h-6 cursor-pointer' />
                            <img src={send} className='w-6 h-6 cursor-pointer' />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                            <div className='py-2 px-10 text-white bg-[#4160D8] rounded cursor-pointer text-base text-center'>Apply</div>
                            <div className='py-2 px-10  bg-[#FBCA4B] rounded cursor-pointer text-base text-center'>Save Job</div>
                        </div>

                    </div>
                </div>
                <div className='border rounded py-2 md:py-4 px-4 md:px-8 flex flex-col md:flex-row gap-2 md:gap-8'>

                </div>
                <div className='border rounded py-2 md:py-4 px-4 md:px-8 flex flex-col gap-2 md:gap-4'>
                    <p className='font-medium text-base'>Job description</p>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur. Augue rhoncus at ultrices tempus risus. Eu odio suscipit enim ipsum ut non elementum. Phasellus lectus sodales sociis tellus dignissim. Est proin id inconsequat sapien ultrices ac ut purus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default jobDetails