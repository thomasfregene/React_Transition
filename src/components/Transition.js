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

            //enter={false}
            //exit={false}

            onEnter={()=>{
                console.log('Enter')
            }}

            onExit={()=>{
                console.log('Exit')
            }}
           
            >
               {state => 
                <div className={`square square-${state}`}>
                    {`square square-${state}`}
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