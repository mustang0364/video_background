import React, { Component } from 'react';
import MyVideo from './Media/swimming.mp4'

export default class Video extends Component {
    render() {

        let style={
           container: {
            overFlow: 'hidden',
            height: '100vh',
            width: '100px',
            position: 'relative'
           },
           video: {
            minWidth:'100%',
            minHeight:'100%',
            position: 'fixed',
            top:4,
            
            right:0,
            bottom:0,
            left: 0,
            zIndex: -2
           },
           test: {
               position: 'absolute',
               top: '50%',
               left: '50%',
               zIndex: '5',
               color: 'red'
           }
        }
        return (
            <div style={style.container}>
                <video style={style.video}  autoPlay loop> 
                
                    <source src={MyVideo}/>
                </video>

           <header>Hello</header>
            </div>
        );
    }
}