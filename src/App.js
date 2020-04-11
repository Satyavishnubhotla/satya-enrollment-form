import React from "react";
import "./styles.css";
import EnrollmentForm from "./components/EnrollmentForm";
import Container from "@material-ui/core/Container";

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <EnrollmentForm />
      </Container>
    </div>
  );
}
