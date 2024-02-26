import React from "react";

const ContactModal = ({ closeModal }) => {
  return (
    <div>
      <section className="modalBackground  z-30 backdrop-blur-xl bg-white/30  mx-auto md:px-6 mb-32 text-center">
        <div className="modalContainer w-[50vw] container mx-auto xl:px-32">
          <div className="contact-modal grid items-center">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div className="relative z-[1] block rounded-lg  md:px-12 ">
                <h2 className="mb-12 py-4 text-white font-[nexa-light] text-3xl font-bold">
                  Contact us
                </h2>
                <form className="m-0 w-[100%]">
                  <div
                    className="contact-form relative mb-6"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      for="exampleInput90"
                    >
                      Name
                    </label>
                  </div>
                  <div
                    className="contact-form relative mb-6"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      for="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                  <div
                    className="contact-form relative mb-6"
                    data-te-input-wrapper-init
                  >
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                    <label
                      for="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Message
                    </label>
                  </div>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="contact-btn get-started"
                  >
                    Send
                  </button>
                  <button className="close-modal bg-red-700" onClick={() => closeModal(false)}>Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactModal;
