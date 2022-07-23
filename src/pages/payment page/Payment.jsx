import "./payment.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { UserContext } from "../../userContext";
import {Link} from "react-router-dom";

function Payment() {
    const iconRef = useRef();
    const container = useRef();
    const upperSec = useRef();
    const [rotate, setRotate] = useState(1);
    const [height, setHeight] = useState(1);
    useEffect(()=>{
        upperSec.current.addEventListener("click", ()=>{
            iconRef.current.style.transform = `rotate(${rotate*90}deg) scale(0.7)`
            container.current.style.height = `${height*50}px`;
            setHeight(!height);
            setRotate(!rotate);
        })
    })

    const paymentContainer = useRef();
    const upiContainer = useRef();
    const paymentAllContainer = useRef();
    const showPaymentMethodBtn = useRef();
    const paymentMethodContainer = useRef();
    const showUpi = ()=>{
        paymentContainer.current.style.display = "none";
        upiContainer.current.style.display = "block";
    }
    const showPayment = ()=>{
        paymentContainer.current.style.display = "flex";
        upiContainer.current.style.display = "none";
    }
    const showMorePaymentMethods = ()=>{
        paymentAllContainer.current.style.display = "none";
        showPaymentMethodBtn.current.style.display = "none";
        paymentMethodContainer.current.style.display = "block";
    }
    const hideMorePaymentMethods = ()=>{
        paymentAllContainer.current.style.display = "block";
        showPaymentMethodBtn.current.style.display = "flex";
        paymentMethodContainer.current.style.display = "none";
        
    }

    const {purpose, amount} = useContext(UserContext);
    const fees = +(amount*0.03).toFixed(2);
    const gst = +((fees*18)/100).toFixed(2);
    const total_convenience_fees = +(fees + gst).toFixed(2);
    const total = (total_convenience_fees+amount).toFixed(2)
    return (  
        <div className="payment-page">
            <div className="payment-container">
                <div className="purpose-wrapper">
                    <div className="purpose">
                        <p className="purpose-title text">Purpose of Payment</p>
                        <p className="purpose-text text">{purpose}</p>
                    </div>
                    <Link to="/">
                        <button className="change-btn">Change</button>
                    </Link>
                </div>
                <div className="amount-container">
                    <p className="amount-text text">Amount</p>
                    <p className="price text"><span>₹ </span>{amount}</p>
                </div>
                <div className="wrapper">
                    <div ref={upperSec} className="upper-sec">
                        <i ref={iconRef} className="fa-solid fa-greater-than"></i>
                        <p className="convenience-text text">Convenience fee</p>
                        <p className="price-text"><span>₹ </span>{total_convenience_fees}</p>
                    </div>
                    <div ref={container} className="convenience-container">
                        <div className="row1 row">
                            <p className="text">Fee</p>
                            <p className="text">{fees}</p>
                        </div>
                        <div className="row2 row">
                            <p className="text">GST @ 18%</p>
                            <p className="text">{gst}</p>
                        </div>
                    </div>
                </div>
                <div className="total-wrapper">
                    <p className="total-text">Total</p>
                    <p className="total text"><span>₹ </span>{total}</p>
                </div>
                <div className="your-details-container">
                    <Link className="link" to="/user-details">
                        <p className="your-text text">Your Details</p>
                    </Link>
                    <i className="fa-solid fa-greater-than"></i>
                    <p className="payment-text text">Payment</p>
                </div>
                <div ref={paymentAllContainer} className="payment-all-container">
                    <div ref={paymentContainer} className="payment-wrapper">
                            <div className="qr"></div>
                            <p className="text title">Scan and Pay</p>
                            <p className="text price"><span>₹ </span>{total}</p>
                            <div className="or-container">
                                <div className="or"></div>
                                <p className="text">OR</p>
                                <div className="or"></div>
                            </div>
                            <button onClick={()=>showUpi()} className="upis-btn btn">
                                Enter UPI ID
                            </button>
                    </div>
                    <div ref={upiContainer} className="upi-container">
                        <div className="wrapper">
                            <p className="text">UPI</p>
                            <button onClick={()=>showPayment()} className="change-btn">change</button>
                        </div>
                        <div className="upis">
                            <p className="text">Select your UPI app</p>
                            <div className="upi-wrapper">
                                <div className="upi-box">
                                    <img src="images/bhim.png" alt="" />
                                </div>
                                <div className="upi-box">
                                    <img src="images/phonepe.png" alt="" />
                                </div>
                                <div className="upi-box">
                                    <img src="images/gpay.png" alt="" />
                                </div>
                                <div className="upi-box">
                                    <img src="images/paytm.png" alt="" />
                                </div>
                            </div>
                            <button className="other-upi-btn btn">OTHER UPI APPS</button>
                            <p className="how-text text">How to pay using UPI?</p>
                        </div>
                    </div>
                </div>
                <button ref={showPaymentMethodBtn} onClick={()=>showMorePaymentMethods()} className="more-options-btn btn">
                    More payment options
                    <i className="fa-solid fa-greater-than"></i>
                </button>
                <div ref={paymentMethodContainer} className="payment-methods-container">
                    <button onClick={()=>hideMorePaymentMethods()} className="more-options-btn btn">
                        Scan UPI QR and pay
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                    <p className="text">More payment options</p>
                    <button className="payment-option-btn">
                        <i className="fa-brands fa-cc-visa"></i>
                        Credit / Debit Cards
                    </button>
                    <button className="payment-option-btn">
                        <i className="fa-solid fa-building-columns"></i>
                        Net Banking
                    </button>
                    <button className="payment-option-btn">
                        <i className="fa-solid fa-wallet"></i>
                        Wallets
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;