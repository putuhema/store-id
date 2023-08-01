import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Dropdown = ({
  title,
  children,
}: {
  title: string;
  children: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2">
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="font-bold flex items-center justify-between cursor-pointer select-none"
      >
        {title}
        <span
          className={`${
            isOpen && " transform rotate-180 "
          } transition-all duration-200 p-2 hover:bg-gray-100 rounded-full cursor-pointer`}
        >
          <ChevronDown />
        </span>
      </span>
      <ul
        className={`${
          isOpen && "hidden"
        } transition-all duration-500 p-2 flex flex-col gap-4`}
      >
        {children.map((child) => (
          <li
            className=" hover:bg-gray-100 rounded-md cursor-pointer"
            key={child}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
