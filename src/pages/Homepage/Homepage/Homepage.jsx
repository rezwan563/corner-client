import ChatsPanel from "../HomeComponents/ChatsPanel";
import Navbar from "../HomeComponents/Navbar";
import NewsFeed from "../HomeComponents/NewsFeed";
import NotificationPanel from "../HomeComponents/NotificationPanel";

const Homepage = () => {
  return (
    <div className=" grid grid-cols-3 gap-8 ">
      <div className="col-span-3">
        <Navbar />
      </div>
      <div className="">
        <NotificationPanel />
      </div>
      <div className="">
        <NewsFeed />
      </div>
      <div className="">
        <ChatsPanel />
      </div>
     
    </div>
  );
};

export default Homepage;
