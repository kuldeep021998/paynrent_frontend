import { useState, useEffect } from "react";
import { ServerURL, getData, postData } from "../../Services/FetchBackendData";
import { Button } from "@material-ui/core";
export default function VehicleComponent(props) {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#ecf0f1', width: 280, height: 360, padding: 10, borderRadius: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 600, fontSize: 20, marginTop: 10 }}>
                Hyundai Grand i10
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img src="/assets/grand_i10.png" style={{ padding: 20, paddingTop: 7 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                <div style={{ fontFamily: 'cursive', fontSize: 12, fontWeight: 400 }}><span style={{ padding: 5 }}><img src="/assets/iconTransmission.svg" width='12' height='11' /></span>Automatic</div>
                <div style={{ fontFamily: 'cursive', fontSize: 12, fontWeight: 400 }}><span style={{ padding: 5 }}><img src="/assets/iconDiesel.svg" width='12' height='11' /></span>FuelType</div>
                <div style={{ fontFamily: 'cursive', fontSize: 12, fontWeight: 400 }}><span style={{ padding: 5 }}><img src="/assets/iconSeat.svg" width='14' height='13' /></span>Capacity</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: 10, padding: 10, height: 30, alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <span style={{ fontSize: 28, fontWeight: "bolder", marginRight: 5 }}>&#8377;</span>
                    <span style={{ fontSize: 28, fontWeight: "bolder" }}>25,674</span>
                </div>
                <div>
                    <Button
                        //onClick={handleClick}
                        variant="contained"
                        style={{
                            background: "linear-gradient(270deg,#1caba2,20%,#1c7fab)",

                        }}
                    >
                        <span style={{ fontWeight: 600 }}>Book &gt;</span>
                    </Button>
                </div>
            </div>
            <div style={{ marginLeft: 10, marginTop: 8, fontFamily: 'cursive', fontSize: 12 }}>
                Prices exclude fuel cost
            </div>
        </div>
    )
}