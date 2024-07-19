import React, { useRef } from "react";
import styles from "./contact_page.module.css";
const Contacts_page = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formValue = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    };

    const response = await fetch(
      "https://react-http-4f649-default-rtdb.firebaseio.com/cotacts.json",
      {
        method: "POST",
        body: JSON.stringify(formValue),
      }
    );

    const data = await response.json;
    console.log(data);
  };

  return (
    <div className={styles.mainDiv}>
      <form onSubmit={onSubmitHandler}>
        <h4>Contact Form</h4>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={name} />
        </div>

        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={email} />
        </div>

        <div className={styles.control}>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" ref={phone} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts_page;
