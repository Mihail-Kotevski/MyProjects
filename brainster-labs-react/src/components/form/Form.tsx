import React from "react";
import "../form/form.css";

export default function Form() {
  return (
    <div className="form">
      <h1>Hire Students</h1>
      <form>
        <div className="left">
          <label>Full name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Student Type</label>
          <input type="text" />
        </div>
        <div className="right">
          <label>Company name</label>
          <input type="text" />
          <label>Phone number</label>
          <input type="text" />
          <label className="button-label">/</label>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
