// AddNewDrink.jsx
import { useState } from 'react';
import '../index.css';
function AddNewDrink() {
 const [name, setName] = useState('');
 const [category, setCategory] = useState('');
 const [ingredients, setIngredients] = useState('');
 const [image, setImage] = useState('');
 const [cheers, setCheers] = useState('');
 const [history, setHistory] = useState('');
 const [instructions, setInstructions] = useState('');
 const [favorite, setFavorite] = useState(false);

 const handleSubmit = (event) => {
    event.preventDefault();
    const drinkData = {
      name,
      category,
      ingredients,
      image,
      cheers,
      history,
      instructions,
      favorite: favorite.toString(),
    };
    console.log('Drink Data:', drinkData);
    // Here, you would typically send the data to your server or save it to a file
 };

 return (
    <form id="drinksInputForm" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <label style={{ marginBottom: '10px' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Ingredients:
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Image URL:
        <input type="url" value={image} onChange={(e) => setImage(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Cheers:
        <input type="number" value={cheers} onChange={(e) => setCheers(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        History:
        <textarea value={history} onChange={(e) => setHistory(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Instructions:
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Favorite:
        <input type="checkbox" checked={favorite} onChange={(e) => setFavorite(e.target.checked)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <input type="submit" value="Submit" style={{ width: '100%', padding: '10px' }} />
    </form>
 );
}

export default AddNewDrink;