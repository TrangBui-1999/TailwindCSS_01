import React from "react";

function Footer({ links }) {
  const company = [
    { name: "Careers", href: "#" },
    { name: "Media", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Product", href: "#" },
  ];
  const supports = [
    { name: "Contact", href: "#" },
    { name: "Downloads & Resources", href: "#" },
    { name: "Videos", href: "#" },
  ];
  return (
    <>
      <div className="bg-white dark:bg-black mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none h-1/2 w-full flex md:flex-row flex-col justify-around items-start  dark:border-gray-50">
        <div className="p-5 ">
          <ul>
            <p className="pb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              <span className="text-indigo-600">CV </span>website
            </p>
            <div className="flex gap-6 pb-5">
              <a
                href="mailto:trangbuiwork@gmail.com?subject=Contact%20Me&body=Hello%20Trang"
                className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-indigo-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-indigo-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <a href="https://www.linkedin.com/in/trang-bui-profiles/message/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-indigo-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-semibold text-2xl pb-4 dark:text-white">
              Search
            </p>
            {links.map((link) => (
              <li className="pb-2 hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer text-lg leading-8 text-gray-600 dark:text-white">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-semibold text-2xl pb-4 dark:text-white">
              Company
            </p>
            {company.map((link) => (
              <li className="pb-2 hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer text-lg leading-8 text-gray-600 dark:text-white">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-semibold text-2xl pb-4 dark:text-white">
              Support
            </p>
            {supports.map((link) => (
              <li className="pb-2 hover:text-blue-600 dark:hover:text-blue-600 cursor-pointer text-lg leading-8 text-gray-600 dark:text-white">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50 dark:bg-gray-800">
        <h1 className=" text-gray-800 font-semibold dark:text-white">
          © 2023-2024 All rights reserved | Build with TailwindCSS by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            tbwork{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
