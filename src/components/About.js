import { Outlet, Link } from 'react-router-dom';
import * as React from 'react';
import { Breadcrumbs } from '@mui/material';

const About = () => {
    
    //     return (
    //         <div
    //             role="tabpanel"
    //             hidden={value !== index}
    //             id={`simple-tabpanel-${index}`}
    //             aria-labelledby={`simple-tab-${index}`}
    //             {...other}
    //         >
    //             {value === index && (
    //                 <Box sx={{ p: 3 }}>
    //                     <Typography>{children}</Typography>
    //                 </Box>
    //             )}
    //         </div>
    //     );
    // }
    // CustomTabPanel.propTypes = {
    //     children: PropTypes.node,
    //     index: PropTypes.number.isRequired,
    //     value: PropTypes.number.isRequired,
    // };
    // function a11yProps(index) {
    //     return {
    //         id: `simple-tab-${index}`,
    //         'aria-controls': `simple-tabpanel-${index}`,
    //     };
    // }

    return (
        <div className="Page">
            <h1>You are in the About page!</h1>
            <h3>Prabha Raikwar</h3>
            <div className="courses-nav">
                {/* <Link to="/courses/search">Search</Link>
                <Link to="/about/list">List</Link> */}
                               
                   
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to="/about/list">
                        List
                    </Link>
                    
                    <Link
                        underline="hover"
                        color="inherit"
                        // href="/material-ui/getting-started/installation/"
                        to='/about/search'
                    >
                        Search
                    </Link>
                    
                </Breadcrumbs>
                <p>Select List or Search .....</p>
            </div>
            <Outlet />
        </div>
    )
}

export default About