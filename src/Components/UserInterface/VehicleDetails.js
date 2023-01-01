import { useState, useEffect } from "react";
import VehicleComponent from "./MyComponents/VehicleComponent";

export default function VehicleDetails(props){

    return(
        <div style={{margin: 100}}>
            <VehicleComponent />
        </div>
    )
}