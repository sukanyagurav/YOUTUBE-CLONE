import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Sidebar,Videos} from './';

import { fetchFromAPI } from '../utilis/fetchFromAPI';
const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data=>setVideos(data.items))
  
  },[selectedCategory])
  return (
   <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#f31503'}}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
   </Stack>
  )
}

export default Feed
