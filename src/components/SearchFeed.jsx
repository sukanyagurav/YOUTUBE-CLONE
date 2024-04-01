import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Videos} from './';

import { fetchFromAPI } from '../utilis/fetchFromAPI';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  const {SearchTerm} = useParams()
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${SearchTerm}`).then(data=>setVideos(data.items))
  },[SearchTerm])
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
      Search Reslts for <span style={{color:'#f31503'}}>
        {SearchTerm} videos
      </span>
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed
