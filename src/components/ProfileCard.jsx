import avatarImg from "../assets/images/avatar-jessica.jpeg";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="header">
        <div className="user-info">
          <img src={avatarImg} alt="avatar image" className="avatar-img" />
          <h2 className="user-name">Jessica Randall</h2>
          <h3 className="user-location">London,United Kingdom</h3>
          <p className="user-description">
            "Front-end developer and avid reader."
          </p>
        </div>
      </div>
      <div className="body">
        <div className="social-network">
          <button className="social-network__btn" type="button">
            GitHub
          </button>
          <button className="social-network__btn" type="button">
            Frontend Mentor
          </button>
          <button className="social-network__btn" type="button">
            Linkedin
          </button>
          <button className="social-network__btn" type="button">
            Twitter
          </button>
          <button className="social-network__btn" type="button">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
