import React from "react";
import "../Footer/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'green' }}>
      <div className="content has-text-centered">
        <p>
          <strong>Developed by:</strong>
          <a href="https://github.com/shukri74"><span className="icon"><i className="fab fa-github"></i></span>Shukri</a>,
          <a href="https://github.com/JaneDoe"><span className="icon"><i className="fab fa-github"></i></span>Haroon</a>,
          <a href="https://github.com/MaxDoe"><span className="icon"><i className="fab fa-github"></i></span>Jason</a>, and
          <a href="https://github.com/SaraDoe"><span className="icon"><i className="fab fa-github"></i></span>Eniola</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
