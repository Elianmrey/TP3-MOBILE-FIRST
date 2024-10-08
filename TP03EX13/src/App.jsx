import { useState } from 'react';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import TaskForm from './components/NewTaskForm';
import './App.css';


export default function App() {
  const [categories, setCategories] = useState(['Mercado', 'Farmácia', 'Estudos']);
  const [tasks, setTasks] = useState({
    Mercado: ['Comprar frutas', 'Comprar pão','Comprar Bolo'],
    Farmácia: ['Comprar remédio','Comprar Vitaminas'],
    Estudos: ['Estudar React', 'Ler livro','Estudar Hardware']
  });
  const [selectedCategory, setSelectedCategory] = useState(null);


  function addTask(category, task){
    setTasks({
      ...tasks,
      [category]: [...tasks[category], task]
    });
  };

  function removeTask (category, taskIndex) {
    const newTasks = [...tasks[category]];
    newTasks.splice(taskIndex, 1);
    setTasks({
      ...tasks,
      [category]: newTasks
    });
  };

  function removeCategory (category) {
    if (categories.includes(category)) {
      const newCategories = categories.filter(cat => cat !== category);
      const { [category]: ignored, ...newTasks } = tasks; // eslint-disable-line no-unused-vars 
      //O Comentário anterior esrá colocado no codigo para evitar que o Eslint detecte a variavel 'ignored'
      
      
      setCategories(newCategories);
      setTasks(newTasks);
      if (selectedCategory === category) {
        setSelectedCategory(null);
      }
    }
  };

  return (
    <div className={`app`}>
      
      <CategoryList 
        categories={categories} 
        selectCategory={setSelectedCategory} 
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

