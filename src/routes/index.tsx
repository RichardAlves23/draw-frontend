import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Draw from "../pages/canvas";

function Routes() {
    const routes = createBrowserRouter([
        {
          path: "/",
          element: <Draw/>
        },
      ]);

    
    return (
      <>
        <RouterProvider router={routes} />
      </>
    )
}

export default Routes;