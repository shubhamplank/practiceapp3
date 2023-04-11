import { useSelector, useDispatch } from "react-redux";
const Sidebar = () => {
  const data = Object.values(useSelector((s) => s.contacts));
  const dispatch = useDispatch();
  return (
    <div className="Sidebar">
      {data.map((e) => {
        return (
          <div className="User" key={e.name} onClick={() => dispatch({ type: "SET_ACTIVE_USER", payload: e.user_id })}>
            <img className="User-img" src={e.profile_pic}></img>
            <div className="User-details">
              <h3>{e.name}</h3>
              <p>{e.status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
