import React from "react"

function Bubble(props) {
    return (
        <b onClick={props.pop}
            className = {`bubble bubble-${props.id}`}
            style={{
                backgroundColor: props.backgroundColor, 
                width: props.width, 
                height: props.height,
                top: props.top,
                left: props.left
            }}>
        </b>
    )
}

export default Bubble