import { brands } from "../data";

const Brands = () => {
  return (
    <div className="brands__container container">
      {
        brands.map((brand) => (
          <img key={brand.id} src={brand.img} alt={brand.img} />
        ))
      }
    </div>
  );
};

export default Brands;