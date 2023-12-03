import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from '../../hook/useAxios'
const CheckOutForm = () => {
    const stripe = useStripe();
    const axiosSecure = useAxios()
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // const { token } = await stripe.createToken();
        const response = await axiosSecure.post('/create-payment-intent')
        console.log(response)
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-info mt-5" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;