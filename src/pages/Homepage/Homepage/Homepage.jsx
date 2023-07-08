import ChatsPanel from "../HomeComponents/ChatsPanel";
import Navbar from "../HomeComponents/Navbar";
import NewsFeed from "../HomeComponents/NewsFeed";
import NotificationPanel from "../HomeComponents/NotificationPanel";

const Homepage = () => {
  return (
    <div className=" grid grid-cols-3 gap-10">
      <div className="col-span-3">
        <Navbar />
      </div>
      <div className="bg-green-500">
        <NotificationPanel />
      </div>
      <div className="bg-blue-400">
        <NewsFeed />
      </div>
      <div className="bg-yellow-200">
        <ChatsPanel />
      </div>
    </div>
  );
};

export default Homepage;
