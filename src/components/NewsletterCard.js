const containerStyle = {
  background: "#FFFFFF",
  padding: "3rem 5rem",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "5px 5px #ffffff7e",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const headingStyle = {
  color: "#111827",
  fontSize: "1.7rem",
};

const pStyle = {
  color: "#111827",
  fontSize: "1.1rem",
  width: "33rem",
  marginBottom: "1rem",
};

const emailContainerStyle = {
  margin: "4px 2px",
};

const emailInputStyle = {
  width: "22rem",
  padding: "1rem",
  backgroundColor: "#E6E9FB",
  borderRadius: "5px",
  boxSizing: "border-box",
  border: "1px solid grey",
  marginRight: "1rem",
};

const emailButtonStyle = {
  backgroundColor: "#111827",
  borderRadius: "5px",
  border: "none",
  color: "white",
  padding: "1rem 2rem",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "1rem",
  cursor: "pointer",
};

const center = {
  display: "flex",
  justifyContent: "center",
};

const checkboxStyle = {
  marginRight: ".5rem",
  border: "1px solid #111827",
  cursor:"pointer",
};

const lableStyle = {
  fontSize: ".6rem",
  color: "#2f2f2f",
  width: "30rem",
  textAlign: "start",
  display: "block",
};

function NewsletterCard() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Level Up Your Frontend Skills</h1>
      <p style={pStyle}>
        Sign up for free newsletter to receive weekly coding challenges that
        will help you improve your frontend development skills.
      </p>
      <EmailContainer />
      <div style={center}>
        <input type="checkbox" style={checkboxStyle} />
        <label style={lableStyle}>
          By checking this box, you agree to receive our weekly newsletter
          containing coding challenges, tips, and other related content. You may
          unsubscribe from the newsletter at any time.
        </label>
      </div>
    </div>
  );
}

function EmailContainer() {
  return (
    <div style={emailContainerStyle}>
      <input
        type="email"
        style={emailInputStyle}
        placeholder="Enter your Email address"
      ></input>
      <button style={emailButtonStyle}>Subscribe</button>
    </div>
  );
}

export default NewsletterCard;
