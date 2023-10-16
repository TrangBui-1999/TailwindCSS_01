import React, { useState } from "react";
import { Transition, Dialog, Switch } from "@headlessui/react";

function Header({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  const [theme, setTheme] = useState(null);
  const [enabled, setEnabled] = useState(false);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  if (enabled) {
    localStorage.theme = "dark";
  } else {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "light";
  }
  //console.log(localStorage.theme);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5" />
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/vite.svg" alt="" />
          </div>
          <div className="flex gap-8 lg:hidden">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-blue-500" : "bg-black"}
          relative inline-flex h-6 w-11 items-center cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-6" : "translate-x-0"}
      pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={toggle}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-blue-500" : "bg-black"}
          relative inline-flex h-6 w-11 items-center cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-6" : "translate-x-0"}
      pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              onClick={show}>
              {" "}
              Menu <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu open state. */}

        {/* Background backdrop, show/hide based on slide-over state. */}
        {/* Add Transition */}
        <div class="lg:hidden" role="dialog" aria-modal="true"></div>
        {isOpen && (
          <>
            <div class="fixed inset-0 z-50"></div>
            <div
              class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900
        ">
              <div class="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/vite.svg" alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
                  onClick={hide}>
                  <span className="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white dark:hover:text-black">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white dark:hover:text-black">
                      Contact me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
      {/* Creating blur background */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/*  */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-14">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-200">
              This is the experiment website, which is used to demonstate 3D
              technique.{" "}
              <a
                href="https://sites.google.com/view/trangbuiworkshowroom/3d"
                className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Welcome to my CV website!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              I am a passionate web developer with a strong background in
              creating dynamic and user-friendly websites. This is the website
              with mixing of{" "}
              <strong class="underline decoration-sky-500">threeJS</strong> and{" "}
              <strong class="underline decoration-indigo-500">
                React Fiber
              </strong>{" "}
              framework with the help of{" "}
              <strong class="underline decoration-pink-500">TailwindCSS</strong>
              . I am constantly expanding my skill set and staying up-to-date
              with the latest trends and technologies in the industry.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="./CV.pdf"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                download={true}>
                Download CV
              </a>
              <a
                href="https://3d-movement.vercel.app/"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white ">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
