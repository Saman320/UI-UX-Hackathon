const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between space-y-6 lg:space-y-0">
            {/* Logo and Social Icons */}
            <div className="w-full lg:w-1/4">
              <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
              <div className="flex space-x-4 mt-4">
                <a
                  href="/"
                  aria-label="Facebook"
                >
                  <img src="/images/facebook-filled.png" className="h-6" />
                </a>
                <a
                  href="/"
                  aria-label="Instagram"
                >
                  <img src="/images/instagram-filled.png" className="h-6" />
                </a>
                <a
                  href="/"
                  aria-label="Twitter"
                >
                  <img src="/images/twitter-filled.png" className="h-6" />
                </a>
              </div>
            </div>
  
            {/* Links Sections */}
            <div className="w-full lg:w-2/3 flex flex-wrap space-y-6 lg:space-y-0 justify-between">
              {/* Column 1 */}
              <div className="w-1/2 md:w-1/4">
                <h3 className="font-bold text-[#252B42] mb-4">Company Info</h3>
                <ul className="space-y-2 text-sm font-bold text-[#737373]">
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Column 2 */}
              <div className="w-1/2 md:w-1/4">
                <h3 className="font-bold text-[#252B42] mb-4">Legal</h3>
                <ul className="space-y-2 text-sm font-bold text-[#737373]">
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Carrier
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Column 3 */}
              <div className="w-1/2 md:w-1/4">
                <h3 className="font-bold text-[#252B42] mb-4">Features</h3>
                <ul className="space-y-2 text-sm font-bold text-[#737373]">
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Business Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      User Analytic
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Unlimited Support
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Column 4 */}
              <div className="w-1/2 md:w-1/4">
                <h3 className="font-bold text-[#252B42] mb-4">Resources</h3>
                <ul className="space-y-2 text-sm font-bold text-[#737373]">
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      iOS & Android
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Watch a Demo
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      API
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Subscribe Section */}
            <div className="w-full lg:w-1/4">
              <h3 className="text-sm font-bold text-[#252B42] mb-4">Get in Touch</h3>
              <form className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-[#4C9EEF]"
                />
                <button
                  type="submit"
                  className="bg-[#23A6F0] text-white px-4 py-2 text-sm font-bold hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-[#737373] mt-4">
                Lorem ipsum dolor amet.
              </p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10 text-center lg:justify-start text-sm text-[#737373]">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  