import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Logout = ({history}) => {
    const handleClick=() =>{
        history.push('/')
        // isLogged(false)
    }
    return(
        <nav>
            <div className='div-logout'>
                <div className='div-svg' onClick={() => history.pushState('/')}>
                    {/* <Logo/> */}
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/' activeClassName='active'>
                        {/* <Home className='div-svg'/> */}
                        </NavLink>
                    <NavLink exact to='/explore' activeClassName='active'>
                        {/* <Explore className='div-svg'/> */}
                        </NavLink>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Logout);