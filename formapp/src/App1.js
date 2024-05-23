import './App.css';
import {useState} from 'react';

function App() {

  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]= useState("");

  // function changeFirstNameHandler(event){
  //   // console.log("printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }
   
 const [formData,setFormData]= useState({firstName:"",lastName:"",
 email:"",comments:"",isvisible:true,mode:"",favCar:""});

 console.log(formData);    
  
 function changeHandler(event){
  const {name,value,checked,type} =  event.target
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
      [name]:type=="checkbox" ? checked : value 
      // [event.target.name] : event.target.value
    }
  });
 }

 function submitHandler(event){
  event.preventDefault();
  //print
  console.log("Finally printing the entireform data ")
 }
  
  return (
    <div className="App">
    <form onSubmit={submitHandler}>

      <input type="text"
      placeholder="first name"
       onChange={changeHandler}
       name="firstName"
       value={formData.firstName}
       />

        <br/>
        <br/>

       <input type="text" 
       placeholder="last name"
       onChange={changeHandler}
       name="lastName"
       value={formData.lastName}
       />
       
       <br/>
       <br/>
         
     <input type="email" 
       placeholder="Enter your email"
       onChange={changeHandler}
       name="email"
       value={formData.email}
       />
        
        <br/>
        <br/>
       <textarea
       placeholder='enter your comments here'
       onChange={changeHandler}
       name="comments"
       value={formData.comments}
       />

       <br/>
       <br/>
       
       <input
      type="checkbox"
      onChange={changeHandler}
      name="isvisible"
      checked={formData.isvisible}  
      /> 
      <label htmlFor='isvisible'>Am I visible ?</label>

      <br/>
      <br/>

      

    <fieldset>

      <legend>Mode</legend>
      <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      value="Online-Mode"
      id="Online-Mode"
      checked={formData.mode=="Online-Mode"}
      />
      <label htmlFor='Online-Mode'>Online Mode</label>

      <input
      type="radio"
      onChange={changeHandler}
      name="mode"
      value="Offline-Mode"
      id="Offline-Mode"
      checked={formData.mode=="Offline-Mode"}
      />
      <label htmlFor='Offline-Mode'>Offline Mode</label> 
  
    </fieldset>

    <label htmlFor='favCar'>Tell me about your favourite car  </label>
    
    <select
     name="favCar"
     id="favCar"
     value={formData.favCar}
     onChange={changeHandler}
     >
      <option value="Thar">Thar</option>
      <option value="Defender">Defender</option>
      <option value="Discovery">Discovery</option>
      <option value="Jaguar">Jaguar</option>
      <option value="Fortuner">Fortuner</option>
    </select>

    {/* <input type="submit" value="submit" /> */}
    <br/>

    <button >Submit</button>

   </form>
  </div>
  );
}

export default App;