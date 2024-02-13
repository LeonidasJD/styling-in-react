import { useState } from "react";
import { styled } from "styled-components"; // importovanje styled components paketa
import Label from "../css/Label.jsx";
import Input from "../css/Input.jsx";
import Button from "../css/Button.jsx"; //importovali smo styled komponente iz externih fajlova i primenili u ovoj komponenti

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`; //kreiranje styled komponente. ukoliko zelimo da stilizujemo div pisaceo styled.div, ako zelimo paragraf npr pisemo styled.p itd...

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlWrapper>
        <p>
          <Label className={emailNotValid ? "invalid" : ""}>Email</Label>
          <Input
            type="email"
            className={emailNotValid ? "invalid" : ""}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label className={passwordNotValid ? "invalid" : ""}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : ""}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlWrapper>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
        <Button className="contact">Test</Button>
      </div>
    </div>
  );
}
