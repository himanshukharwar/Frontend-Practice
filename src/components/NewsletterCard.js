const containerStyle = {
  background: "#FFFFFF",
  padding: "3rem",
  borderRadius: "10px",
  fontFamily: "sans-serif",
  textAlign: "center",
  boxShadow: "5px 5px #ffffff7e",
};

const emailContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function NewsletterCard() {
  return (
    <div style={containerStyle}>
      <h1>Level Up Your Frontend Skills</h1>
      <p>
        Sign up for free newsletter to receive weekly coding challenges that
        will help you improve your frontend development skills.
      </p>
      <EmailContainer />
      <input type="checkbox" />
      <label>
        By checking this box, you agree to receive our weekly newsletter
        containing coding challenges, tips, and other related content. You may
        unsubscribe from the newsletter at any time.
      </label>
    </div>
  );
}

function EmailContainer() {
  return (
    <div style={emailContainerStyle}>
      <div>EMAIL</div>
      <button>Subscribe</button>
    </div>
  );
}

export default NewsletterCard;
