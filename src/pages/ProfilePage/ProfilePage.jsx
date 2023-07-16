import "./ProfilePage.css";
import UserBio from "./ProfilePageComponent/UserBio";
import UserCard from "./ProfilePageComponent/UserCard";
const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto  mt-8 ">
      <div>
        <UserCard />
      </div>
      <div >
        <UserBio />
      </div>
    </div>
  );
};

export default ProfilePage;
