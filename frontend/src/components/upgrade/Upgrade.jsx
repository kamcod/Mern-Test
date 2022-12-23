import { useState } from "react";
import StripeChecout from 'react-stripe-checkout'
// import { Link, useNavigate } from "react-router-dom";
// import classes from "./Login.module.css";
import axios from "axios";
import AppConfig from "../../utils/AppConfig";

const Upgrade = () =>{
    // const navigate = useNavigate();
    const [amount ,setAmount] = useState(0);

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }
    const onToken = (token) => {
        axios.post(AppConfig.apis.payment, token)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log("error")
            })
    }
    const onBuySubscription = (token) => {
        axios.post(AppConfig.apis.subscriptionPayment, token)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log("error")
            })
    }
    return(
        <div>
          <h1>Upgrade - [payment method] </h1>
            <h4>Welcome to payment gateway</h4>
<input type="number" value={amount} onChange={changeAmount} />
            <StripeChecout  // checkout npm docs
                name="Pay by card"
               token={onToken}
               stripeKey="pk_test_51MHRgSEadUq75vpeStgJd9h5ucaetTwwFdhcIYHWWa7L6E6F5LZRd0mKbgdRRtZlI9skZLrmiputTDJGzZ94nxYi00LmjyIU2E"
                panelLabel="Pay Now"
                amount={amount*100}    // in cents
                currency="USD"
                allowRememberMe={true}
            />
            <br /> <br />

            <h3>Subscription:</h3>
            <StripeChecout  // checkout npm docs
                name="Buy Subscribtion"
                token={onBuySubscription}
                stripeKey="pk_test_51MHRgSEadUq75vpeStgJd9h5ucaetTwwFdhcIYHWWa7L6E6F5LZRd0mKbgdRRtZlI9skZLrmiputTDJGzZ94nxYi00LmjyIU2E"
                panelLabel="Pay Now"
                amount={amount*100}    // in cents
                currency="USD"
                allowRememberMe={true}
            />
        </div>
    )
}

export default Upgrade
