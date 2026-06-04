import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/peoplefirstlogo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

const menus = [
  { name: "Home", path: "/" },

  { name: "About Us", path: "/about" },

  {
    name: "Services",
    path: "/services",
    subMenu: [
      {
        name: "Staffing Solutions",
        sectionId: "staffing-solutions",
      },
      {
        name: "HR Solutions",
        sectionId: "hr-solutions",
      },
      {
        name: "Compliance & Industrial Relations",
        sectionId: "compliance-industrial-relations",
      },
    ],
  },

  { name: "Training", path: "/training" },

  { name: "Contact", path: "/contact" },
];

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleScroll = (sectionId) => {
  if (location.pathname === "/services") {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    navigate("/services", {
      state: {
        scrollTo: sectionId,
      },
    });
  }

  setOpenDropdown(null);
  setIsOpen(false);
};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    if (!isOpen) {
      
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-18 items-center">
          {/* Logo */}
          <div className="cursor-pointer">
            <Link to="/">
              <img src={logo} alt="Company Logo" className="h-12 md:h-18 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            ref={dropdownRef}
            className="hidden md:flex space-x-15 relative"
          >
            {menus.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.subMenu?.length > 0;

              return (
                <div key={index} className="relative group">
                  {hasSubmenu ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`text-[18px] font-montserrat font-medium flex items-center gap-1 transition ${
                        openDropdown === item.name
                          ? "text-[#348CD7]"
                          : "text-black hover:text-[#348CD7]"
                      }`}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-[18px] font-montserrat font-medium pb-1 transition ${
                        isActive
                          ? "border-b-4 border-[#2B74DB] text-[#2B74DB]"
                          : "text-black hover:text-[#2B74DB]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasSubmenu && openDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-3 w-72 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-40">
                      <h4 className="text-[#2B74DB] font-semibold text-[16px] px-4 pb-2">
                        {item.name}
                      </h4>
                      <div className="flex flex-col space-y-2 px-4">
                        {item.subMenu.map((sub, i) => (
  <button
    key={i}
    onClick={() => handleScroll(sub.sectionId)}
    className="text-[20px] mt-3 text-gray-800 font-medium hover:text-[#2B74DB] transition text-left"
  >
    {sub.name}
  </button>
))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" text-[#348CD7] p-1 px-3 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-50">
          <button
            className="absolute top-6 right-4 text-[#348CD7] p-2 px-4 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {menus.map((item, index) => {
            const isActive = location.pathname === item.path;
            const hasSubmenu = item.subMenu?.length > 0;
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div key={index} className="flex flex-col items-center">
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : item.name)
                      }
                      className={`text-[18px] font-montserrat font-medium flex items-center gap-2 ${
                        isActive || isDropdownOpen
                          ? "text-[#2B74DB]"
                          : "text-black hover:text-[#2B74DB]"
                      }`}
                    >
                      {item.name}
                      {isDropdownOpen ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="flex flex-col mt-6 text-center space-y-6">
                        {item.subMenu.map((sub, i) => (
  <button
    key={i}
    onClick={() => handleScroll(sub.sectionId)}
    className="text-[18px] font-medium text-gray-800 hover:text-[#2B74DB]"
  >
    {sub.name}
  </button>
))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[18px] font-montserrat font-medium ${
                      isActive
                        ? "text-[#2B74DB] border-b-4 border-[#2B74DB]"
                        : "text-black hover:text-[#2B74DB]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
