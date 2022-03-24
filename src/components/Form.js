import React from 'react';
import '../style';
import encodeImage from '../lib/encodeImage';

export default function Form() {
  const [formData, setFormData] = React.useState({
    imgUrl: '',
    title: '',
    content: '',
    author: '',
  });
  async function handleChange(element) {
    const { name, value, type, files } = element.target;
    const encodedUrl = await encodeImage(files[0]);
    console.log(encodedUrl);
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
