import "../pages/home.css";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize text-secondaryWhite max-w-[37rem]">
          Online Jewellery Shopping hub
        </h1>
        <p className="text-secondaryWhite regular-16 mt-6 max-w-[33rem]">
          Welcome to Kanika, your destination for exquisite jewellery crafted to celebrate life's precious moments.
          Explore our collection of timeless designs and modern elegance, each piece carefully selected to reflect
          quality and style. Whether you're seeking a meaningful gift or a statement piece to elevate your look,
          Kanika offers jewellery that speaks to your unique taste and beauty. Indulge in luxury with confidence and
          let Kanika be a part of your unforgettable story.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="flexCenter gap-x-3">
            {/* Stars Icons */}
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="bold-16 sm:bold-20">
            176k <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
