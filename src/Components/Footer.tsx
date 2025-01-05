import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500  to-yellow-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Left Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p>&copy; 2024 <b><i>Fun & Learn</i></b>. All rights reserved.</p>
          </div>

          {/* Links Section */}
          <div className="text-center mb-6 md:mb-0">
            <a href="#privacy" className="text-white hover:text-gray-300 mx-3 text-lg">Privacy Policy</a>
            <a href="#terms" className="text-white hover:text-gray-300 mx-3 text-lg">Terms of Service</a>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-white hover:text-gray-300 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

  