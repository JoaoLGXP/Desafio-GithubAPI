import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import MainPage from "./routes";
import SearchUser from "./routes/SearchUser";
import User from "./routes/User";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search-user" element={<SearchUser />}>
            <Route path="user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

