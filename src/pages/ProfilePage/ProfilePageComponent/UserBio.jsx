import UserTimeline from "./UserTimeline";

const UserBio = () => {
    return (
        <div className="grid grid-cols-3 my-24">
           <div className="max-w-[300px] max-h-96 p-2 rounded-md shadow-md bg-white">
            <p className="text-center font-bold">Bio</p>
            <p className="text-justify">I am ChatGPT, an advanced language model developed by OpenAI. Trained on vast amounts of text data, I specialize in generating human-like responses and providing helpful information across various topics. My purpose is to assist users in engaging conversations and offering valuable insights.</p>
           </div>
           <div className="col-span-2">
            <UserTimeline/>
           </div>
        </div>
    );
};

export default UserBio;