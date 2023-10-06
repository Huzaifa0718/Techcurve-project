import Sidebaritems from "../components/Sidebaritems";
// import data from "../data"
import items from "../data/Sidebar.json";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <Sidebaritems key={index} item={item} />
      ))}
    </div>
  );
}
