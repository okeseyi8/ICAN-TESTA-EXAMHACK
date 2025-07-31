import "./App.css";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "",
            padding: "",
            color: "#000",
          },
          success: {
            iconTheme: {
              primary: "blue",
              secondary: "white",
            },
          },
        }}
        position="top-center"
      />
    </>
  );
}

export default App;
