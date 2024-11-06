import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="w-full self-end px-10 lg:w-1/2">
      <div className="mt-10">
        <div className="flex flex-col justify-center items-left w-full border border-slate-300 rounded-lg p-5 shadow-lg">
          <h1 className="text-3xl font-bold mb-5">Join now</h1>
          <div className="flex flex-col gap-3">
            <Link
              to={"/register"}
              className="flex justify-center border rounded-full p-2 bg-accent1 font-bold text-white hover:bg-accent2"
              type="submit"
            >
              Create account
            </Link>
            <p className="font-bold mt-5">Already have an account?</p>
            <button className="flex justify-center border rounded-full p-2 border-accent1 border-3 font-bold text-text hover:bg-accent2 hover:text-white hover:border-accent2">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
