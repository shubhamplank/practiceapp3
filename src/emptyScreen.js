import { useSelector, useDispatch } from "react-redux";
const EmptyScreen = () => {
  const user = useSelector((s) => s.user);
  return (
    <div className="EmptyScreen">
      <h1 className="EmptyScreen-details">{user.name}</h1>
      <img className="EmptyScreen-img" src={user.profile_pic}></img>
      <p> Status: {user.status}</p>
      <button className="EmptyScreen-btn"> Start conversation</button>
      <p>Search for someone to start chatting with or go to Contacts to see who is available</p>
    </div>
  );
};

export default EmptyScreen;
