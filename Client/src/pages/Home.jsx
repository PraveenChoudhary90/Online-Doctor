import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../config";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = ()=>{
    const [mydata, setmydata] = useState([]);


   const Loaddata = async()=>{
     const api = `${BASE_URL}/Doctor/DoctorDisplay`;
     try {
        const response = await axios.get(api)
        console.log(response.data);
        setmydata(response.data);
        
     } catch (error) {
        console.log(error)
     }
   }

   useEffect(()=>{
    Loaddata();
   },[])


   const ans = mydata.map((key)=>{
    return(
        <>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         {key.specility}
         <br/>
         Address:{key.address} <br/> City:{key.city} <br/> Number:{key.number}<br/>
         Email:{key.email}


        </Card.Text>
        <Button variant="primary">Appoinment Now!!</Button>
      </Card.Body>
    </Card>
        </>
    )
   })
    return(
        <>
        <h1>Welcome to Home Page</h1>

        <div id="homeDoctors">
        {ans}
        </div>
         

        </>
    )
}

export default Home;