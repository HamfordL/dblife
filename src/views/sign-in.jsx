import React, { useState } from "react";

import Jaco from "../images/jaco.webp";

import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    let obj = {
      email: email,
      password: password,
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
        backgroundImage: `url(${Jaco})`,
        height: "100vh",
        backgroundSize: "cover",
        justifyContent: "absolute",
        backgroundRepeat: "no-repeat",
        border: "1px solid red",
      }}
    >
      <div className="form-body">
        <div className="username" style={{ display: "center" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="email">
            <br />
            <label
              className="form__label"
              for="email"
              style={{ fontWeight: "bold", fontSize: 30, color: "green" }}
            >
              Email{" : "}
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
              style={{ fontWeight: "bold", fontSize: 30, color: "green" }}
            >
              Password{" : "}
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
          <div class="footer">
            <br />
            <button
              onClick={() => handleSubmit()}
              type="submit"
              class="btn"
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "green",
              }}
            >
              Sign-In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
