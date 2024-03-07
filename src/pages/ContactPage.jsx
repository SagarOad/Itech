import React from "react";
import { IoIosContacts } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div id="contact-us" class="bg-[#F8F6F2] my-12 px-2 md:px-4">
      <section class="container mx-auto mb-24">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="services2-heading mix-blend-multiply mb-12 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center md:text-center">
              Contact Us
            </h2>
          </div>
        </div>

        <div class="flex flex-wrap">
          <form class="mb-12 mt-0 w-full border-2 py-8 shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
            <div class="mb-3 w-full">
              <label
                class="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                class="px-2 py-3 border-4	 border-black w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder=""
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                class="px-2 py-3 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder=""
              />
            </div>
            <div class="mb-3 w-full">
              <label
                class="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
                htmlFor="exampleInput90"
              >
                Contact
              </label>
              <input
                type="contact"
                class="px-2 py-3 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder=""
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                class="px-2 py-2 border rounded-[5px] w-full outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="button"
              class="mb-6 inline-block w-full text-[18px] rounded font-[poppins] bg-[#e4563aef] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#e4563a]"
            >
              Send
            </button>
          </form>

          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
            <div class="">
              <div class="mb-6 w-full shrink-0 grow-0 basis-auto md:w-12/12 md:px-3 lg:px-8">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 py-2  text-[#f58020]">
                      <IoIosContacts className=" text-[#f58020] text-[60px]" />
                    </div>
                  </div>
                  <div class="ml-4 grow">
                    <p class="mb-2 font-medium font-[poppins] text-[22px]">
                      Customer Support
                    </p>
                    <p class="text-neutral-500 ">info@fameitech.new</p>
                    <p class="text-neutral-500 ">(302) 501-7152</p>
                    <p class="text-neutral-500 ">
                      8 The Green #14675; Dover, DE 19901
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <iframe
                  width="100%"
                  height="350"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dover,%20DE%2019901+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
              </div>
              {/* <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-medium font-[poppins] text-[20px]">Bug report</p>
                    <p class="text-neutral-500 font-[poppins] text-[16px] ">bugs@example.com</p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
