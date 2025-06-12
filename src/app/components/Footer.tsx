import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 text-sm text-center md:text-left">
        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-2 group transition duration-300">
            <Mail
              size={16}
              className="group-hover:text-gray-100 transition duration-300"
            />
            <a
              href="mailto:you@example.com"
              className="relative underline-offset-4 hover:text-gray-100 hover:underline transition-all duration-300"
            >
              you@example.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MapPin size={16} />
            <span>Skellefteå, Sweden</span>
          </div>
          <p className="pt-1">Available for freelance or full-time roles</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 hover:text-gray-100 transition-transform transform hover:scale-105 duration-300"
          >
            <Github
              size={16}
              className="transition duration-300 group-hover:text-gray-100"
            />
            <span className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 hover:text-gray-100 transition-transform transform hover:scale-105 duration-300"
          >
            <Linkedin
              size={16}
              className="transition duration-300 group-hover:text-gray-100"
            />
            <span className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
              LinkedIn
            </span>
          </a>
        </div>

        {/* Footer Note */}
        <div>
          <div className="flex flex-col space-y-1">
            <span>Built with Next.js</span>
            <span>TypeScript, React & Tailwind CSS</span>
            <span>by Pontus Höglund</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
