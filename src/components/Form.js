import React from 'react';
import '../style.css';

export default function Form() {
  const [formData, setFormData] = React.useState({
    imageUrl: '',
    title: '',
    content: '',
    author: '',
  });
  // encode to base64
  function handleFileInput(event) {
    let fileUrl = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => {
        return {
          ...prev,
          imageUrl: reader.result,
        };
      });
    };
    reader.readAsDataURL(fileUrl);
  }
  function handleChange(element) {
    const { name, value } = element.target;
    setFormData((prevDdata) => {
      return {
        ...prevDdata,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    let opt = {
      title: formData.title,
      content: formData.content,
      author: formData.author,
      imageurl: formData.imageUrl,
    };
    fetch('http://localhost:5500/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    }).then((res) => {
      // setFormData({
      //     imageUrl: '',
      //     title: '',
      //     content: '',
      //     author: ''
      // })
      console.log(res);
    });
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
      <input onChange={handleFileInput} type="file" />
      <button>Submit Post</button>
    </form>
  );
}
