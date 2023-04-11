const EmptyScreen = () => {
  const user = {
    status: "lsdjflsdjfklsj",
    name: "abhilash",
    profile_pic: "https://avatars.dicebear.com/v2/avataaars/1827176651240f4d534fa1079bb3a40a.svg",
  };
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
