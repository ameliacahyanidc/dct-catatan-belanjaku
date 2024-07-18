import { useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem, onUpdateItem }) {
    const [newName, setNewName] = useState(item.name);
    const [newQuantity, setNewQuantity] = useState(item.quantity);
    const [isEditing, setIsEditing] = useState(false);

    const handleForSubmit = (event) => {
        event.preventDefault();
        onUpdateItem(item.id, { name: newName, quantity: newQuantity });
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <li key={item.id}>
            {isEditing ? (
                <form onSubmit={handleForSubmit}>
                    <input
                        type="number"
                        value={newQuantity}
                        onChange={(e) => setNewQuantity(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => onToggleItem(item.id)}
                    />
                    <span
                        style={item.checked === true ? { textDecoration: "line-through" } : {}}
                    >
                        {item.quantity} {item.name}
                    </span>
                    <button onClick={() => onDeleteItem(item.id)}>&times;</button>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </li>
    );
}