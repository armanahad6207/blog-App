import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigat = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // onSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("All fields are required!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      console.log("res", res);
      if (res.ok) {
        navigat("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className=" my-[30px] sm:my-[60px] max-w-[1000px] mx-auto">
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
              This is demo Project.You can sign in with your email and Password
              or with Google.
            </span>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                  placeholder="***********"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                gradientDuoTone="greenToBlue"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span>loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <div className="flex gap-[10px]">
              <span> Dont have an Account?</span>
              <Link to="/sign-up " className="text-blue-600">
                Sign Up
              </Link>
            </div>
            {errorMessage && <Alert color="failure">{errorMessage}</Alert>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
