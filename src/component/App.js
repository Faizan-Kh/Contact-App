import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const contacts = [
    {
      id: "1",
      name: "Faizan",
      email: "faizankh@outlook.com"
    },
    {
      id: "2",
      name: "Fawad",
      email: "Fawadeqbal@outlook.com"
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
