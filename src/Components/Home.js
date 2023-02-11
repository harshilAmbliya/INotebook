import React from 'react'

function Home() {
  return (
    <div>
      <h1>Add a Note</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Name :</label>
        <input class="form-control" id="exampleFormControlInput1" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Enter Your Data :</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button class="button-85" >Submit</button>

       



      </div>
    </div>





  )
}

export default Home
