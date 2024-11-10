import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="social-links">
          <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
          <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
