import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaGithub } from "react-icons/fa";
import SideBar from './SideBar';
import '../App.css';
import '../Static/Css/Projects.css';


function Projects() {

    return(
        <div className='App'>
            <SideBar />
            <div className='project-list'>
                <h2 className='heading'>Some Latest Projects</h2>
                <Box sx={{ flexGrow: 1}}>
                    <Grid container spacing={20} columns={12}>
                        <Grid item xs={6}>
                        <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                        m: 1,
                                        width: 300,
                                        height: 200,
                                        },
                                    }}
                                >
                                    <Paper className='paper' elevation={3} >
                                        <h3>Project Name: Students Log</h3>
                                        <p>Description: A students log web applcation, where you can add, view and delete students details.</p>
                                        <p>Language Used: Python, Django, React</p>
                                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                            {/* <Grid item xs={6}>
                                                <Button >Demo</Button>
                                            </Grid> */}
                                            <Grid item xs={6}>
                                                <Button href='https://github.com/dev-ar7/StudentsLog-Django-React' ><FaGithub className='icon' /></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                        m: 1,
                                        width: 300,
                                        height: 200,
                                        },
                                    }}
                                >
                                    <Paper className='paper' elevation={3} >
                                        <h3>Project Name: Students Log</h3>
                                        <p>Description: A students log web applcation, where you can add, view and delete students details.</p>
                                        <p>Language Used: Python, Django, React</p>
                                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                            {/* <Grid item xs={6}>
                                                <Button >Demo</Button>
                                            </Grid> */}
                                            <Grid item xs={6}>
                                                <Button href='https://github.com/dev-ar7/StudentsLog-Django-React' ><FaGithub className='icon' /></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                        </Grid>
                        <Grid className="animation" item xs={6}>
                        <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                        m: 1,
                                        width: 300,
                                        height: 200,
                                        },
                                    }}
                                >
                                    <Paper className='paper' elevation={3} >
                                        <h3>Project Name: Students Log</h3>
                                        <p>Description: A students log web applcation, where you can add, view and delete students details.</p>
                                        <p>Language Used: Python, Django, React</p>
                                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                            {/* <Grid item xs={6}>
                                                <Button >Demo</Button>
                                            </Grid> */}
                                            <Grid item xs={6}>
                                                <Button href='https://github.com/dev-ar7/StudentsLog-Django-React' ><FaGithub className='icon' /></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                        m: 1,
                                        width: 300,
                                        height: 200,
                                        },
                                    }}
                                >
                                    <Paper className='paper' elevation={3} >
                                        <h3>Project Name: Students Log</h3>
                                        <p>Description: A students log web applcation, where you can add, view and delete students details.</p>
                                        <p>Language Used: Python, Django, React</p>
                                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                            {/* <Grid item xs={6}>
                                                <Button >Demo</Button>
                                            </Grid> */}
                                            <Grid item xs={6}>
                                                <Button href='https://github.com/dev-ar7/StudentsLog-Django-React' ><FaGithub className='icon' /></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}


export default Projects;