
const UserCard = () => {
    return (
        <div className="bg-white pb-2">
            <img src="https://i.ibb.co/qxxYTmG/landscape-photography-blog-main-artisanhd.jpg" className="w-full h-96 " alt="cover_photo" />
          <div className="relative">
          <img src="
            https://i.ibb.co/c6CMxHv/portrait-photography-neutral-background-1.jpg" alt="profile_photo" className="w-28 h-28 rounded-full border-4 border-white absolute top-[-60px] left-5" />
          </div>
          <div className="flex justify-end">
            <button className="inline-block bg-red-500 p-2 ml-2 mt-2 rounded-md text-white font-bold">Connet Request</button>
            <button className="inline-block bg-red-500 p-2 ml-2 mt-2 rounded-md text-white font-bold">Send Message</button>
           
           
           
           
            
          </div>
        </div>
    );
};

export default UserCard;