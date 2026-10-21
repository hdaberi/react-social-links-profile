import ProfileCard from "./components/ProfileCard";
import "./App.css";
const socialList = [
  { id: 1, socialName: "GitHub" },
  { id: 2, socialName: "Frontend Mentor" },
  { id: 3, socialName: "Linkedin" },
  { id: 4, socialName: "Twitter" },
  { id: 5, socialName: "Instagram" },
];
function App() {
  return (
    <div className="container">
      <ProfileCard socialList={socialList} />
    </div>
  );
}

export default App;
