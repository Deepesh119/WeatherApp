import React from 'react';
import "../App.css";
import { VscGithub } from "react-icons/vsc";
import {useState,useEffect} from "react";


const Weatherapp =() => {
    const [city,setCity] = useState("delhi");
    const[search,setSearch]= useState("Delhi");

    useEffect(() => {
       const fetchApi= async()=>{
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fdd58a76038b9a7b528037a53c1f07b6`
           const response = await fetch(url);
           //console.log(response);
           const resJson = await response.json();
           //console.log(resJson)
           setCity(resJson.main);
       } 
       fetchApi();
    },[search])
     return(
        <div className="parent">
            <div>
                <input type="search"  value={search}  onChange={(event)=>{
                 setSearch(event.target.value)
                }} />
                <button> Search </button>
            </div>
       {!city ? (
           <p> No Data Found </p>
       ):(
        <div className="childone">
        <h2 className="childone_child"> <VscGithub id="icon_react"/> {search}</h2>
        <h2>Today:{city.temp} </h2>
        <h3> MinTemp:{city.temp_min} | MaxTemp:{city.temp_max}</h3>
        <h1>Humidity :{city.humidity}</h1>
    </div>
       )
       }     
    
        </div>
    
    )
}


export default Weatherapp ;
