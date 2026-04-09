import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/feedbackform";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [contactSuccess, setContactSuccess] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [suggestionSuccess, setSuggestionSuccess] = useState(false);

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitContact = () => {
    if (contact.name === "" || contact.email === "" || contact.message === "") {
      alert("Fill required fields");
      return;
    }
    setContactSuccess(true);
  };

  const submitSuggestion = () => {
    if (suggestion === "") return;
    setSuggestionSuccess(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Feedback & Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/"><button className="btn">Feedback</button></Link>
        <Link to="/contact"><button className="btn">Contact</button></Link>
        <Link to="/suggestion"><button className="btn">Suggestions</button></Link>
      </div>

      <Routes>
        <Route path="/" element={<FeedbackForm />} />

        <Route
          path="/contact"
          element={
            <div className="section">
              <h2>Contact Us</h2>

              <div className="form-group">
                <label>Name *</label>
                <input name="name" placeholder="Enter your name" onChange={handleContactChange} />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input name="email" placeholder="Enter your email" onChange={handleContactChange} />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input name="phone" placeholder="Enter your phone number" onChange={handleContactChange} />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" placeholder="How can we help you?" onChange={handleContactChange}></textarea>
              </div>

              <button className="btn" onClick={submitContact}>Send Message</button>

              {contactSuccess && (
                <div className="success-message" style={{display:"block"}}>
                  Message sent successfully
                </div>
              )}
            </div>
          }
        />

        <Route
          path="/suggestion"
          element={
            <div className="section">
              <h2>Suggestions</h2>

              <div className="form-group">
                <textarea
                  placeholder="Suggest new features, countries to cover, or improvements..."
                  onChange={(e) => setSuggestion(e.target.value)}
                ></textarea>
              </div>

              <button className="btn" onClick={submitSuggestion}>
                Submit Suggestions
              </button>

              {suggestionSuccess && (
                <div className="success-message" style={{display:"block"}}>
                  Thank you for your suggestion
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;