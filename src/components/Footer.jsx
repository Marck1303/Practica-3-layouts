import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-white via-white to-blue-50 px-6 md:px-20 py-12 text-[#1F2937]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
        {/* Columns */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Prices</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Career</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Help</Link></li>
            <li><Link to="#">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Team</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Developer</Link></li>
            <li><Link to="#">Designer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Blog</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">CEO</Link></li>
            <li><Link to="#">Lifestyle</Link></li>
            <li><Link to="#">Article</Link></li>
            <li><Link to="#">Tech</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-purple-300 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Subscribe to our newsletter</h4>
            <form className="flex items-center bg-white rounded-full border border-gray-300 overflow-hidden">
              <div className="pl-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0l-4 4-4-4" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-2 py-2 text-sm outline-none"
              />
              <button type="submit" className="bg-white text-purple-500 px-4 py-2 hover:text-purple-700 transition">
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-100 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>All rights Reserved &copy; <span className="font-semibold text-gray-700">Your Company, 2021</span></p>
        <p className="mt-4 md:mt-0">
          Made with <span className="text-red-500 mx-1">❤️</span> by <span className="font-semibold text-gray-700">Themewagon</span>
        </p>
      </div>
    </footer>
  )
}
