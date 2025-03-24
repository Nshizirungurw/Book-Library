import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    set({ items: response.data.map((item) => ({ id: item.id, title: item.title, name: "John Doe", category: "General" })) });
  },
  addItem: (newItem) => set((state) => ({ items: [...state.items, { id: Date.now(), ...newItem }] })),
  updateItem: (id, updatedData) => set((state) => ({
    items: state.items.map((item) => (item.id === id ? { ...item, ...updatedData } : item)),
  })),
  deleteItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export default useStore;
