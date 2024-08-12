import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";
import UseAuth from "../../Auth/UseAuth";
import toast from "react-hot-toast";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, userLogout } = UseAuth();
  // console.log("user", user);

  const handelSignOut = () => {
    try {
      userLogout();
      toast.success("User Logout Success!");
    } catch (error) {
      console.log("logout error", error);
      toast.error("User Logout Failed!");
    }
  };

  return (
    <header className="bg-[#ECF5FF]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sell
            </a>
            <a
              href="/searchResult"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
          </Popover.Group>
        </div>

        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src={logo} alt="" />
        </a>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          <a
            href="/manageRentals"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Manage Rentals
          </a>
          {user ? (
            <>
              <button
                onClick={handelSignOut}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <a
                href="/signIn"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Sign in
              </a>
            </>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3"></Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Buy
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sell
                </a>
                <a
                  href="/searchResult"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="/manageRentals"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Manage Rentals
                </a>
              </div>
              <div className="py-6">
                {user ? (
                  <>
                    <button
                      onClick={handelSignOut}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href="/signIn"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sign in
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
