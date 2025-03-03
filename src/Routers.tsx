import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { lazy, Suspense } from "react";
import { ContactPage } from "./pages/ContactPage";
import { ContactTwoPage } from "./pages/ContactPageTwo";
import { ThankYouPage } from "./pages/ThankYouPage";
import { contactPageAction } from "./formActions/contactPageAction";
import { ContactRHFPage } from "./pages/ContactRHFPage";

const AdminPage = lazy(() => import("./pages/AdminPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "contact-rhf",
        element: <ContactRHFPage />,
      },
      {
        path: "contact-two",
        element: <ContactTwoPage />,
        action: contactPageAction,
      },
      {
        path: "thank-you/:name",
        element: <ThankYouPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-800">
                Loading
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
