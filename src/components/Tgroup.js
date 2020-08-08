import React, { Component } from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import '../css/App.css';

class Slide extends Component{
    state = {
        items:[]
    }
    
    showElements () {
      return this.state.items.map((item,index)=>(
          <CSSTransition
          classNames="item"
          timeout={200}
          key={index}
          onEntered={(node)=>{
              node.classList.add('active')
          }}
          >
               <div className="item" key={index}>{item}</div>   
          </CSSTransition>
         
      ))
    }

    generateNumber(){
       let newArray = [
           ...this.state.items, 
           Math.floor(Math.random()*100) +1
       ];

       this.setState({
           items: newArray
       })
    }

    removeNumber(){
      let newArray = this.state.items.slice(0,-1);

      this.setState({
        items: newArray
    })
    }

    render(){
        console.log(this.state.items)
        return(
            <div>
                <TransitionGroup
                className="list"
                component="div"
                >
                {this.showElements()}
                </TransitionGroup>
                
             
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;