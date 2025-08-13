import React, { useState } from "react";
import styles from "./contactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    console.log(e);
    console.log(name, email, text);
  }

  return (
    <section className={`${styles.contact_section}`}>
      <div className={`${styles.contact_section_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            value={"VIA SUPPORT CHAT"}
            icon={<MdMessage size={"20px"} />}
          />
          <Button value={"VIA CALL"} icon={<MdCall size={"20px"} />} />
        </div>
        <Button
          value={"VIA EMAIL FORM"}
          icon={<MdMessage size={"20px"} />}
          isOutlined={true}
        />
        <form onSubmit={handleSubmit}>
          <div className={`${styles.input_container}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={`${styles.input_container}`}>
            <label htmlFor="name">E-MAIL</label>
            <input type="text" name="name" id="email" />
          </div>
          <div className={`${styles.input_container}`}>
            <label htmlFor="name">TEXT</label>
            <textarea name="name" id="text" rows={5} />
          </div>
          <div style={{display: "flex", justifyContent: "end"}}>
            <Button value={"Submit"} />
          </div>
          {
            name && (
              <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Text: {text}</p>
              </div>
            )
          }
        </form>
      </div>
      <div className={`${styles.contact_img}`}>
        <img src="/images/service_24_7.svg" alt="service image" />
      </div>
    </section>
  );
}

export default ContactForm;
