import ChatBox from "./ChatBox";
import PostCard from "./PostCard";

const NewsFeed = () => {
 
  return (
    <div className="relative">
     <PostCard/>
     <div className="">
      <ChatBox/>
     </div>
    </div>
  );
};

export default NewsFeed;
