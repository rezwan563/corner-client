import { LuEdit } from "react-icons/lu";
const ChatsPanel = () => {
  return (
    <div className="w-1/2  p-2 me-auto rounded-md bg-white sticky top-2">
      <div className="flex items-center justify-between pb-5">
        <p className="font-bold">Messages</p>
        <LuEdit className="text-xl cursor-pointer" />
      </div>
      <div className="pb-2 max-h-96 overflow-y-auto">
        <div className="flex items-start gap-2 p-2 border-b-2 hover:bg-slate-100 cursor-pointer">
          <img
            src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg"
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <span className="font-bold">Arjun Bosle</span>
            <p className="text-sm">Latest message</p>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default ChatsPanel;
