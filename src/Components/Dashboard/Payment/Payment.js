import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51KDs8DIHpykq4r7Xg1IymHWlM6HyZXpnlCw89tGLd5Bu0wQTvLabKFFj8l9weFZBa86ASjHnZiJqLlzBl7PruJRe00v0iPcpAi')

const Payment = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://pacific-wave-94058.herokuapp.com/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [orderId]);
    return (
        <div>
            {/* <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4> */}
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
            <h2>hello</h2>
        </div>
    );
};

export default Payment;