import { useSelector, useDispatch } from "react-redux";
import ChatWindow from "./chatWindow";
import EmptyScreen from "./emptyScreen";

const Main = () => {
  const activeUser = useSelector((s) => s.activeUserId);
  return <div className="Main">{activeUser ? <ChatWindow /> : <EmptyScreen />}</div>;
};

export default Main;
