import React from "react";

function Contact() {
  return (
    <div>
      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="mt-20 p-6 border bg-white border-gray-300 sm:rounded-md">
          <form>
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                class="mycontactform"
                placeholder="Bhanu Rekha"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                class="mycontactform"
                placeholder="mymail@example.com"
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                class="mycontactform"
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className="text-center">
              <a
                href="mailto:sivanagarajuodugu111@gmail.com"
                className="mybtn px-10"
              >
                CONTACT US
              </a>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
