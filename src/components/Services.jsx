import { services } from "../data";
import Service from "./Service";

const Services = () => {


  return (
    <section id="about" className="services__section">
      <div className="container services__container">
        <div>
          <h1 className="blue-header">More than 10000 users trust Fintekk</h1>
          <p>Our services</p>
          <h2 className="mini-blue-header">What we offer</h2>
          <p className="p-gray">We help individuals become more flexible and responsible with their finances and handle payments smooth and easy.</p>
        </div>
        <div className="services">
          {
            services.map(service => (
              <Service
                key={service.id}
                title={service.title}
                info={service.info}
                img={service.img}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Services;