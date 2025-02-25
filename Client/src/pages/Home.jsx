import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../config";
const Home = ()=>{
    const [mydata, setmydata] = useState([]);

    
    const loaddata = async()=>{
    const api = `${BASE_URL}/Doctor/DoctorDisplay`;
    try {
        const response = await axios.get(api);
        console.log(response.data);

    } catch (error) {
        console.log(error)
    }

    useEffect(()=>{
        loaddata();
    },[])

    }
    return(
        <>
        <h1>Welcome to Home Page</h1>
        
        </>
    )
}

export default Home;