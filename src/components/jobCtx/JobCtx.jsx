import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss'

const JobCtx = () => {

    const[jobs, setJobs] = useState([]); //array of jobs

    async function getJobs(){
        try{
            let res =  await axios.get('https://www.themuse.com/api/public/jobs?page=0&api_key=d595bf47ca0ca06d7a672a348a780469b38700e778cf80bce8ba87d4c07880fc'); 
            console.log(res);
        }catch(err){
            console.log(`error : ${err}`);
        }
    }

    useEffect(()=>{
        getJobs();
    }, [])

  return (
    <div className='job_contain'>
        <div className="image_container">
            <h1>Companies hiring remotely in 2024</h1>
            <p>Find below the most updated remote companies list looking for remote employees.</p>
        </div>
    </div>
  )
}

export default JobCtx;