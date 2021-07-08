import React from "react";
import Container from "@material-ui/core/Container";
import { SignUp } from "../src/components/SignUp";
import { Profile } from "../src/components/Profile";
import { Footer } from "../src/components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Container maxWidth="lg"></Container> */}
      {/* <SignUp /> */}
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
