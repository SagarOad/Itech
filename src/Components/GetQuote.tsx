import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

import celebration from "../party-celebration.json";
import Lottie from "lottie-react";

interface Props {
  Title: string;
  closeModal: any;
}

const GetQuote = ({ closeModal, Title }: Props) => {
  const [contactus_name, setContactus_name] = useState("");
  const [contactus_email, setContactus_email] = useState("");
  const [contactus_phone, setContactus_phone] = useState("");
  const [contactus_message, setContactus_message] = useState("");
  const [div1Shown, setDiv1Shown] = useState(true);
  async function sentForm() {
    if (
      (contactus_name.trim() === "",
      contactus_email.trim() === "",
      contactus_phone.trim() === "",
      contactus_message.trim() === "")
    ) {
      alert("Compelete the form");
    } else {
      console.warn("Hello");
      const item = {
        contactus_email,
        contactus_message,
        contactus_name,
        contactus_phone,
      };
      let result = await fetch("https://fameitech.com/fameapis/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      console.warn("result", result);

      setDiv1Shown(false);
    }
  }

  const autoClose = () => {
    const intervalId = setInterval(function () {
      closeModal(false);
    }, 2000);

    setTimeout(function () {
      clearInterval(intervalId);
    }, 2000);
  };

  const hidePopup = () => {
    setTimeout(autoClose, 2000);
  };

  return (
    <div>
      <section className="modalBackground z-30 backdrop-blur-xl bg-white/30  mx-auto md:px-6 mb-32 text-center">
        {div1Shown ? (
          <div className="div1">
            <div className="modalContainer w-[700px] container mx-auto xl:px-32">
              <div className="contact-modal block sm:grid items-center">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg px-12  md:px-12 ">
                    <div className="flex ">
                      <h2 className="mb-12 py-4 bg-[#f58020] rounded-b-[20px] w-[270px] mx-auto text-white font-[nexa-light] text-[20px] font-bold">
                        {Title}
                      </h2>
                      <button
                        className="close-modal absolute top-0 right-[-10px] sm:right-0 mt-2 opacity-60 w-[80px] mb-0"
                        onClick={() => closeModal(false)}
                      >
                        <MdOutlineCancel className="text-[26px] mx-auto" />
                      </button>
                    </div>

                    <div></div>
                    <form id="MyForm" className="m-0 w-[100%]">
                      <div
                        className="contact-form relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <input
                          onChange={(e) => setContactus_name(e.target.value)}
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                          id="exampleInput90"
                          placeholder="Name"
                          required
                        />
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.8rem] leading-[0.9] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-[#f58020] peer-data-[te-input-state-active]:-translate-y-[2.9rem] peer-data-[te-input-state-active]:scale-[2.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#f58020]">
                          Name
                        </label>
                      </div>
                      <div
                        className="contact-form relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <input
                          onChange={(e) => setContactus_email(e.target.value)}
                          type="email"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                          id="exampleInput91"
                          placeholder="Email address"
                          required
                        />
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.8rem] leading-[0.9] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-[#f58020] peer-data-[te-input-state-active]:-translate-y-[2.9rem] peer-data-[te-input-state-active]:scale-[2.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#f58020]">
                          Email address
                        </label>
                      </div>
                      <div
                        className="contact-form relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <input
                          onChange={(e) => setContactus_phone(e.target.value)}
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                          id="exampleInput91"
                          placeholder="Your Contact"
                          required
                        />
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.8rem] leading-[0.9] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-[#f58020] peer-data-[te-input-state-active]:-translate-y-[2.9rem] peer-data-[te-input-state-active]:scale-[2.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#f58020]">
                          Contact Number
                        </label>
                      </div>
                      <div
                        className="contact-form relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <textarea
                        rows={5}
                          onChange={(e) => setContactus_message(e.target.value)}
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                          id="exampleFormControlTextarea1"
                          placeholder="Your message"
                          required
                        ></textarea>
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.8rem] leading-[0.9] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-[#f58020] peer-data-[te-input-state-active]:-translate-y-[2.9rem] peer-data-[te-input-state-active]:scale-[2.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#f58020]">
                          Message
                        </label>
                      </div>

                      <button
                        // onClick={sentForm}
                        onClick={() => {
                          sentForm();
                          hidePopup();
                        }}
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="contact-btn get-started"
                      >
                        Send
                      </button>

                      {/* <button
                  className="close-modal opacity-60 rounded-b-[0] w-[80px] bg-red-700 mb-0"
                  onClick={() => closeModal(false)}
                >
                  <MdOutlineCancel className="text-[26px] mx-auto" />
                </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="div2 mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold">
              Got it! We'll be in touch soon.
            </h1>
            <Lottie
              className="fixed top-0 w-[800px]"
              animationData={celebration}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default GetQuote;
