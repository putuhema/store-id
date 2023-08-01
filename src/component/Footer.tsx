import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t px-60 mt-32">
      <div className="py-4 mb-20 flex justify-between items-center">
        <div className="cursor-pointer rounded-md p-2 hover:bg-gray-200">
          <a
            href="https://github.com/putuhema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <p>
          &copy; 2023-{new Date().getFullYear()},
          <span className="font-bold italic">Store.id</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
