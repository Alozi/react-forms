import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  console.log(didEdit.email);

  const emailIsValid = didEdit.email && !enteredValues.email.includes("@");

  // console.log(emailIsValid);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(
    //   "User email: " + enteredEmail + ", password: " + enteredPassword
    // );

    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputChange(identifier, value) {
    // console.log(value);
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });

    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: false,
      };
    });
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: true,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
