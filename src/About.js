import React from "react";

function About() {
  return (
    <div className=" text-center">
      <h1 className="2xl:mt-32 mt-12 2xl:mb-8 mb-5 uppercase 2xl:text-4xl text-3xl font-semibold text-white">
        What are ReactJS and TailwindCSS?
      </h1>
      <div className="flex flex-col space-y-3 justify-center items-center">
        <div class="block 2xl:p-6 p-4 w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold text-mycolor">ReactJS</h5>
          <p class="text-gray-900 text-justify">
            React is a JavaScript-based UI development library. Facebook and an
            open-source developer community run it. Although React is a library
            rather than a language, it is widely used in web development.
            {/* <br /> */}
            <br />
            1). Easy creation of dynamic applications.
            <br />
            2). Improved performance.
            {/* <br />
            3). Reusable components.
            <br />
            4). Dedicated tools for easy debugging. */}
          </p>
        </div>
        <div class="block 2xl:p-6 p-4 w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold text-mycolor ">TailwindCSS</h5>
          <p class="text-gray-900 text-justify">
            Tailwind is a utility-first CSS framework. In contrast to other CSS
            frameworks like Bootstrap or Materialize CSS it doesn’t come with
            predefined components. <span className="hidden 2xl:block">Instead Tailwind CSS operates on a lower
            level and provides you with a set of CSS helper classes.</span>
            {/* <br /> */}
            <br />
            1). Minimum lines of Code in CSS file.
            <br />
            2). We can customize the designs to make the components.
            {/* <br />
            3). Makes the website responsive.
            <br />
            4). Makes the changes in the desired manner. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
