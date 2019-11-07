import React from 'react';
import './App.css';

let Imgages = (props)=>{

    // console.log(props.imgCLass);
let arr = [];

    for(let i=0;i<props.imgCLass.length;i++){
        for(var key in props.imgCLass[i]){
            if(key === 'urls'){
       arr.push(
           <img className="img" alt="" src={`${props.imgCLass[i][key].raw} `} />
       )
            }
        }
    }
return(
<div className="images-div">
    {arr}
    </div>
);
}
export default  Imgages;