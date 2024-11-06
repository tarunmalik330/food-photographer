// import Link from "next/link";
// import React from "react";

// const Nav = () => {
//   const [active, setActive] = useState(true);
//   const handleNavbar = () => {
//     setActive((prev) => {
//       const body = document.body;
//       if (prev) {
//         body.classList.add("overflow-hidden");
//       } else {
//         body.classList.remove("overflow-hidden");
//       }
//       return !prev;
//     });
//   };
//   // const removeNavbar = () => {
//   //   setActive(true);
//   //   document.body.classList.remove("overflow-hidden");
//   // };
//   // const toggleDropdown = (index: number) => {
//   //   setDropdownOpen((prev) => (prev === index ? null : index));
//   // };
//   return (
//     <div className="py-5 shadow-nav bg-white">
//       <div className="container xl:max-w-[1160px] mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="font-cinzel text-2xl font-bold text-black">
//             J.ALISSA
//           </Link>
//           <div
//             className="flex lg:hidden flex-col items-center justify-between w-[30px] h-[22px] z-30 cursor-pointer"
//             onClick={handleNavbar}
//           >
//             <span
//               className={`w-full h-[3px] bg-white ease-in-out duration-300 rounded-[2px] ${
//                 !active && "rotate-45 relative top-[8px] -right-px"
//               } ${active && "rotate-0"}`}
//             ></span>
//             <span
//               className={`w-full h-[3px] bg-white ease-in-out duration-300 rounded-[2px] ${
//                 !active && "hidden"
//               } ${active && "block"}`}
//             ></span>
//             <span
//               className={`w-full h-[3px] bg-white ease-in-out duration-300 rounded-[2px] ${
//                 !active && "-rotate-45 relative bottom-[11px] -right-px"
//               } ${active && "rotate-0"}`}
//             ></span>
//           </div>
//           <ul
//             className={`flex ease-in-out duration-300 ${
//               active && "max-lg:left-[-100%]"
//             } ${
//               !active && "max-lg:left-0"
//             } max-lg:bg-dark-blue max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full w-[75%] max-lg:top-0 items-center justify-center lg:gap-4 gap-5 z-20`}
//           >
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Portfolio
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Books
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Client Albums
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => toggleDropdown(0)}
//                 className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
//                 href=""
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(true);

  const handleNavbar = () => {
    setActive((prev) => {
      const body = document.body;
      if (prev) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
      return !prev;
    });
  };

  return (
    <div className="py-5 shadow-nav bg-white">
      <div className="container xl:max-w-[1160px] mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-cinzel text-2xl font-bold text-black">
            J.ALISSA
          </Link>
          <div
            className="flex lg:hidden flex-col items-center justify-between w-[30px] h-[22px] z-30 cursor-pointer"
            onClick={handleNavbar}
          >
            <span
              className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${
                !active && "rotate-45 relative top-[8px] -right-px"
              } ${active && "rotate-0"}`}
            ></span>
            <span
              className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${
                !active && "hidden"
              } ${active && "block"}`}
            ></span>
            <span
              className={`w-full h-[3px] bg-black ease-in-out duration-300 rounded-[2px] ${
                !active && "-rotate-45 relative bottom-[11px] -right-px"
              } ${active && "rotate-0"}`}
            ></span>
          </div>

          <ul
            className={`flex flex-col lg:flex-row gap-5 items-center justify-center absolute lg:static lg:flex ${
              active ? "max-lg:left-[-100%]" : "max-lg:left-0"
            } max-lg:bg-dark-blue max-lg:w-full max-lg:top-0 max-lg:bg-white max-lg:h-full lg:bg-transparent lg:h-auto lg:gap-4 z-20 transition-all ease-in-out duration-300`}
          >
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Client Albums
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
