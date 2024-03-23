// AddNewDrink.jsx
import { useState } from 'react';

function AddNewDrink() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <label style={{ marginBottom: '10px' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '10px' }} />
      </label>
      <input type="submit" value="Submit" style={{ width: '100%', padding: '10px' }} />
    </form>
  );
}

export default AddNewDrink;