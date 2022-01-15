import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { useQuery } from "@apollo/client";
import { useEffect } from 'react';
import { POSTS_QUERY, POST_CREATED_SUBSCRIPTION} from "../graphql"
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { PostSec, PostBloc, PostMenu, PostLink } from '../Components/posts_ele';

const QueryPosts = (token) => {
    const [value, setValue] = useState('1');

    const id = token.token

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    };

    const { loading, data, subscribeToMore } = useQuery(POSTS_QUERY, {
        variables: {
            id: id
        }
    });

    console.log(id)

    // for create post

    useEffect(() => {
        try {
            subscribeToMore({
                document: POST_CREATED_SUBSCRIPTION,
                updateQuery: (prev, {subscriptionData}) => {
                    if (!subscriptionData.data) return prev;
                    console.log(subscriptionData.data)
                    return {
                        posts: [...prev.posts, subscriptionData.data.postCreated],
                    };
                }
            })
        } catch (e) {}
    }, [subscribeToMore]);

    // useEffect(() => {

    // }, [data]);

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
                                    <Link component="button" to={`/createPost/?id=${id}`} style={{height: '65%'}}>
                                        <AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />
                                    </Link>
                                </Fab>
                            </TabList>
                        </Box>
                        <TabPanel value="1" alignItems='center' sx={{overflow: 'auto'}}>
                            <PostMenu> 
                                { loading ? 
                                    <h1>loading posts...</h1>
                                : data ? 
                                    data.posts.filter((post) => moment(post.duedate).isAfter(moment())).map(po => (
                                        <PostBloc key={po.id}>
                                            <PostLink to={`/post/?id=${po.id}`}>
                                                <ul>
                                                    <h1 style={{marginTop:'16px'}}>{po.title}</h1>
                                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                        <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                        {moment(po.duedate).fromNow()}
                                                    </div>
                                                </ul>
                                            </PostLink>
                                        </PostBloc>
                                    )) : <h1>no posts yet</h1>
                                }
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="2" align='center'>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post' limited={true}><h1>limited</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="3" align='center'>
                            <PostMenu>
                                { loading ? 
                                    <h1>loading posts...</h1>
                                : data ? 
                                    data.posts.filter((post) => (moment(post.duedate).diff(moment(), 'days') >= 0 && moment(post.duedate).diff(moment(), 'days') < 1)).map(po => (
                                        <PostBloc key={po.id}>
                                            <PostLink to={`/post/?id=${po.id}`} style={{color: '#fff'}}>
                                                <ul>
                                                    <h1 style={{marginTop:'16px', color: '#fff'}}>{po.title}</h1>
                                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                        <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                        {moment(po.duedate).fromNow()}
                                                    </div>
                                                </ul>
                                            </PostLink>
                                        </PostBloc>
                                    )) : <h1>no posts yet</h1>
                                }
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="4" align='center'>
                            <PostMenu>
                                { loading ? 
                                    <h1>loading posts...</h1>
                                : data ? 
                                    data.posts.filter((post) => moment(post.duedate).isBefore(moment())).map(po => (
                                        <PostBloc key={po.id}>
                                            <PostLink to={`/post/?id=${po.id}`} closed={true}>
                                                <ul>
                                                    <h1 style={{marginTop:'16px'}}>{po.title}</h1>
                                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                        <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                        {moment(po.duedate).fromNow()}
                                                    </div>
                                                </ul>
                                            </PostLink>
                                        </PostBloc>
                                    )) : <h1>no posts yet</h1>
                                }
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
