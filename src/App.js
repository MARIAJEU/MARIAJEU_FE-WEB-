
import { AuthProvider } from "./authProvider";
import Food from "./pages/food";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./pages/test";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
