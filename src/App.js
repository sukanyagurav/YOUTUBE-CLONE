import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Box from '@mui/material/Box';
import {Navbar, VideoDetails,ChannelDetails,Feed,SearchFeed} from './components'


const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
           <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetails/>} />
                <Route path="/channel/:id" element={<ChannelDetails/>} />
                <Route path="/search/:SearchTerm" element={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App
