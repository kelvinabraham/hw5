import { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const LinkContainer = (props) => {
  cont[(links, setLinks)] = useState([]);
  const fetchLinks = async () => {
    try {
      let response = await fetch("/links");
      console.log(response);
      let data = await response.json();
      setLinks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (loading == true) {
      fetchLinks();
      setLoading(false);
    }
  }, []);

  const postLink = async (newLink) => {
    try {
      let response = await fetch("/links", {
        nethod: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });
      console.log(response);
      let message = response.text();
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  };

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
    setLinks([...links, favLink]);
    postLink(favLink);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      <Table linkData={links} removeLink={handleRemove} />
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form notifyParent={handleSubmit} />
    </div>
  );
};
//
export default LinkContainer;
