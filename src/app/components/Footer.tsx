import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social icons
export default function Footer(){
  return(

    <footer className="w-full bg-black py-24 text-white mt-auto">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
      {/* Column 1: Company Info */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p className="text-gray-400">
          We are a team dedicated to bringing you the best experience. Get in touch with us for any inquiries or support.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">Quick Links</h3>
        <ul className="space-y-4">
          <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>

      {/* Column 3: Social Media & Contact */}
      <div>
        <h3 className="text-3xl font-semibold mb-6">Follow Us</h3>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={32} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={32} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={32} />
          </a>
        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-semibold mb-2">Contact Us:</h4>
          <p className="text-gray-400">Email: support@company.com</p>
          <p className="text-gray-400">Phone: +123-456-7890</p>
        </div>
      </div>
    </div>

    {/* Bottom Copyright Section */}
    <div className="text-center mt-12 border-t border-gray-600 pt-16">
      <p className="text-gray-400 text-sm">© 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
  )}