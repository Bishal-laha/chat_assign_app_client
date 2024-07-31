import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Loaders from "./components/layout/Loaders";
import { userLogin, userLogout } from "./store/slice/auth";
import { SocketProvider } from "./socket";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
  const dispatch = useDispatch();
  const { isLogin, isLoader } = useSelector((state) => state.auth);
  const { isDarkMode } = useSelector((state) => state.misc);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/profile`)
      .then((res) => dispatch(userLogin(res?.data)))
      .catch((error) => dispatch(userLogout()));
  }, []);

  return isLoader ? (<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}><Loaders /></ThemeProvider>) : (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Suspense fallback={<Loaders />}>
          <Routes>
            <Route element={<SocketProvider><ProtectedRoute user={isLogin} /></SocketProvider>} >
              <Route path="/" element={<Home />} />
              <Route path="/chat/:chatId" element={<Chat />} />
            </Route>
            <Route path="/signup-login" element={<ProtectedRoute user={!isLogin} redirectPath="/"><Login /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster position="top-left" />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App