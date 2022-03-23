import React from 'react';
import Form from './components/Form';
import Posts from './components/Posts';
import './style.css';

export default function App() {
  return (
    <div id="app">
      <Posts />
      <Form />
    </div>
  );
}
