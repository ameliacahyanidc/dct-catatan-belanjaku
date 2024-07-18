import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './GroceryList';
import Footer from './Footer';

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
    edit: false,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
    edit: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
    edit: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleEditItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, edit: !item.edit } : item)));
  }

  function handleUpdateItem(id, updates) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onEditItem={handleEditItem} onUpdateItem={handleUpdateItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}