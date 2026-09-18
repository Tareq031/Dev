import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-red-100">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-28"
            />
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-5 text-xs font-medium text-gray-700">
            <a href="#" className="hover:text-pink-500">
              GitHub
            </a>

            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>

            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Product
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-pink-500">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-800">
            Legal
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-gray-400 sm:flex-row">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;