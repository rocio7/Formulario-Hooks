
import React,{useState} from "react";

const Formulario = () =>{

    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [contraseña,setContraseña] = useState("");
    const [confirmContraseña,setConfirmarContraseña] = useState("");

    return(

        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">First Name</label>
                    <input id="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" onChange={(e) => setConfirmarContraseña(e.target.value)} value={confirmContraseña}/>
                </div>
            </form>

            <div>

                <h3>Your From Data</h3>
                <p>First Name : {nombre}</p>
                <p>Last Name : {apellido}</p>
                <p>Email : {email}</p>
                <p>Password : {contraseña}</p>
                <p>Confirm Password : {confirmContraseña}</p>

            </div>

        </div>


    )

}
export default Formulario;

