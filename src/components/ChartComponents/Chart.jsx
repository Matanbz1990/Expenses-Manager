import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";


const Chart=(props)=>{


    const DataPointsValues= props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...DataPointsValues);




   
    
    return(

        <div className="chart">


    {props.dataPoints.map((DataPoint)=>(
    <ChartBar 
    key={DataPoint.label}
     value={DataPoint.value} 
     maxValue={totalMaximum} 
     label={DataPoint.label}/>
    ))}
        </div>      
        ) 
}
export default Chart;
