import ChatWindow from "./chatWindow";
import EmptyScreen from "./emptyScreen";
const Main = () => {
  const activeUser = true;
  return <div className="Main">{activeUser ? <ChatWindow /> : <EmptyScreen />}</div>;
};

export default Main;
