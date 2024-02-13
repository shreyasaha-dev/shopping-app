import "../style/ContactDetails.css";
const ContactDetails = ({ Icon, title, description }) => {
  return (
    <div className="contact-details">
      <span>{Icon}</span>
      <div className="contact-details-right">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ContactDetails;
