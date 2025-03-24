import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import useStore from "../store";

export default function Home() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  const { items, fetchItems, addItem, updateItem, deleteItem } = useStore();
  const [formData, setFormData] = useState({ title: "", name: "", category: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateItem(editId, formData);
      setEditId(null);
    } else {
      addItem(formData);
    }
    setFormData({ title: "", name: "", category: "" });
  };
  
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
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
            <div className="bg-slate-300 p-4 ">
                <h2 className="text-slate-700 border-b-2">Add book</h2>
                <form className="flex" onSubmit={handleSubmit}>
                    <div className="pt-3">
                        <input type="text" name="title" required placeholder="Book tittle" value={formData.title} onChange={handleChange} className="w-38 p-2 border border-gray-200 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="pt-3">
                        <input type="text" name="name" required placeholder="Book author" value={formData.name} onChange={handleChange} className="w-38 ml-2 p-2 border border-gray-200 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="pt-3">
                        <input type="text" name="category" required placeholder="Book category" value={formData.category} onChange={handleChange} className="w-38 ml-2 p-2 border border-gray-200 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="pt-3">
                        <button className="bg-blue-500 w-20 p-2 border rounded mt-1 ml-2 text-white" >{editId ? "Update" : "Add"}</button>
                    </div>
                </form>

            </div>
            <div className="bg-slate-300 p-2 mt-9 w-full">

                <h2 className="text-slate-700 border-b-2">View book</h2>
                {items.map((item) => (
                <div className="bg-slate-50 p-2 mt-2 rounded flex" key={item.id}>
                    <div className="w-1/3">
                        <div className="text-gray-600 font-bold ml-4">{item.title}</div>
                        <div className="text-gray-500 mt-4 ml-4">{item.name}</div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-center m-5 font-bold text-gray-500">{item.category}</div>
                    </div>
                    <div className="ml-20 p-2">
                        <button type="submit" onClick={() => deleteItem(item.id)} className="bg-red-500 w-20 p-2 border rounded mt-1 ml-2 text-white" >Delete</button>
                        <button type="submit" onClick={() => handleEdit(item)} className="bg-green-500 w-20 p-2 border rounded mt-1 ml-2 text-white">Update</button>
                    </div>

                </div>
                ))}    
            </div>

        </main>
        <footer className="mt-68 p-6">
            <h2 className="flex justify-center font-bold text-white">2025 Books Library</h2>
        </footer>
  
  
        
    </div>
  );
}
