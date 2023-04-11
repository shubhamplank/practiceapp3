import ChatWindow from "./chatWindow";
import EmptyScreen from "./emptyScreen";
const Main = () => {
  const activeUser = false;
  return <div className="Main">{activeUser ? <ChatWindow /> : <EmptyScreen />}</div>;
};

export default Main;
