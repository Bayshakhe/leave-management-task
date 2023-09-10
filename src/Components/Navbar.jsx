import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="my-5">
      <NavLink to="/" className={({ isActive }) => (isActive ? "bg-blue-500 text-xl  p-5 border-b-4 border-blue-500 text-white font-semibold" : "text-xl border-b-4 border-blue-500 p-5")}>
        Department List
      </NavLink>
      <NavLink
        to="/createDepartment"
        className={({ isActive }) => (isActive ? "bg-blue-500 text-xl  p-5 border-b-4 border-blue-500 text-white font-semibold" : "text-xl border-b-4 border-blue-500 p-5")}>
        Create Department
      </NavLink>
    </div>
  );
};

export default Navbar;
