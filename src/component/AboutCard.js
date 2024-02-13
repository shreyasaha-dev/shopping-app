import "../style/AboutCard.css";
const AboutCard = ({ title }) => {
  return (
    <div className="about-card-details">
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consequat consequat enim, non auctor massa ultrices non. Morbi sed odio
        massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Maecenas gravida justo eu arcu egestas
        convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
        Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse
        potenti. Proin ut est diam. Donec condimentum euismod tortor, eget
        facilisis diam faucibus et. Morbi a tempor elit.
      </p>
    </div>
  );
};
export default AboutCard;
