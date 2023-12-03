// import { Dna } from "react-loader-spinner";
import SectionTitle from "../../Components/SectionTitle";

import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import Container from '../../Shard/Container'
const stripePromise = loadStripe('pk_test_51OEvIoGHGhUeQP75drdmhJBIQHSLFTm1H2LSWs7Buig47gSkNNQ1Boi7C94sN3JiGN6ldbSUj7tOGq1541SYuKXd002mfOwQIx');

const Priceing = () => {
    return (
        <div className="pt-20 min-h-screen">
            <Helmet>
                <title> Bistor Boss |  Payment </title>
            </Helmet>
            
            <SectionTitle
                headings={'---What Our Clients Say---'}
                subHeading={'Payment of pro-user'}
            ></SectionTitle>

            <Container>
                <Elements stripe={stripePromise} >
                    <CheckOutForm></CheckOutForm>
                </Elements>  </Container>
        </div>
    );
};

export default Priceing;