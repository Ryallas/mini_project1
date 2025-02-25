import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState} from "react";
import './index.css';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Mini Project</div>
      <div className="space-x-4">
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/login">Login</Link>
        <Link className="text-white" to="/register">Register</Link>
      </div>
    </nav>
  );
}

function Home() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex p-4">
      <div className="w-1/2">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-gray-100 mb-2 cursor-pointer"
            onMouseEnter={() => setSelectedItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-1/2 bg-gray-200 p-4">{selectedItem || "Hover over an item"}</div>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in both fields");
    } else {
      alert("Login successful");
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" className="border p-2 mb-2" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mb-2" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
    </form>
  );
}

function Register() {
  return (
    <div className="p-4">Registration Form Here</div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
