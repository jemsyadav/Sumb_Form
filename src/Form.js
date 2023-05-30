import React, { useEffect, useState } from 'react'

function Form() {
  const data={name:"",email:"",password:""};
  const [inputData, setInputData]=useState(data)
  const [flag,setflag]=useState(false)
  useEffect(()=>{
     console.log("Registered")
  },[flag])
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
  }
  console.log(inputData)
  function  handleSumbit (e){
    e.preventDefault();
    if(!inputData.name|| !inputData.email || !inputData.password){
      alert("All fields are Mandatory")
    }
    else{
      setflag(true)
    }

  }
  return (
    <>
    <pre>{(flag)? <h2 className='ui-define'>Hello {inputData.name},You 've Registered Successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSumbit}>
      <div className='header'>
      <h1>Registration Form</h1>

      </div>
      <div>
        <input type='text' placeholder='Enter your Name'name='name' value={inputData.name}onChange={handleData}></input>

      </div>
      <div>
        <input type='text' placeholder='Enter your Email'name='email'value={inputData.email}onChange={handleData}></input>
        
      </div>
      <div>
        <input type='text' placeholder='Enter your Password'name='password'value={inputData.password}onChange={handleData}></input>
        
      </div>
      <div>
        <button type='Submit'> Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form