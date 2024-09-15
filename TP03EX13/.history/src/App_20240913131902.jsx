import { useState } from 'react';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import TaskForm from './components/NewTaskForm';
import ThemeToggle from './components/ThemeToggle';
import './App.css';


export default function App() {
  const [theme, setTheme] = useState('light');
  const [categories, setCategories] = useState(['Mercado', 'Farmácia', 'Estudos']);
  const [tasks, setTasks] = useState({
    Mercado: ['Comprar frutas', 'Comprar pão'],
    Farmácia: ['Comprar remédio','Comprar Vitaminas'],
    Estudos: ['Estudar React', 'Ler livro','Estudar Hardware']
  });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addTask = (category, task) => {
    setTasks({
      ...tasks,
      [category]: [...tasks[category], task]
    });
  };

  const removeTask = (category, taskIndex) => {
    const newTasks = [...tasks[category]];
    newTasks.splice(taskIndex, 1);
    setTasks({
      ...tasks,
      [category]: newTasks
    });
  };

  const addCategory = (category) => {
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
      setTasks({
        ...tasks,
        [category]: []
      });
    }
  };

  const removeCategory = (category) => {
    if (categories.includes(category)) {
      const newCategories = categories.filter(cat => cat !== category);
      const { [category]: ignored, ...newTasks } = tasks; // eslint-disable-line no-unused-vars 
      //Comentario anterior colocado no codigo para evitar que o Eslint detecte a variavel 'ignored'
      setCategories(newCategories);
      setTasks(newTasks);
      if (selectedCategory === category) {
        setSelectedCategory(null);
      }
    }
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <CategoryList 
        categories={categories} 
        selectCategory={setSelectedCategory} 
        addCategory={addCategory} 
        removeCategory={removeCategory} 
      />
      {selectedCategory && (
        <>
          <TaskList 
            category={selectedCategory} 
            tasks={tasks[selectedCategory]} 
            removeTask={removeTask} 
          />
          <TaskForm category={selectedCategory} addTask={addTask} />
        </>
      )}
    </div>
  );
};

