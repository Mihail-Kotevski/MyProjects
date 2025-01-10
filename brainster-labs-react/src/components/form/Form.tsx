import React from "react";
import "../form/form.css";

export default function Form() {
  return (
    <div className="form">
      <h1>Hire Students</h1>
      <form>
        <div className="left">
          <label>Full name</label>
          <input type="text" placeholder="Enter your full name!" />
          <label>Email</label>
          <input type="text" placeholder="Enter your email adress!" />
          <label>Student Type</label>
          <input type="text" placeholder="Enter student type!" />
        </div>
        <div className="right">
          <label>Company name</label>
          <input type="text" placeholder="Enter company name!" />
          <label>Phone number</label>
          <input type="text" placeholder="Enter your phone number!" />
          <label className="button-label">/</label>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
