import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/mwlite/in/piyushjoshi-mh",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/piyushL337/",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
    
    {
      SocialMediaName: "Gmail",
      ProfileLink: "mailto: piyushjoshi2378@gmail.com",
      fontAwesomeIconName: "far fa-envelope",
      OnMouseOverColor: "#D44638",
      _comment: "OnMouseOverColor for yahoo mail: #720e9e",
    },
    {
      SocialMediaName: "WhatsApp",
      ProfileLink: "https://wa.me/7020365404",
      fontAwesomeIconName: "fab fa-whatsapp",
      OnMouseOverColor: "#25d366",
    },
    {
      SocialMediaName: "Telegram",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-telegram",
      OnMouseOverColor: "#0088cc",
    },
    {
      SocialMediaName: "Twitter",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    {
      SocialMediaName: "Facebook",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-facebook-f",
      OnMouseOverColor: "#1877f2",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created with care by{" "}
          <a
            href="https://github.com/piyushL337/LifeSaver/tree/main/Covid-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Nandini, Piyush, Pratik
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className="list" style={{ listStyleType: "none" }}>
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: "inline-block", marginRight: "17px" }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Data provided 💖 by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
