import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import SaveTable from '../table/tableLayout'
import jobList from '../json/jobListData.json'
import table_head from '../json/tableHeader.json'


function MyResumes() {
  return (
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <div className="gap-5  md:mt-20 mt-10 justify-start md:items-center">
          <h3 className="font-medium">Select Resume to apply for the job</h3>
          <div className="mt-5 gap-6 flex">
            <Button className="w-40 border border-[#4160D8] !rounded-[3px] !text-[#4160D8] !font-light !bg-white">
              Add New Resume
            </Button>
            <Button className="w-40  !text-white !bg-[#4160D8]  !font-light">
              Apply
            </Button>
          </div>
        </div>
        <div className='mt-7'>
          <h3 className='font-medium'>
            If you wish to use an existing resume, please select of from the
            list below and click apply
          </h3>
          <SaveTable   />
        </div>
      </Box>
    </Box>
  );
}

export default MyResumes
