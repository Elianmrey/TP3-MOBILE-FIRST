
import './App.css'; 

import Header from './components/Header.jsx';
import MainMenu from './components/MainMenu.jsx';
import PostFeed from './components/PostFeed.jsx';
import FriendList from './components/FriendList.jsx';
import SuggestionList from './components/SuggestionList.jsx';

export default function App() {
  const posts = [
    {
      image: 'https://img.freepik.com/fotos-gratis/vista-de-terras-agricolas-de-alto-angulo_23-2148579680.jpg?ga=GA1.1.1242223129.1726367320&semt=ais_hybrid',
      title: 'Primeiro Post',
      text: 'Este é o conteúdo do primeiro post.',
      date: '12 de Setembro',
      author: 'João',
      likes: 20,
      shares: 5,
      comments: ['Ótimo post!', 'Interessante!'],
    },
   
  ];

  const friends = [
    {
      photo: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-sorrindo_23-2149260597.jpg?semt=ais_hybrid',
      name: 'Maria', mutualFriends: 5
    },
    { photo: 'url-da-foto', name: 'Carlos', mutualFriends: 8 },

  ];

  const suggestions = [
    { photo: 'url-da-foto', name: 'Ana', mutualFriend: 'João' },
    { photo: 'url-da-foto', name: 'Pedro', mutualFriend: 'Carlos' },
 
  ];

  return (
    <div className="container">
      <Header />
      <MainMenu />
      <div className="grid-layout">
        <PostFeed posts={posts} />
        <FriendList friends={friends} />
        <SuggestionList suggestions={suggestions} />
      </div>
    </div>
  );
};


