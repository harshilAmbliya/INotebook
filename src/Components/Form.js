import React from 'react'

function Form() {
  return (
    <>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name :</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email address :</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your password:</label>
        <input type="password" className="form-control" id="exampleFormControlTextarea1" ></input>
      </div>
    </>
  )
}

export default Form