import React, { Component } from 'react';
import {Transition} from 'react-transition-group';

import '../css/App.css';

class TransitionComp extends Component{

    state ={
        show: true
    }

    showDiv =()=>{
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render(){
        return(
            <>
            <Transition
            in={this.state.show}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            >
               {state => 
                <div style={{
                    background: 'red',
                    height: '100px',
                    transition: 'all 1s ease',
                    opacity: state === 'exited' || state === 'existing' ? 0 : 1
                }}>
                    {state}
                </div> 
                }
            </Transition>
            <div className="showDiv" onClick={this.showDiv}>
                Show / Hide
            </div>
            </>

        )
    }
}


export default TransitionComp;