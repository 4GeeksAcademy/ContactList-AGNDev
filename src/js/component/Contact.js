import React, { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
const Contact = ({ id, name, phone, email, address }) => {
    const { actions } = useContext(Context)
    return (
        <div className="container d-flex justify-content-center align-items-center bg-white" style={{ width: "1000px" }}>
            <div className="card" style={{ width: "904px", height: "180px" }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img src="https://img.freepik.com/fotos-premium/mujer-gafas-sueter-dientes-blancos-grandes_1277187-60852.jpg?size=626&ext=jpg&ga=GA1.1.565848550.1728154810&semt=ais_hybrid"
                            className="img-fluid rounded-circle d-flex justify-content-center align-items-center mt-4 ms-3" alt="..."
                            style={{ width: "130px", height: "130px" }} />
                    </div>
                    <div className="col-md-9 d-flex">
                        <div className="card-body d-flex flex-column ps-0 letra">
                            <h5 className="card-title me-2 mb-3 mt-1 d-flex justify-content-start">{name}</h5>
                            <p className="card-text me-2 d-flex justify-content-start"><i class="fa-solid fa-phone-flip me-2"></i>{phone} </p>
                            <p className="card-text me-2  d-flex justify-content-start"><i class="fa-solid fa-envelope me-2"></i>{email}</p>
                            <p className="card-text me-2 mt-0 d-flex justify-content-start"><i class="fa-solid fa-location-dot me-2"></i>{address}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <Link to={`/edit/${id}`} className="btn btn-white d-flex align-items-top">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>

                            <button onClick={() => actions.deleteContact(id)} className="btn btn-white d-flex align-items-top" type="submit">
                                <i className="fas fa-trash-can"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
