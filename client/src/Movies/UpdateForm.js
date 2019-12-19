import React from "react";
import axios from "axios";

// const initialState = {
//   title: "",
//   director: "",
//   metascore: "",
//   stars: ""
// };

const UpdateForm = props => {
  const [text, setText] = React.useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => {
        // console.log(res);
        setText(res.data);
      })
      .catch(err => console.log(err));

    const itemToEdit = props.savedList.find(
      e => `${e.id}` === props.match.params.id
    );
    if (itemToEdit) {
      setText(itemToEdit);
    }
  }, [props.savedList, props.match.params.id]);

  const handleChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "metascore") {
      value = parseInt(value, 10);
    }
    setText({
      ...text,
      [e.target.name]: e.target.value,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${text.id}`, text)
      .then(res => {
        // console.log(res);
        props.history.push("/");
      })
      .catch(err => console.log(err.response, "hello"));
  };

  return (
    <div>
      <form className="save-wrapper" onSubmit={handleSubmit}>
        <label />
        <input
          name="title"
          type="text"
          value={text.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <label />
        <input
          name="director"
          type="text"
          value={text.director}
          onChange={handleChange}
          placeholder="Director"
        />
        <label />
        <input
          name="metascore"
          type="text"
          value={text.metascore}
          onChange={handleChange}
          placeholder="Metascore"
        />
        <label />
        <input
          name="stars"
          type="text"
          value={text.stars}
          onChange={handleChange}
          placeholder="stars"
        />
        <button className="save-button">Save</button>
      </form>
    </div>
  );
};

export default UpdateForm;
