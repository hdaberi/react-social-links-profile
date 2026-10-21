import avatarImg from "../assets/images/avatar-jessica.jpeg";
const socialList = [
  { id: 1, socialName: "GitHub" },
  { id: 2, socialName: "Frontend Mentor" },
  { id: 3, socialName: "Linkedin" },
  { id: 4, socialName: "Twitter" },
  { id: 5, socialName: "Instagram" },
];
function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="header">
        <UserInfo />
      </div>
      <div className="body">
        <SocialNetworkBtn />
      </div>
    </div>
  );
}

export default ProfileCard;

function SocialNetworkBtn() {
  return (
    <div className="social-network">
      {socialList.map((item) => {
        return (
          <button key={item.id} className="social-network__btn" type="button">
            {item.socialName}
          </button>
        );
      })}
    </div>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <img src={avatarImg} alt="avatar image" className="avatar-img" />
      <h2 className="user-name">Jessica Randall</h2>
      <h3 className="user-location">London,United Kingdom</h3>
      <p className="user-description">"Front-end developer and avid reader."</p>
    </div>
  );
}
