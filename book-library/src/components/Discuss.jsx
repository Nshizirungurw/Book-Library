import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Home() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
        const newMessages = [...messages, { email, message }];
        setMessages(newMessages);
        localStorage.setItem("messages", JSON.stringify(newMessages));
        setMessage("");
        setNotification("Message sent successfully!");
        setTimeout(() => setNotification(""), 3000);
      }
  };



  return (
    <div>
        <header className="p-3 pr-90 pl-96 w-full text-white flex justify-between ">
            <nav className="flex justify-between">
                <div className="text-lg font-bold pr-60">Book Library</div>
                <div className="space-x-4">
                    <Link to="/home " className="hover:underline">Home</Link>
                    <Link to="/discuss" className="hover:underline">Discuss</Link>
                    <button onClick={handleLogout} className="hover:underline">Logout</button>
                </div>
            </nav>
        </header>

        <main className="bg-gray-200 p-4">
            <h1 className="text-gray-600 font-bold">Send message to discuss</h1>
            {notification && <div className="p-3 bg-green-100 text-green-800 rounded mb-4">{notification}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border border-gray-300 rounded" />
                <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required className="p-2 border border-gray-300 rounded min-h-[100px]" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
            </form>   
        </main>
            
        <footer className="mt-68 p-6">
            <h2 className="flex justify-center font-bold text-white">2025 Books Library</h2>
        </footer>
  
  
        
    </div>
  );
}
