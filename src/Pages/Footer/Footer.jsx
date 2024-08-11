import { Link } from "react-router-dom";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#ECF5FF] text-[#475467] py-6 mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-7 w-11/12 mx-auto">
          <div className=" col-span-2">
            <div>
              <img className="w-[53.289px] h-[80px]" src={logo} alt="" />
            </div>
            <p className=" mt-3">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className=" col-span-5">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 md:space-y-0">
              <div>
                <h3 className="font-extrabold">Product</h3>
                <div className="grid space-y-2 mt-5">
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Overview
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Features
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Solutions
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Tutorials
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Pricing
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Releases
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Company</h3>
                <div className="grid space-y-2 mt-5">
                  <Link
                    to="/about"
                    className=" hover:underline hover:text-[#055BB2] hover:font-medium"
                  >
                    About us
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Careers
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Press
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    News
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Media Kit
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Resources</h3>
                <div className="grid space-y-2 mt-5">
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Blog
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Newsletter
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Events
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Help Center
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Tutorials
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Support
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Social</h3>
                <div className="grid space-y-2 mt-5">
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Twitter
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Linkedin
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    FaceBook
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    GitHub
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    AngelList
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Dribble
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Legal</h3>
                <div className="grid space-y-2 mt-5">
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Terms
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Privacy
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Cookies
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Licenses
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Settings
                  </Link>
                  <Link className=" hover:underline hover:text-[#055BB2] hover:font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" mt-8 mb-8" />
        <div className=" w-11/12 mx-auto grid md:flex justify-between items-center">
          <div>
            <p className=" text-center">
              © 2024 Heritage- Nest . All rights reserved.
            </p>
          </div>
          <div className=" flex items-center justify-center gap-5 mt-4 md:mt-0">
            <a target="_blank" href="https://twitter.com/naymHdev">
              <FaTwitter className=" text-xl text-sky-400" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/naymhdev">
              <FaLinkedin className=" text-xl text-sky-600" />
            </a>
            <a target="_blank" href="https://web.facebook.com/naymHdev">
              <FaFacebook className=" text-xl text-sky-500" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@naymhossen1b">
              <FaYoutube className=" text-xl text-red-500" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
