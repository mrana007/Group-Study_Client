import Banner from "../../components/layout/Banner/Banner";
import Faq from "../../components/layout/Faq/Faq";
import Features from "../../components/layout/Features/Features";
import Container from "../../components/ui/Container";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
      <Features />
        <Faq />
      </Container>
    </div>
  );
};

export default Home;
