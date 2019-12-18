import React from "react";

const initialState = {
  title: "",
  director: "",
  metascore: "",
  stars: ""
};

const UpdateForm = () => {
  const [state, setState] = React.useState(initialState);

  const handleChange = e => {
    e.persist();
  };

  return (
    <div>
      <form>
        <label />
        <input
          name=""
          type="text"
          // value={state}
          onChange={handleChange}
          placeholder="Title"
        />
        <label />
        <input
          name=""
          type="text"
          // value={state}
          onChange={handleChange}
          placeholder="Director"
        />
        <label />
        <input
          name=""
          type="text"
          // value={state}
          onChange={handleChange}
          placeholder="Metascore"
        />
        <label />
        <input
          name=""
          type="text"
          // value={state}
          onChange={handleChange}
          placeholder="stars"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
