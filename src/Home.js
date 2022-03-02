import React from "react";
function Home() {
  return (
    <div>
      <div className=" 2xl:pt-44 pt-32 text-white flex flex-row justify-center text-center">
        <div className="w-2/3">
          <h1 className="font-bold 2xl:text-6xl text-4xl">WELCOME TO MY FIRST WEBSITE</h1>
          <p className="mt-6 mb-6 text-justify">This is my first website using React and Tailwind CSS. React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React also allows us to create reusable UI components. Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
          <a href="./Myprofile" className="mybtn mx-10">LOGIN</a>
          <a href="./Myprofile" className="mybtn mx-10">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
