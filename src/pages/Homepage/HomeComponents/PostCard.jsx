import { useState } from "react";
import {
  BsThreeDots,
  BsShare,
  BsChat,
  BsBookmark,
  BsFillHeartFill,
  BsHeart,
} from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const PostCard = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [isLoved, setIsLoved] = useState(false);
    return (
        <div className="mb-4 p-2  bg-white rounded-md ">
        <div className="flex justify-between ">
          <div className="flex items-start gap-2 cursor-pointer">
            <Link to={`/profile/293498`}> 
              <img
                src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg"
                alt=""
                className="w-9 h-9 rounded-full"
              />
            </Link>

            <div className="">
              <span className="font-bold">Rcyt87</span>
              <p className="text-xs">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="relative">
            <BsThreeDots
              onClick={() => setShowDetails(!showDetails)}
              className="text-2xl cursor-pointer"
            />
            <div
              className={`w-36 absolute top-10 right-2 bg-white p-2 border rounded-md border-slate-300 z-10 ${
                showDetails ? "" : "hidden"
              }`}
            >
              <ul>
                <div className="flex justify-between">
                  <li className="pb-2 cursor-pointer ">Report </li>

                  <IoIosCloseCircleOutline
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-3xl relative top-[-10px] right-[-10px] cursor-pointer"
                  />
                </div>

                <li className="pt-2 border-t-2 cursor-pointer ">
                  Not Interested
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/rMGJPmD/maxresdefault.jpg"
          alt=""
          className="py-2 max-w-full h-96"
        />
        <div className="flex justify-between ">
          <div className="flex gap-4">
            <BsFillHeartFill
              onClick={() => setIsLoved(!isLoved)}
              className={`text-2xl cursor-pointer text-red-700 ${
                isLoved ? "" : "hidden"
              }`}
            />
            <BsHeart
              onClick={() => setIsLoved(!isLoved)}
              className={`text-2xl cursor-pointer ${isLoved ? "hidden" : ""}`}
            />
            <BsChat className="text-2xl cursor-pointer" />
            <BsShare className="text-2xl cursor-pointer" />
          </div>
          <BsBookmark className="text-2xl cursor-pointer" />
        </div>
      </div>
    );
};

export default PostCard;