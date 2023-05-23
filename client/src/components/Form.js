import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    if (event.target.id == "name") {
      setName(event.target.value);
    } else {
      setURL(event.target.value);
    }
  };

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();
    console.log(name, URL);
    props.notifyParents({ name, URL });
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  };

  return (
    <form>
      <label for="name">
        Name
        <input
          type={"text"}
          name={"name"}
          id={"name"}
          value={name}
          onChange={handleChnage}
        />
      </label>
      <label for="URL">
        URL
        <input
          type={"text"}
          name={"URL"}
          id={"URL"}
          value={URL}
          onChange={handleChnage}
        />
      </label>
      <button onCLick={onFormSubmit}>Submit</button>
    </form>
  );
};

export default Form;
