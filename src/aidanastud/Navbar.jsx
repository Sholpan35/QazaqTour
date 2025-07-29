import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">StudentHelp.kz</Link>
      <div className="space-x-4">
        <Link to="/dormitories" className="hover:text-blue-500">Жатақхана</Link>
        <Link to="/jobs" className="hover:text-blue-500">Жұмыс</Link>
        <Link to="/education" className="hover:text-blue-500">Оқу</Link>
        <Link to="/about" className="hover:text-blue-500">Біз туралы</Link>
      </div>
    </nav>
  );
}

export default Navbar;