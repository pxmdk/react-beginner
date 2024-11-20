import Alert from "./components/alert";
import Button from "./components/button";
function app() {
  return (
    <div>
      <Alert>
        Hello <strong>World</strong>
      </Alert>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default app;
