import React, { useState } from "react";

import RegistrationImage from "../images/gokuvsvegeta.avif";

import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  return (
    <div
      className="form"
      style={{
        backgroundImage: `url(${RegistrationImage})`,
        height: "100vh",
        backgroundSize: "cover",
        justifyContent: "absolute",
        backgroundRepeat: "no-repeat",
        border: "1px solid red",
      }}
    >
      <div className="form-body">
        <div className="username">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <label
            className="form__label"
            for="firstName"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <br />
          <label
            className="form__label"
            for="lastName"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <br />
          <label
            className="form__label"
            for="email"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <br />
          <label
            className="form__label"
            for="password"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <br />
          <label
            className="form__label"
            for="confirmPassword"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <br />
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn"
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
