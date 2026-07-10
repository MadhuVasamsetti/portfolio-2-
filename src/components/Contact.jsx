import "../styles/contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container contact-container">

        <div className="contact-left">

          <p className="section-tag">
            CONTACT
          </p>

          <h2 className="section-title">
            Let's Build Something
            <span> Amazing</span>
          </h2>

          <p className="contact-description">
            I'm currently looking for internship and full-time
            opportunities. If you have a project or just want to say
            hello, feel free to contact me.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>vasamsettimadhukar@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 86880 64797</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;