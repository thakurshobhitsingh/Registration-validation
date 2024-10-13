import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const states=['---Enter the states---','Uttarpradesh','Bihar','Uttarakhand','Andhrapradesh','j&k'];
  const cities={ 
    'Uttarpradesh':['---Up cities---','kanpur','Meerut'],
   'Bihar':['---Bihar cities---','shivan','Gaya'],
   'Uttarakhand':['---Uk cities---','Dehradun','Haridwar'],
   'Andhrapradesh':['---Andhrapradesh cities---','Tirupati','Vishakhapatnam'],
   'j&k':['---J&Kcities---','Srinagar','Poonch']
  } 
  const[state,setState]=useState('');
  console.log(state);
  

  let[user,setUser]=useState();
  let[num,setNum]=useState();
  let[text,setText]=useState();
  let[usererr,setUsererr]=useState(false);
  let[numerr,setNumerr]=useState(false);
  let[texterr,setTexterr]=useState(false);
  const[error,setError]=useState(null);
  const[error1,setError1]=useState(false);
  const[file,getFile]=useState();
  const setFile=(image)=>{  
    setError(null);
    //check type of image
    if(!image.name.match(/\.(jpg|png)$/)){
      const error="Wrong file type"
      setError(error);
      return;
    }
    //check Image size
    if(image.size>250000 || image.size<250000){
      const error="file must be 250kb";
      setError(error);
      return;
    }
    setError(null);
    
  }
  let handlesubmit=(e)=>{
    if(user.length<3|| num.length<10 || num.length>10 ||text.length>250){
      alert('Please enter valid data');
    }
    else{
      alert('form submitted sucessfully');
    }
    e.preventDefault();
  }
  let handle1=(e)=>{
    let item=e.target.value;
    if(item.length<3){
      setUsererr(true);
    }
    else{
      setUsererr(false);
    }
    setUser(item);

  }
  //Email check
  let handle=(val)=>{
    if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        setError1(false)

    }
    else{
        setError1(true);
    }
    

}
  
    
 
  let handle3=(e)=>{
    let item=e.target.value;
    if(item.length>10||item.length<10){
      setNumerr(true);
    }
    else{
      setNumerr(false);
    }
    setNum(item);

  }
  let handle4=(e)=>{
    let item=e.target.value;
    if(item.length>250){
      setTexterr(true);
    }
    else{
      setTexterr(false);
    }
    setText(item);

  } 
  
  return (
    <div className='main-div'>
        <div className='form'>
          <form onSubmit={handlesubmit}>
            <h1>Form Validation</h1>
            Name:<input type='text' placeholder='Enter the name'value={user} onChange={handle1}/><br></br><span>{usererr?'invalid entry':''}</span><br></br><br></br>
            Email:<input type='email' placeholder='Enter the email' onChange={(e)=>handle(e.target.value)}/><span><br></br>{error1?'Invalid email':''}</span><br></br><br></br>
            Phone:<input type='number' placeholder='Enter the number' value={num} onChange={handle3}/><br></br><span>{numerr?'Invalid number':''}</span><br></br><br></br>
            State:<select style={{width:'250px',height:'35px',borderRadius:'15px',textAlign:'center'}} onChange={(e)=>setState(e.target.value)}>
            {
              states.map((val,i)=>{
                return <option key={i}>{val}</option>
              })
            }<br></br>
            </select><br></br><br></br>
           Cities: { state && <select style={{width:'255px',height:'32px',borderRadius:'15px',textAlign:'center'}}>
              {
                cities[state].map((city,i)=>{
                  return <option key={i}>{city}</option>
                })
              }

            
              
              </select>}<br></br><br></br>

            Yourself:<textarea style={{width:'250px',height:'32px' ,borderRadius:'15px'}} onChange={handle4} value={text}></textarea><br></br><span>{texterr?'above 250 char not allowed':''}</span><br></br><br></br>

            Photo:<input type="file"  onChange={(e)=>setFile(e.target.files[0])}/><br></br><br></br>
            
            {
              error && <p>{error}</p>
            }

            <button value='btn' >Submit</button>


          

          </form>

        </div>
    </div>
  )
}

export default Form
