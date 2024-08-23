import { assets } from "../assets/assets";
import NewSletterBox from "../components/NewSletterBox";
import Title from "../components/Title";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"about"} text2={"us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we believe that fashion is more than just clothing; it's
            an expression of individuality. Our curated collection of apparel
            combines modern trends with timeless classics, ensuring you find the
            perfect pieces for any occasion. Whether you're looking for casual
            wear, chic office attire, or statement pieces for a night out, we've
            got you covered. Our commitment to quality is reflected in every
            stitch, with fabrics that feel as good as they look. We offer a wide
            range of sizes to ensure a flattering fit for everyone, and our
            friendly staff is always here to help you find exactly what you're
            looking for.
          </p>
          <p>
            Step into Forever today and discover your new favorite outfit.
            Because when you look good, you feel good – and that’s our ultimate
            goal.
          </p>
          <b className="text-gray-800 uppercase">Our mission</b>
          <p>
            Our dedication to excellence drives us to exceed expectations,
            deliver value, and foster long-lasting relationships. We aim to be a
            trusted partner in our customers' journey, providing not just
            products, but experiences that enhance their lives.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"why"} text2={"chosse us"} />
      </div>
      <div className="flex flex-col md-flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Quality is at the heart of everything we do. We are committed to
            delivering products that meet the highest standards of craftsmanship
            and durability. Our rigorous quality assurance processes ensure that
            each item is carefully inspected and tested, so you can have
            complete confidence in every purchase. We believe that our customers
            deserve nothing but the best, and we work tirelessly to maintain the
            superior quality that defines Viet Nam.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We understand that life can be busy, and convenience is key. That’s
            why we strive to make your shopping experience as seamless and
            enjoyable as possible. From easy-to-navigate websites to fast and
            reliable shipping, every aspect of our service is designed with your
            convenience in mind. Our goal is to provide a hassle-free
            experience, so you can focus on what matters most—enjoying the
            products you love.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer service:</b>
          <p className="text-gray-600">
            We understand that life can be busy, and convenience is key. That’s
            why we strive to make your shopping experience as seamless and
            enjoyable as possible. From easy-to-navigate websites to fast and
            reliable shipping, every aspect of our service is designed with your
            convenience in mind. Our goal is to provide a hassle-free
            experience, so you can focus on what matters most—enjoying the
            products you love.
          </p>
        </div>
      </div>
      <NewSletterBox />
    </div>
  );
}

export default About;
