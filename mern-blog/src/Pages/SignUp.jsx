import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
function SignUp() {
  const handleChange = (e) => {};

  return (
    <div className=" mt-[50px] sm:mt-[100px] max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-5 px-[20px] sm:px-[25px] md:px-[40px] items-center md:flex-row">
        <div className="flex-1 ">
          <div className="flex flex-col  gap-2 ">
            <Link
              to="/"
              className="dark:text-white text-[20px] lg:text-[30px] sm:text-[24px] font-bold "
            >
              <span className=" font-semibold px-6 py-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 rounded-lg text-white">
                Arman&apos;s
              </span>
              Blog
            </Link>
            <span className="text-[13px] leading-4 md:leading-5 sm:text-[16px]  md:text-[18px] text-slate-400">
              This is demo Project.You can sign up with your email and Password
              or with Google.
            </span>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div>
            <form className="flex flex-col gap-4">
              <div>
                <Label value="username" />
                <TextInput
                  type="text"
                  placeholder="username"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="email" />
                <TextInput
                  type="email"
                  placeholder="user1@gmail.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="password" />
                <TextInput
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone="greenToBlue">Sign Up</Button>
            </form>
            <div className="flex gap-[10px]">
              <span> Have an Account?</span>
              <Link to="/sign-in " className="text-blue-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
