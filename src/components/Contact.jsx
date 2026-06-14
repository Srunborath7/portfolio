import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaPaperPlane
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      form.current.reset();

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting me. I will reply soon."
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Unable to send your message."
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's Work Together</h3>

            <p>
              Feel free to contact me for freelance projects,
              internships, collaborations, or software development opportunities.
            </p>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+855 97 424 2291</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>srunborath7@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Phnom Penh, Cambodia</span>
            </div>

            <div className="contact-social">

              <a
                href="https://github.com/Srunborath7"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram />
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              <FaPaperPlane />

              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}