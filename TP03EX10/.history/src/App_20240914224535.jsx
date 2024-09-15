import React from 'react';
import './App.css'; // Importar o estilo global

import Header from './components/Header';
import MainMenu from './components/MainMenu';
import PostFeed from './components/PostFeed';
import FriendList from './components/FriendList';
import SuggestionList from './components/SuggestionList';

export default function App = () => {
  const posts = [
    {
      image: 'url-da-imagem',
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
    { photo: 'url-da-foto', name: 'Maria', mutualFriends: 5 },
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

export default App;
