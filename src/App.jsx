import React, { useState } from "react";
import { Transition, Dialog, Switch } from "@headlessui/react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const posts = [
  {
    id: 1,
    title: "E-commerce UX Project",
    href: "https://sites.google.com/view/trangbuiwork-com/home",
    imageBig: "./images/e-commerce.png",
    description:
      "The local brand cloth website. This is the ideals of an website with mordern design and user-friendly. The website is designed with Figma and not yet developed with ReactJS.",
    date: "2023",
    datetime: "2023-03-16",
    category: { title: "UX", href: "#" },
    author: {
      name: "Trang Bui",
      role: "Frontend Developer",
      href: "https://www.linkedin.com/in/trang-bui-profiles/",
      imageUrl: "./avatar.jpg",
    },
  },
  {
    id: 2,
    title: "3D website",
    imageBig: "./images/3d1.PNG",
    href: "https://sites.google.com/view/trangbuiworkshowroom/trang-ch%E1%BB%A7",
    description: "Testing 3D enviroment in web browsing.",
    date: "2023",
    datetime: "2023-03-16",
    category: { title: "ThreeJS", href: "#" },
    author: {
      name: "Trang Bui",
      role: "Frontend Developer",
      href: "https://www.linkedin.com/in/trang-bui-profiles/",
      imageUrl: "./avatar.jpg",
    },
  },
  {
    id: 3,
    title: "Weather Dashboard",
    imageBig: "./images/weather.PNG",
    href: "https://sites.google.com/view/trangbuiworkshowroom/trang-ch%E1%BB%A7",
    description:
      "Template presentation is at Behance website. Visit at https://www.behance.net/gallery/173849863/Weather-app",
    date: "2023",
    datetime: "2023-03-16",
    category: [
      { title: "ReactJS", href: "#" },
      { title: "D3JS", href: "#" },
    ],
    author: {
      name: "Trang Bui",
      role: "Frontend Developer",
      href: "https://www.linkedin.com/in/trang-bui-profiles/",
      imageUrl: "./avatar.jpg",
    },
  },
  // More posts...
];

const navigation = [
  { name: "Home", href: "#" },
  { name: "Demo", href: "#" },
  { name: "Skills", href: "#" },
  { name: "About me", href: "#" },
];
function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <Header navigation={navigation} />
        {/* Content */}
        <div className="relative isolate py-14 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                The Projects
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
                Learn how to grow skills with self-development projects.
              </p>
            </div>
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => {
                const count = post.category.length >= 2;
                return (
                  <article
                    key={post.id}
                    className="dark:bg-blue-900 dark:border-4 dark:border-white flex max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl flex-col items-start justify-between ">
                    <div class="md:shrink-0 pb-3">
                      <img
                        class="h-48 w-full object-cover md:h-full "
                        src={post.imageBig}
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-x-4 text-xs px-3">
                      <time
                        dateTime={post.datetime}
                        className="text-gray-500 dark:text-white">
                        {post.date}
                      </time>
                      {count ? (
                        post.category.map((category) => (
                          <>
                            <a
                              href={category.href}
                              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ">
                              {category.title}
                            </a>
                          </>
                        ))
                      ) : (
                        <>
                          <a
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ">
                            {post.category.title}
                          </a>
                        </>
                      )}
                    </div>
                    <div className="group relative px-3">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-50 dark:text-yellow-400">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white">
                        {post.description}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4 self-center ">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600 dark:text-white">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* Background Blur */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <Footer links={navigation} />
      </div>
    </>
  );
}

export default App;
