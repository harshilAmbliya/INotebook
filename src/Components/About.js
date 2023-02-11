import React, { useContext,useEffect } from 'react'
import noteContext from '../contaxt/notes/noteContext'
function About() {
    const ContextData=useContext(noteContext);
    
    useEffect(() => {
        ContextData.update();
          // eslint-disable-next-line
   }, [])
    
    return (
        <div>
            This is about {ContextData.state.name} and he is {ContextData.state.class}
         
        </div>
    )
}

export default About
