"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { CiHeart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import CardActions from '@mui/material/CardActions';
import { RiAccountCircleLine } from "react-icons/ri";

function Media() {

  return (
    <div>
      <CardHeader
        avatar={
          <RiAccountCircleLine  className='text-2xl cursor-pointer hover:scale-105 w-10 h-10 inline border-2
          border-pink-600 rounded-full '  />
            // <Skeleton animation="wave" variant="circular" width={40} height={40} />
        }
        title={
            <Skeleton
              animation="wave"
              height={20}
              width="50%"
              style={{ marginBottom: 6 }}
            />
        }
      />
        <Skeleton sx={{ height: 290 }} animation="wave" variant="rectangular" />
      <CardContent>
      
          <React.Fragment>
          <CardActions sx={{gap:20}}>
        <div className='flex gap-2 justify-center items-center text-black font-semibold'>
       <CiHeart className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-black' />
       <span>5</span>
       <BiLike  className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-balck' />
       <span>5</span>
       </div>
       <FiSend className='text-2xl cursor-pointer hover:scale-105 w-10 h-10  ' />
       
      </CardActions>
           <Skeleton animation="wave" height={10} width="100%" />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
      </CardContent>
      </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div>
      <Media />
      <Media />
    </div>
  );
}
