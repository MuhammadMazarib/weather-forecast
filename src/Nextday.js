import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./css/style.css"
function Nextday(){

    
      
        
        
       
            const [city,setCity]=useState(null);
            const [iconW,setIconW]=useState(null);
            const [search,setSearch]=useState("Lahore");
            const navigate=useNavigate();
            useEffect(()=>{
                const fetchApi=async()=>{
                    const url=`
                                https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=dc88ae0c527f1b0e7b64ef3130030468
                    `
                    const response=await fetch(url);
                    const resJson=await response.json( );
                    setCity(resJson.list[10].main);
                    setIconW(resJson.list[10].weather[0].icon)
                }
                fetchApi();
            },[search])
            return(
                
                <>
                <div className="box">
                   <div className="inputData">
        
                   <input
                    type="search"
                    className="inputfield"
                    value={search}
                    onChange={(event)=>{
                        setSearch(event.target.value)
        
                    }}
                    />
                   </div>
                   {
                    !city?(<p>No data found</p>):(
        
        
                        <div>
                                    <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    
                    <img src={"http://openweathermap.org/img/wn/"+iconW+"@2x.png"} alt="Error"/>
                    <h1 className="tmp">{city.temp}</h1>
        
                    <h3 className="tmp-min">Min:{city.temp_min} Cel | Max:{city.temp_max} Cel</h3>
                </div>
                
                <button onClick={()=>navigate(-1)}>Back</button>
                            </div>
                    )
        
                   }
                    
        
                
        
                </div>
                </>
            )
        }
export default Nextday;