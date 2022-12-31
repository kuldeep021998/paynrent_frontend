import Header from "./MyComponents/Header";
import { useState, useEffect } from "react";
import { ServerURL, getData } from "../Services/FetchBackendData";
import SearchComponent from "./MyComponents/SearchComponent";
import FeaturedComponent from "./MyComponents/FeaturedComponent";
import Offer from "./MyComponents/Offer";

export default function Home(props) {
    const [features, setFeatures] = useState([]);
    

    const getFeatures = async () => {
        var result = await getData('user/display_feature');
        setFeatures(result.data)
    };

    useEffect(function () {
        getFeatures()
    }, [])
    

    return (

            <div style={{ display: 'flex', flexDirection: 'column', background: '#dfe6e9' }}>
                <Header />
                <div>
                    <SearchComponent />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30, paddingLeft: 40, paddingRight:65}}>
                    <FeaturedComponent images={features} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30, paddingLeft: 40, paddingRight:65}}>
                    <Offer />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30, paddingLeft: 40, paddingRight:65}}>
                    <FeaturedComponent images={features} />
                </div>
            </div>
   
    )
}