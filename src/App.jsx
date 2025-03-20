import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Mini Project</div>
      <div className="space-x-4">
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/about">About</Link>
        <Link className="text-white" to="/contact">Contact</Link>
      </div>
      <div className="space-x-4">
        <Link className="text-white" to="/login">Login</Link>
        <Link className="text-white" to="/register">Register</Link>
      </div>
    </nav>
  );
}

function Home() {
  const items = [
    { name: "Meat", details: "Products that come from animals" },
    { name: "Produce", details: "Products that come from growing and cultivating" },
    { name: "Dairy", details: "Products that come from cows" }
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex p-4">
      <div className="w-1/2">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-gray-100 mb-2 cursor-pointer hover:bg-gray-300 transition duration-300"
            onMouseEnter={() => setSelectedItem(item.details)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="w-1/2 bg-gray-200 p-4 text-lg font-semibold">{selectedItem || "Hover over an item"}</div>
    </div>
  );
}

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!username || !password) {
        alert("Please fill in both fields");
      } else {
        setLoggedIn(true);
      }
    };
  
    return loggedIn ? (
      <div className="p-4 text-green-600">You are logged in!</div>
    ) : (
      <form className="p-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="border p-2 mb-2 w-full" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 mb-2 w-full" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    );
  }

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    id: '',
    email: '',
    city: '',
    zipCode: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]+$/.test(formData.firstName) || !/^[a-zA-Z]+$/.test(formData.lastName)) {
      alert("First and Last Name must contain only letters.");
      return;
    }
    if (!/^[0-9]+$/.test(formData.id) || !/^[0-9]+$/.test(formData.zipCode)) {
      alert("ID and Zip Code must be numeric only.");
      return;
    }
    if (!/^\S+$/.test(formData.username) || /^[0-9@#$%^&*!].*/.test(formData.username)) {
      alert("Username cannot contain spaces or start with a number/special character.");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/.test(formData.password)) {
      alert("Password must be at least 10 characters, contain an uppercase letter, a lowercase letter, and a digit.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="text" name="id" placeholder="ID" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <select name="city" className="border p-2 mb-2 w-full" onChange={handleChange}>
        <option value="">Select City</option>
        <option value="Greenwood">Greenwood</option>
        <option value="Newberry">Newberry</option>
        <option value="Columbia">Columbia</option>
      </select>
      <input type="text" name="zipCode" placeholder="Zip Code" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="text" name="username" placeholder="Username" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <button type="submit" className="bg-green-500 text-white p-2 w-full">Register</button>
    </form>
  );
}

function About(){
  return <div className="p-4">This is an About page with the details of the project</div>
}

function Contact(){
  return <div className="p-4">Contact us at: ryan.parramendoza@lander.edu</div>
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
