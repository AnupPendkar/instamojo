import "./amountAndPurposePage.css";
import {Link} from "react-router-dom";
import { UserContext } from '../../userContext';
import { useContext } from "react";

function AmountAndPurposePage() {

    const {purpose, setPurpose, amount, setAmount} = useContext(UserContext);
    return (  
        <div className="amount-purpose-page">
            <div className="container">
                <div className="wrapper">
                    <p className="text">Purpose of Payment</p>
                    <input onChange={(e)=>setPurpose(e.target.value)} type="text" className="input" value={purpose}/>
                </div>
                <div className="wrapper">
                    <p className="text">Amount</p>
                    <div className="input-wrapper">
                        <div className="rupee-container">
                            <p className="text">$</p>
                        </div>
                        <input onChange={(e)=>setAmount(+e.target.value)} type="number" className="input" value={amount}/>
                    </div>
                </div>
                <Link to={`/user-details`}>
                    <button className="btn">Pay</button>
                </Link>
            </div>
        </div>
    );
}

export default AmountAndPurposePage;