import React from "react";

function Form() {
  return (
    <div>
      <div className="pt-10">
        <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
          <div class="h-20 bg-mycolor">
            <div className="pt-7 text-3xl text-center text-white font-bold">
              Login Here!
            </div>
          </div>
          <div class="px-10 pt-4 pb-8">
            <form class="mt-10" action="#">
              <div class="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-mycolor"
                  placeholder="john@doe.com"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div class="mt-10 relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-mycolor"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              <button
                type="sumbit"
                value="Sign in"
                class="mybtn mt-20 px-4 py-2 w-full"
              >
                Sign in
              </button>
            </form>
            <a
              href="#"
              class="mt-4 block text-sm text-center font-medium text-mycolor hover:underline focus:outline-none focus:ring-2 focus:ring-mycolor"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
