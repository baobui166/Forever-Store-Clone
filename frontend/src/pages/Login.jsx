import { useState } from "react";

function Login() {
  const [currState, setCurrState] = useState("Login");
  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandle}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prate-regular text-3xl">{currState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currState === "Sign up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 border py-2 border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign up")} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")} className="cursor-pointer">
            Login here
          </p>
        )}
      </div>
      <button type="submit" className="bg-black px-8 py-2 text-white mt-4">
        {currState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
