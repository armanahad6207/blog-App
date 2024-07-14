import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
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

        <div className="flex gap-2  items-center md:order-2">
          <Button
            className=" shadow-md hidden md:inline text-center w-12 h-9 "
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar img={currentUser.photoUrl} rounded />}
            >
              <DropdownHeader>
                <p className="text-[14px] font-bold">{currentUser.username}</p>
              </DropdownHeader>
              <Link to="/dashboard?tab=profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownDivider />
              <DropdownItem>Sign Out</DropdownItem>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="greenToBlue" outline>
                SignIn
              </Button>
            </Link>
          )}

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
