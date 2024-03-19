
import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import Messenger from "./components/Messenger";
import { useState } from "react";

function App() {

  const [clientId, setClientId] = useState('');

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
