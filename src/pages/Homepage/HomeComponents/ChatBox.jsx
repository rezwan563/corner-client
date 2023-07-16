const ChatBox = () => {
  return (
    <div className="max-w-lg bg-white p-2 rounded-t-xl h-[300px] ">   
    <div className="">
      <input type="search" name="" id="" className="border-b-2 pl-2 outline-none" placeholder="To: Type name" />
     <div className="fixed bottom-0 ">
     <textarea name="" id="" cols="30" rows="2" className="border-2 outline-slate-400 pl-2 block"></textarea>
      <button className="p-2 bg-red-400 font-bold text-white rounded-lg">
        Send
      </button>
     </div>
    </div>
    </div>
  );
};

export default ChatBox;
