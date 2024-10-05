import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
const Contact = ({ id, name, phone, email, address }) => {
    const { actions } = useContext(Context)
    return (

        <div className="container mt-0 mb-0 p-0 d-flex justify-content-center bg-white" style={{ width: "1000px" }}>
            <div className="card" style={{ width: "904px", height: "210px" }}>
                <div className="row mt-0  d-flex justify-content-center">
                    <div className="col-md-3">
                        <img src="https://img.freepik.com/fotos-premium/mujer-gafas-sueter-dientes-blancos-grandes_1277187-60852.jpg?size=626&ext=jpg&ga=GA1.1.565848550.1728154810&semt=ais_hybrid"
                            className="img-fluid rounded-circle" alt="..."
                            style={{ height: "200px" }} />
                    </div>
                    <div className="col-md-9 d-flex">
                        <div className="card-body d-flex justify-content-center">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{phone}</p>
                            <p className="card-text">{email}</p>
                            <p className="card-text">{address}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <Link to={`/edit/${id}`} className="btn btn-white d-flex align-items-top">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>

                            <button onClick={() => actions.deleteContact(id)} className="btn btn-white d-flex align-items-top" type="submit">
                                <i className="fas fa-trash-can"></i>
                            </button>

                        </div>
                        {/* //activar el action
                    //Modal  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;