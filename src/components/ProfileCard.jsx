import avatarImg from "../assets/images/avatar-jessica.jpeg";

function ProfileCard({ socialList }) {
  return (
    <div className="profile-card">
      <div className="header">
        <UserInfo />
      </div>
      <div className="body">
        <SocialNetworkBtn socialList={socialList} />
      </div>
    </div>
  );
}

export default ProfileCard;

function SocialNetworkBtn({ socialList }) {
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
