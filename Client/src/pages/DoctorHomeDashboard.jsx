import { useNavigate } from "react-router-dom";


const DoctorHomeDashboard = ()=>{
    const navigate = useNavigate();
  

    const logout = ()=>{
        localStorage.clear();
        navigate("/login");
    }
     

    return(
        <>

        <h1 id="dashboard">Welcome to Doctor Home Admin panel Dashboard</h1>
       

       <div id="local">
        Welcome: {localStorage.getItem("name")}<br></br>
        Email :{localStorage.getItem("email")}<br></br>
        <button style={{ fontSize:"20px", borderRadius:"30px", border:"1px solid black"}} onClick={logout} >Logout</button>
       </div>


        <div id="data">
        <div>
            <h1>welcome to our pecent list</h1>
        </div>
        <div >
            <div>hospital data</div>
            <div>medicine data</div>
        </div>
        </div>
        
        </>
    )
}

export default DoctorHomeDashboard;