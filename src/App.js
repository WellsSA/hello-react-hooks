import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // componentWillMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
    
    // componentWillUnmount
    return () => {
      // document.remove EventListener();
    }
  }, []);

  // componentWillUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => 
          <li key={t}>{t}</li>
        )}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br /> 
      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
