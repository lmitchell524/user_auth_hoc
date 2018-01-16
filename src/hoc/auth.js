import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent){
    class Auth extends Component{

        componentWillMount(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        componentWillReceiveProps(nextProps){    {/*catches new prop and does conditional to verify user is signed in - this fixed bug of being signed in, then signing out and still having access to protected info*/}
            if(!nextProps.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return{
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}
