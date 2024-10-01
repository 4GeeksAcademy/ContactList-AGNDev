import React from "react"
const Contact = ({ id, name, phone, email, address }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{ width: "540px", height: "200px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-electronic-contact-icon-image_2292426.jpg"
                            className="img-fluid rounded-start" alt="..."
                            style={{ height: "200px" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{phone}</p>
                            <p className="card-text">{email}</p>
                            <p className="card-text">{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;