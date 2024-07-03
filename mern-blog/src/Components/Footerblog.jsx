import { Footer, FooterLinkGroup, FooterTitle } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footerblog() {
  return (
    <Footer container>
      <div className="w-full">
        <div className=" grid md:grid-cols-2 gap-[20px]">
          <div>
            <Link
              to="/"
              className="dark:text-white lg:text-[18px] sm:text-[15px] font-bold "
            >
              <span className=" font-thin px-2 py-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 rounded-lg text-white">
                Arman&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-3  ">
            <div className="">
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <Footer.Link href="#">about us</Footer.Link>
                <Footer.Link href="#">Profile</Footer.Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <Footer.Link href="#" className="whitespace-nowrap">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="whitespace-nowrap">
                  Terms &amp; Conditions
                </Footer.Link>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />

        <div className="flex flex-col gap-3  sm:flex-row justify-between px-[50px]">
          <Footer.Copyright
            href="#"
            by="Arman-blog"
            year={2024}
            className="whitespace-nowrap"
          />
          <div className="flex gap-2">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footerblog;
