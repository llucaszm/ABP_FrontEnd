import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { ListaComprasProvider } from "./context/ListaComprasContext";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
// import ListaCompras from "./routes/ListaCompras";
// import Produtos from "./routes/Produtos";
// import ProdutoExibe from "./routes/ProdutoExibe";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./routes/auth/Login";
import ForgotPassword from "./routes/auth/ForgotPassword";
import BookList from "./routes/books/BookList";
import BookForm from "./routes/books/BookForm";
import BookDetail from "./routes/books/BookDetail";
import UserList from "./routes/users/UserList";
import UserForm from "./routes/users/UserForm";
import UserDetail from "./routes/users/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/book-create",
        element: <BookForm />,
      },
      {
        path: "/book-edit/:id",
        element: <BookForm />,
      },
      {
        path: "/book-detail/:id",
        element: <BookDetail />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user-create",
        element: <UserForm />,
      },
      {
        path: "/user-edit/:id",
        element: <UserForm />,
      },
      {
        path: "/user-detail/:id",
        element: <UserDetail />,
      },
    ],
  },
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
