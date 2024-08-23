import { assets } from "../assets/assets";
import NewSletterBox from "../components/NewSletterBox";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"contact"} text2={"us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Số 1 Song Hành <br /> An Phú, Quận 2, TP Hồ Chí Minh
          </p>
          <p className="text-gray-500">
            Tel: +0847522269 <br /> Email: buichibao1601@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forerver
          </p>
          <p className="text-gray-500">
            Learn more about our team and job opening.
          </p>

          <button className="border border-black px-8 py-4 hover:bg-black hover:text-white">
            Explore Job
          </button>
        </div>
      </div>
      <NewSletterBox />
    </div>
  );
}

export default Contact;
