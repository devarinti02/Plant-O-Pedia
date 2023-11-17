import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const DataEntry = () => {

    const [data, setData] = useState({
       
            title:"",
            description:"",
            soil:"",
            methods:"" 
     
    })

    const {title,description,soil,methods}= data;

    const eventHandler = (e) =>{
        const newData = {...data,[e.target.name] : e.target.value}
        setData(newData);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('https://plant-o-pedia-ae6a7-default-rtdb.firebaseio.com/plant-details.json', data);
            alert("Data stored successfully");
            setData({
                title: "",
                description: "",
                soil: "",
                methods: ""
            });
        } catch (error) {
            console.error("Error storing data:", error);
            alert("Error storing data. Please try again.");
        }
    };


  return (
    <div className='dataEntry'>
        <center className='dataposition'>
            <form className='dataform' onSubmit={handleSubmit}>
                <input type='text' placeholder='enter the plant name' name='title' value={title} onChange={eventHandler}/>
                <br></br>
                <input type='text' placeholder='enter the description' name='description' value={description} onChange={eventHandler}/>
                <br></br>
                <input type='text' placeholder='enter the soil' name='soil' value={soil} onChange={eventHandler}/>
                <br></br>
                <input type='text' placeholder='enter the methods' name='methods' value={methods} onChange={eventHandler}/>
                <br></br>
                <input type='submit' name='submit'/>
            </form>
        </center>
    </div>
  )
}

export default DataEntry