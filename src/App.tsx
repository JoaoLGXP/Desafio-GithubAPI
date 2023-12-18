import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import MainPage from "./routes";
import SearchUser from "./routes/SearchUser";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search-user" element={<SearchUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

