import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ProtectedRoute from './protectedRoute';
import SignIn from './pages/SignIn/SignIn'
import Uploads from './pages/Uploads/Uploads';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
            <Route index element={<Uploads />} />
          </Route>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}>
            <Route path="upload" element={<Uploads/>} />
          </Route>
          <Route path='/login' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
