
import React, { useState } from 'react';
import ItemEvaluation from './components/ItemEvaluation';
import AffinityResults from './components/AffinityResults';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const items = [
  { id: 1, title: 'Inception', type: 'movie' },
  { id: 2, title: 'Bohemian Rhapsody', type: 'music' },
  { id: 3, title: 'The Witcher 3', type: 'game' }
];

const otherUsers = [
  { id: 1, name: 'Alice', preferences: { 1: 'like', 2: 'dislike', 3: 'like' } },
  { id: 2, name: 'Bob', preferences: { 1: 'dislike', 2: 'like', 3: 'like' } },
  { id: 3, name: 'Charlie', preferences: { 1: 'like', 2: 'like', 3: 'dislike' } }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userPreferences, setUserPreferences] = useState({});
  const [showAffinity, setShowAffinity] = useState(false);


  const handleEvaluate = (itemId, preference) => {
    setUserPreferences({ ...userPreferences, [itemId]: preference });
    setCurrentIndex(currentIndex + 1);
  };

  const calculateAffinity = () => {
    const affinities = otherUsers.map(user => {
      const similarity = Object.keys(user.preferences).reduce((acc, key) => {
        if (user.preferences[key] === userPreferences[key]) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return { ...user, affinity: similarity };
    });

    return affinities.sort((a, b) => b.affinity - a.affinity);
  };



  return (
    <div className={`app`}>
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      {showAffinity ? (
        <AffinityResults affinities={calculateAffinity()} />
      ) : currentIndex < items.length ? (
        <ItemEvaluation
          item={items[currentIndex]}
          onEvaluate={handleEvaluate}
        />
      ) : (
        <button onClick={() => setShowAffinity(true)}>
          Ver afinidade com outros usuários
        </button>
      )}
    </div>
  );
}

export default App;
