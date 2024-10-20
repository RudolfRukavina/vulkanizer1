// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vulcanizer</h3>
            <p>Your trusted auto repair service.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact us</h4>
            <p>1234 Auto Repair St.</p>
            <p>Carville, CV 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@vulcanizer.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {currentYear} Vulcanizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
