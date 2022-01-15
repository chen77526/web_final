import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { PostSec, PostBloc, PostMenu, PostLink } from '../Components/posts_ele';

const QueryPosts = () => {
    const [value, setValue] = useState('1');

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <PostSec>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    background: '#2D4263',
                    width: '80%',
                    minHeight: '500px',
                    maxHeight: '1000px',
                    borderRadius: '10px',
                    borderColor: 'divider',
                    typography: 'body1',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <TabContext value={value}>
                        <Box sx={{
                            borderBottom: 1,
                            borderColor: 'divider'
                        }}>
                            <TabList onChange={changeHandler} aria-label="lab API tabs example" textColor='#fff' sx={{justifyContent: 'space-between'}}>
                                <Tab label="All" value='1' />
                                <Tab label="Limited" value='2' />
                                <Tab label="Ongoing" value='3' />
                                <Tab label="Closed" value='4' />
                                {/* <Tab label={<AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />} value='5'/> */}
                                {/* <IconButton color='primary' aria-label='Add'>
                                    <Link to='/createPost' style={{height: 'inherit', padding: '0', margin: '0'}}>
                                        <AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />
                                    </Link>
                                </IconButton> */}
                                <Fab color="primary" aria-label="add">
                                    <Link component="button" to='/:uid/createPost' style={{height: '65%'}}>
                                        <AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />
                                    </Link>
                                </Fab>
                            </TabList>
                        </Box>
                        <TabPanel value="1" alignItems='center' sx={{overflow: 'auto'}}>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                                <PostBloc>
                                    <PostLink to='/post/:pID'><h1>All</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="2" align='center'>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post/:pID' limited={true}><h1>limited</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="3" align='center'>Ongoing</TabPanel>
                        <TabPanel value="4" align='center'>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post/:pID' closed={true}><h1>Closed</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        {/* <Pagination count={10} color="primary" sx={{alignSelf: 'center', bottom: '5px', position: 'relative'}} /> */}
                    </TabContext>
                    
                </Box>
            </PostSec>
        </>
    )
}

export default QueryPosts
