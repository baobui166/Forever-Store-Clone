import { useRef } from "react";

function NewSletterBox() {
  const inpuRef = useRef();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    inpuRef.current.value = "";
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-500">
        Subcribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
          ref={inpuRef}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewSletterBox;
