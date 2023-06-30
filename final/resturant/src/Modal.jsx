import './Modal.css';
import {useState} from "react";

function Modal({modalRef, setBooked, setName}) {
    const [customer, setCustomer] = useState("");
    const [size, setSize] = useState("default");
    const [phone, setPhone] = useState("");
    const [large, setLarge] = useState("");

    const [isNameError, setIsNameError] = useState(false);
    const [isPhoneError, setIsPhoneError] = useState(false);
    const [isSizeError, setIsSizeError] = useState(false);
    const [isLargeError, setIsLargeError] = useState(false);


    function errorClass(isError) {
        return isError ? "input-error" : "";
    }

    function resetModal() {
        setCustomer("");
        setPhone("");
        setSize("default");
        setLarge("");
        setIsNameError(false);
        setIsPhoneError(false);
        setIsSizeError(false);
        setIsLargeError(false);
    }

    const isLarge = size === "4+";

    return (
        <dialog className="modal" ref={modalRef}>
            <form className="form" method="post">
                <div className="form-title">Reservation</div>
                <div className="form-fields">
                    <div className="form-label-section">
                        <label className="form-label" htmlFor="name">Name: </label>
                        <span className="required-mark">* Required</span>
                    </div>
                    <input className={`form-input ${errorClass(isNameError)}`} id="name" name="name"
                           value={customer}
                           onInput={(e) => {
                               setCustomer(e.target.value);
                               setIsNameError(false);
                           }}/>
                    {isNameError && <div className="form-error">This field is Required.</div>}
                    <div className="form-label-section">
                        <label className="form-label" htmlFor="phone">Phone: </label>
                        <span className="required-mark">* Required</span>
                    </div>
                    <input className={`form-input ${errorClass(isPhoneError)}`} id="phone" name="phone"
                           value={phone}
                           onInput={(e) => {
                               setPhone(e.target.value);
                               setIsPhoneError(false);
                           }}/>
                    {isPhoneError && <div className="form-error">This field is Required.</div>}
                    <div className="form-label-section">
                        <label className="form-label" htmlFor="party-size">Party Size: </label>
                        <span className="required-mark">* Required</span>
                    </div>
                    <select className={errorClass(isSizeError)} id="party-size" name="party-size" value={size}
                            onChange={(e) => {
                                setSize(e.target.value);
                                setIsSizeError(false);
                            }}>
                        <option value="default">(Select from below)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="4+">More than 4</option>
                    </select>
                    {isSizeError && <div className="form-error">This field is Required.</div>}
                    {isLarge &&
                        <>
                            <div className="form-label-section">
                                <label className="form-label" htmlFor="large-party-size">Size: </label>
                                <span className="required-mark">* Required</span>
                            </div>
                            <input
                                className={`form-input ${errorClass(isLargeError)}`}
                                id="large-party-size"
                                name="large-party-size" value={large}
                                onInput={(e) => {
                                    setLarge(e.target.value);
                                    setIsLargeError(false);
                                }}
                            />
                            {isLargeError && <div className="form-error">This field is Required.</div>}
                        </>
                    }
                </div>
                <div className="form-buttons">
                    <button className="form-button cancel-button" type="button" onClick={() => {
                        resetModal();
                        modalRef.current.close();
                    }}>Cancel
                    </button>
                    <button className="form-button book-button" type="submit" onClick={(e) => {
                        e.preventDefault();
                        const isNameFieldValid = customer !== "";
                        const isPhoneFieldValid = phone !== "";
                        const isSizeFieldValid =  size !== "default";
                        const isLargeFieldValid = isLarge ? large !== "" : true;
                        if (isNameFieldValid && isPhoneFieldValid && isSizeFieldValid && isLargeFieldValid) {
                            modalRef.current.close();
                            setBooked(true);
                            setName(customer);
                            resetModal();
                        }
                        setIsNameError(!isNameFieldValid);
                        setIsPhoneError(!isPhoneFieldValid);
                        setIsSizeError(!isSizeFieldValid);
                        setIsLargeError(!isLargeFieldValid);
                    }}>
                        Book
                    </button>
                </div>
            </form>
        </dialog>
    );
}

export default Modal;

