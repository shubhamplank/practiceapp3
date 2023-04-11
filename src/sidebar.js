const Sidebar = () => {
  const data = [
    {
      name: "shubham",
      status: "ldjskjs",
      profile_pic: "https://avatars.dicebear.com/v2/avataaars/a52f17df51c50066a16625c73cfca095.svg",
    },
    {
      name: "arpit",
      status: "working",
      profile_pic: "https://avatars.dicebear.com/v2/avataaars/7138c752627c76df54b8929828b70928.svg",
    },
    {
      name: "Aman",
      status: "working Not playing",
      profile_pic: "https://avatars.dicebear.com/v2/avataaars/a52f17df51c50066a16625c73cfca095.svg",
    },
  ];
  return (
    <div className="Sidebar">
      {data.map((e) => {
        return (
          <div className="User">
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
