const Header = ({
  name = "shubham",
  profile_pic = "https://avatars.dicebear.com/v2/avataaars/1564dc89e0a212d577ae65c0f7e20f2f.svg",
}) => (
  <div className="Header">
    <img className="Header-img" src={profile_pic}></img>
    <h3 className="Header-details">{name}</h3>
  </div>
);

const Messages = () => {
  const data = [
    { text: "Hi", is_user_msg: true, number: 0 },
    { text: "Hello", is_user_msg: false, number: 1 },
    { text: "How are you", is_user_msg: true, number: 2 },
    { text: "fine", is_user_msg: false, number: 3 },
  ];
  return (
    <div className="Messages">
      {data.map((e) => (
        <div className={e.is_user_msg ? "user-msg" : "non-user-msg"} key={e.number}>
          {e.text}
        </div>
      ))}
    </div>
  );
};

const InputBox = () => (
  <div className="InputBox">
    <input className="InputBox-element" />
  </div>
);

const ChatWindow = () => {
  return (
    <div className="ChatWindow">
      <Header />
      <Messages />
      <InputBox />
    </div>
  );
};

export default ChatWindow;
