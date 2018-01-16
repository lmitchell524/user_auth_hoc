import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchAuthentication } from '../actions';

const Nav = props => {

    const navStyle = {
        padding: '0 8px'
    }

    function renderButton(){
        if(props.auth){     {/*if props.auth is true, pass in false to log out, else pass in true to log in*/}
            return <button onClick={() => props.switchAuthentication(false)}className='btn pink lighten-2'>Sign Out</button>
        } else {
            return <button onClick={() => props.switchAuthentication(true)}className='btn'>Sign In</button>
        }
    }

    return (
        <nav style={navStyle} className="grey lighten-1">
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo left'>User App</Link>
                <ul className='right'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/secret-list'>Secret List</Link>
                    </li>
                    <li>
                        <Link to='/protected-stuff'>Protected Stuff</Link>
                    </li>
                    <li>
                        {renderButton()}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {switchAuthentication})(Nav);
