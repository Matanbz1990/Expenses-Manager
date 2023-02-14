import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="fcontainer">
      <p>©Matan Ben Zahav {year} built using React</p>
    </div>
  );
};
export default Footer;
