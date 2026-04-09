import React from "react";

class FeedbackForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      name: "",
      email: "",
      phone: "",
      comments: "",
      success: false
    };
  }

  setRating = (value) => {
    this.setState({ rating: value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFeedback = () => {
    const { rating, name, email, phone, comments } = this.state;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }

    if (name === "" || !nameRegex.test(name)) {
      alert("Enter valid name.");
      return;
    }

    if (email === "" || !emailRegex.test(email)) {
      alert("Enter valid email.");
      return;
    }

    if (phone !== "" && !phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (comments === "") {
      alert("Enter feedback.");
      return;
    }

    this.setState({ success: true });
  };

  render() {
    return (
      <div className="section">
        <h2>Course Feedback</h2>

        <div className="form-group">
          <label>Rate Your Experience</label>
          <div className="rating-container">
            {[1,2,3,4,5].map((num) => (
              <span
                key={num}
                className={`star ${this.state.rating >= num ? "active" : ""}`}
                onClick={() => this.setRating(num)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Name *</label>
          <input
            name="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            name="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            placeholder="Enter your phone number"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Feedback *</label>
          <textarea
            name="comments"
            placeholder="Share your thoughts about the course..."
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button className="btn" onClick={this.submitFeedback}>
          Submit Feedback
        </button>

        {this.state.success && (
          <div className="success-message" style={{display:"block"}}>
            Thank you for your feedback!
          </div>
        )}
      </div>
    );
  }
}

export default FeedbackForm;