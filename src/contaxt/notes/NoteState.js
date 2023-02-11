import React, { useState } from 'react'
import noteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "Harshil",
        "class": "sy-2"
    }

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Nilpesh",
                "class": "sy-4"
            })
        }, 2000);
    }

    return (
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;