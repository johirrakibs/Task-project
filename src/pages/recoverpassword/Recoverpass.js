import React, { useState } from "react";
import './recoverpassStyle.css';

const Recoverpass = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);
    if (user) {
      // send password reset email to the user
      setSuccess(
        `A password reset email has been sent to ${email}. Please check your inbox.`
      );
    } else {
      setError("Email not found. Please try again with a different email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-div">
        <div className="sub-main-div">
          <div className="input-main-div">

            <h1 className="header">Recover Password</h1>
            <p className="title">Please enter your email and we will send you a password reset link.</p>


            <div className="input-div">
              <input
                type="email" className="input-filed"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btttn-submit">Reset Password </button>
            <a href="#" className="cancel">Cancel</a>
          </div>
        </div>
      </div>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Recoverpass;