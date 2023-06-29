import Brands from "./components/Brands";
import FAQs from "./components/FAQs";
import MainHeader from "./components/MainHeader";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import './home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Brands />
      <Services />
      <Steps />
      <FAQs />
      <Testimonials />
      <Signup />
    </>
  );
};

export default Home;