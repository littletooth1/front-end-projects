import './Home.css';
import {useRef, useState} from "react";
import Modal from "./Modal";
import Carousel from "./Carousel";

function Home() {
    const modalRef = useRef();
    const [booked, setBooked] = useState(false);
    const [name, setName] = useState("");
    return (
        <div className="home">
            <h2 className="main-title">Welcome to Yang's Kitchen!</h2>
            <div className="carousel-section">
                <Carousel/>
            </div>
            <div className="events">
                <div className="event-card">
                    <p className="event-card-title">Mother's Day Discount</p>
                    <p className="event-card-content">Join us on Mother's Day and treat your mom to a delicious meal!</p>
                    <p className="event-card-discount">Discount: Use code "LOVEMOM" for 10% discount on Mother's Day</p>
                </div>
                <div className="event-card">
                    <p className="event-card-title">Father's Day Discount</p>
                    <p className="event-card-content">Join us on Father's Day and treat your dad to a delicious meal!</p>
                    <p className="event-card-discount">Discount: Use code "LOVEDAD" for 10% discount on Father's Day</p>
                </div>
                <button className="reservation-button" onClick={() => modalRef.current.showModal()}>Reservation</button>
                {booked && <div className="success-message">You have booked a table for {name}.</div>}
            </div>
            <Modal modalRef={modalRef} setBooked={setBooked} setName={setName}></Modal>
        </div>
    );
}

export default Home;
