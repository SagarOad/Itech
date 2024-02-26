import React from "react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Contact
      </button>
      {openModal && <ContactModal closeModal={setOpenModal} />}
    </div>
  );
};

export default Contact;
