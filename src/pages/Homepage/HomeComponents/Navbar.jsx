
const Navbar = () => {
    return (
        <div className="flex justify-around items-center bg-white p-2 border-l-r">
            <p className="text-3xl font-bold cursor-pointer">CORNER</p>
           <input type="text" placeholder="Search for People" className="border border-slate-400 rounded-md w-2/6 p-2"></input>
           <img src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg" alt="" className="w-10 h-10 rounded-full" />
        </div>
    );
};

export default Navbar;