import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="container mt-3">
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <strong>World</strong>
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Show Alert</Button>
    </div>
  );
}
