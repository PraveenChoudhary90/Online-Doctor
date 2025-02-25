import BASE_URL from "../config";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
const DoctorResigtraction = ()=>{
   const [show, setShow] = useState(false);
   const [input , setInput] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
   }


   const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/Doctor/DoctorRegistred`;
    try {
        const response = await axios.post(api, input)
        console.log(response.data)
        toast.success(response.data.msg);
        setShow(false);
    } catch (error) {
        console.log(error)        
    }
   }


  

    return(
        <>
        <h1>Welcome to DoctorResigtraction Page</h1>
        <Button variant="primary" onClick={handleShow}>
        Doctor Registration here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Email</Form.Label>
        <Form.Control type="text" name="email" onChange={handelInput} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Doctor Number</Form.Label>
        <Form.Control type="text" name="number" onChange={handelInput}  />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter Doctor Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handelInput} />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmailv">
        <Form.Label>Enter Doctor City</Form.Label>
        <Form.Control type="text" name="city" onChange={handelInput}  />
      </Form.Group>



       <Form.Group className="mb-3" controlId="formBasicEmaile">
        <Form.Label>select Specialization</Form.Label>
        <Form.Select aria-label="Default select example"  name="specility" onChange={handelInput} >
          <option>Open this select menu</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
    </Form.Select>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handelInput} />
      </Form.Group>
    </Form>



        </Modal.Body>
        <Modal.Footer style={{justifyContent:"start" , alignItems:"start"}}>
          <Button variant="primary"  onClick={handelSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
     <ToastContainer />
        
        </>
    )
}

export default DoctorResigtraction;