import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
const Header = ({ name, profile_pic, typing }) => (
  <div className="Header">
    <img className="Header-img" src={profile_pic}></img>
    <h3 className="Header-details">{name}</h3>
    <div className={typing && "typing"}></div>
  </div>
);

const Messages = ({ messages }) => {
  const myref = useRef(null);
  const data = Object.values(messages);
  console.log(myref);
  useEffect(() => {
    myref.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="Messages">
      {data.map((e) => (
        <div className={e.is_user_msg ? "user-msg" : "non-user-msg"} key={e.number}>
          {e.text}
        </div>
      ))}
      <div ref={myref} />
    </div>
  );
};

const InputBox = ({ activeUserId }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="InputBox"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "SET_MESSAGE", payload: { activeUserId, text: input } });
        dispatch({ type: "STOP_TYPING" });
        setInput("");
      }}
    >
      <input
        className="InputBox-element"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          dispatch({ type: "SET_TYPING" });
        }}
      />
    </form>
  );
};

const ChatWindow = () => {
  const typing = useSelector((s) => s.typing);
  const activeId = useSelector((s) => s.activeUserId);
  const { name, profile_pic } = useSelector((s) => s.contacts[activeId]);
  const messages = useSelector((s) => s.messages[activeId]);

  return (
    <div className="ChatWindow">
      <Header name={name} profile_pic={profile_pic} typing={typing} />
      <Messages messages={messages} />
      <InputBox activeUserId={activeId} />
    </div>
  );
};

export default ChatWindow;
