import React from 'react'

const Button = (props) => {
    let styles = {backgroundColor: "pink", color: "black", padding:"10px 20px", borderRadius: "10px", maxWidth: "200px"}
  return (
    <>
    <p style={styles}>
         {props.button}
    </p>
    </>
  )
}

export default Button
