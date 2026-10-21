import avatarImg from "../assets/images/avatar-jessica.jpeg";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="header">
        <div className="user-info">
          <img src={avatarImg} alt="avatar image" className="avatar-img" />
          <h2 className="user-name">Jessica Randall</h2>
          <h3>London,United Kingdom</h3>
          <p>"Front-end developer and avid reader."</p>
        </div>
      </div>
      <div className="body">
        <ul className="social-network">
          <li className="social-network__item">GitHub</li>
          <li className="social-network__item">Frontend Mentor</li>
          <li className="social-network__item">Linkedin</li>
          <li className="social-network__item">Twitter</li>
          <li className="social-network__item">Instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
