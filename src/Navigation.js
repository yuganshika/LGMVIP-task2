import React from 'react';
import Button from '@material-ui/core/Button';
import './navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className='navbar'>
                    <h3 className="logo">Product Users</h3>
                    <div className='nav-links'>
                        <Button variant="contained" onClick={onButtonSubmit} color="#FF006C">
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
