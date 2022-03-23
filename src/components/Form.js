import React from 'react';
import '../style';

export default function Form() {
  const [formData, setFormData] = React.useState({
    imgUrl: '',
    title: '',
    content: '',
    author: '',
  });
  function handleChange(element) {
    const { name, value } = element.target;
    setFormData((prevDdata) => {
      return {
        ...prevDdata,
        name: value,
      };
    });
    console.log(formData);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="title"
        type="text"
        name="title"
        min="3"
        max="15"
        value={formData.title}
      />
      <textarea
        onChange={handleChange}
        placeholder="content"
        type="text"
        name="content"
        value={formData.content}
      />
      <input
        onChange={handleChange}
        placeholder="author"
        type="text"
        name="author"
        min="3"
        max="15"
        value={formData.author}
      />
      <input onchange={handleChange} type="file" />
      <button>Submit Post</button>
    </form>
  );
}
