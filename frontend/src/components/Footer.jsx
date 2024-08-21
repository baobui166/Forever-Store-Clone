import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            autem vero dolore recusandae, illum tempora omnis quibusdam,
            assumenda eaque a, cum suscipit nemo ut fugiat reiciendis quasi
            molestias. Ullam, natus?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+0847522269</li>
            <li>Contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center font-[600]">
          Copyright2024@foreveryou.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
