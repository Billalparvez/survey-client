import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import LatestSurvey from "../LatestSurvey/LatestSurvey";
import FeaturedSurvey from "../FeaturedSurvey/FeaturedSurvey";
import Container from "../../../Shard/Container";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Survey App |  HOme </title>
      </Helmet>
      <Bannar></Bannar>
      <Container>
        <Testimonial></Testimonial>
        <FeaturedSurvey></FeaturedSurvey>
        <LatestSurvey></LatestSurvey>
      </Container>
    </div>
  );
};

export default Home;