
const NotificationPanel = () => {
    return (
        <>
            <div className="w-1/2  p-2 ms-auto rounded-md bg-white">
                <p className="font-bold pb-5">Notifications</p>
                <div className="flex items-start gap-2">
                    <img src="https://i.ibb.co/64jgrXk/istockphoto-1335941248-612x612.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
                    <div>
                    <span className="font-bold">Arjun Bosle</span>
                    <p className="text-sm">Notification</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationPanel;