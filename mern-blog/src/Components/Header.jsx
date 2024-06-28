import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="  border-b-2">
        <Link
          to="/"
          className="dark:text-white lg:text-[18px] sm:text-[15px] font-bold "
        >
          <span className=" font-thin px-2 py-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 rounded-lg text-white">
            Arman&apos;s
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden md:inline"
          />
        </form>
        <Button
          className=" border border-yellow-500 dark:text-white   md:hidden "
          color="gray"
          pill
        >
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2  items-center">
          <Button
            className=" shadow-md text-center w-12 h-9 "
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button className="bg-gradient-to-r from-sky-700 to-blue-400">
              SignIn
            </Button>
          </Link>
          <Navbar.Toggle></Navbar.Toggle>
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path === "/"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"}>
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
