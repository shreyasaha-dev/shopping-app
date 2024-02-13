import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import "../style/Footer.css";
import { FaCcPaypal } from "react-icons/fa6";
import moment from "moment/moment";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-icons">
        <FaCcVisa className="icon" />
        <FaCcPaypal className="icon" />
        <FaCcMastercard className="icon" />
        <FaCcDiscover className="icon" />
      </div>
      <p>
        Copyright ©{moment().format("YYYY")} All rights reserved | This website
        is made by Shreya
      </p>
    </div>
  );
};
export default Footer;
