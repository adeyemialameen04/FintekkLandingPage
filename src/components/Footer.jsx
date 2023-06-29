const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="container footer__container">
        <div className="left__footer">
          <div>
            <h1 className="mini-blue-header">Fintekk</h1>
            <p className="p-gray">Fintekk is the bank that does it all. Manage everything directly and easily with fintekk.</p>
          </div>
          <div className="footer__grid">
            <article>
              <h2 className="footer-h2-blue">Company</h2>
              <a href="#" className="footer-p-blue footer__link">Careers</a>
              <a href="#" className="footer-p-blue footer__link">About Us</a>
              <a href="#" className="footer-p-blue footer__link">Privacy</a>
              <a href="#" className="footer-p-blue footer__link">Terms</a>
            </article>
            <article>
              <h2 className="footer-h2-blue">Services</h2>
              <a href="#" className="footer-p-blue footer__link">Payments</a>
              <a href="#" className="footer-p-blue footer__link">Investments</a>
              <a href="#" className="footer-p-blue footer__link">Savings Plans</a>
            </article>
            <article>
              <h2 className="footer-h2-blue">Resources</h2>
              <a href="#" className="footer-p-blue footer__link">Media</a>
              <a href="#" className="footer-p-blue footer__link">FAQs</a>
              <a href="#" className="footer-p-blue footer__link">Help Center</a>
              <a href="#" className="footer-p-blue footer__link">Security</a>
            </article>
            <article>
              <h2 className="footer-h2-blue">Contact Us</h2>
              <a href="#" className="footer-p-blue footer__link">wwww.fintekk.com</a>
            </article>
          </div>
        </div>
        <div className="right__footer">
          <div>
            <p className="footer-p-blue">Developed by: <span>DOYIN~TECH</span></p>
            <p className="footer-p-blue">&copy; {date} No Rights Reserved</p>
          </div>
          <div className="footer-p-blue">Terms and conditions, Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;