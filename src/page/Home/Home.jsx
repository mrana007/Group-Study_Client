import Banner from "../../components/layout/Banner/Banner";
import Faq from "../../components/layout/Faq/Faq";
import Container from "../../components/ui/Container";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Faq />
      </Container>
    </div>
  );
};

export default Home;
