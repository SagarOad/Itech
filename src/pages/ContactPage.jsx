import React from "react";
import { IoIosContacts } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear previous validation errors when user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.contact.trim()) {
      errors.contact = "Contact is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("https://backend.famewheels.com/contact-us", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setSuccessMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
          });
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

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
          <form
            className="mb-12 mt-0 w-full border-2 py-8 shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6"
            onSubmit={handleSubmit}
          >
            {isSubmitted && <p className="text-green-500 mb-4 font-bold text-[24px]">{successMessage}</p>}
            <div className="mb-3 w-full">
              <label
                htmlFor="exampleInputName"
                className="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
              >
                Name
              </label>
              <input
                type="text"
                required
                className="px-2 py-3 w-full outline-none rounded-md"
                id="exampleInputName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 w-full">
              <label
                htmlFor="exampleInputEmail"
                className="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
              >
                Email
              </label>
              <input
                type="email"
                required
                className="px-2 py-3 border w-full outline-none rounded-md"
                id="exampleInputEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 w-full">
              <label
                htmlFor="exampleInputContact"
                className="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
              >
                Contact
              </label>
              <input
                type="text"
                required
                className="px-2 py-3 border w-full outline-none rounded-md"
                id="exampleInputContact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 w-full">
              <label
                htmlFor="exampleInputMessage"
                className="block font-medium text-[18px] font-[poppins] mb-[12px] text-black"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                id="exampleInputMessage"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>

            <button
              type="submit"
              className="mb-6 inline-block w-full text-[18px] rounded font-[poppins] bg-[#e4563aef] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#e4563a]"
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
                    <p class="text-neutral-500 ">info@fameitech.net</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
