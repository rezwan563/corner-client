import { BsThreeDots, BsShare, BsChat, BsBookmark, BsFillHeartFill, BsHeart } from "react-icons/bs";

const NewsFeed = () => {
  return (
    <div className="p-2  bg-white rounded-md">
      <div className="flex justify-between">
        <div className="flex items-start gap-2">
          <img
            src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg"
            alt=""
            className="w-9 h-9 rounded-full"
          />
          <div className="">
            <span className="font-bold">Rcyt87</span>
            <p className="text-xs">Dhaka, Bangladesh</p>
          </div>
        </div>
        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>
      <img
        src="https://i.ibb.co/rMGJPmD/maxresdefault.jpg"
        alt=""
        className="py-2 w-fit h-"
      />
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <BsFillHeartFill className="text-2xl" />
          <BsHeart className="text-2xl"/>
          <BsChat className="text-2xl"/>
          <BsShare className="text-2xl"/>
        </div>
        <BsBookmark className="text-2xl" />
      </div>
    </div>
  );
};

export default NewsFeed;
