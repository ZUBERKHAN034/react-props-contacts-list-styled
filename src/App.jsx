import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { contacts } from "./contacts";

function App() {
  return (
    <div>
      <Heading />
      {contacts.map((contact) => {
        return <Card {...contact} key={contact.id} />;
      })}
    </div>
  );
}

export default App;
