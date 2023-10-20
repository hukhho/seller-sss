import { lazy, Suspense } from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Spinner from "./components/atoms/spinner"
import DangKyPage from "./pages/dangky"

const NotFound = lazy(() => import("./pages/404"))
const Dashboard = lazy(() => import("./pages/a"))
const IndexPage = lazy(() => import("./pages/index"))
const InvitePage = lazy(() => import("./pages/register"))
const LoginPage = lazy(() => import("./pages/login"))
const ResetPasswordPage = lazy(() => import("./pages/reset-password"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IndexPage />} />
      <Route path="a/*" element={<Dashboard />} />
      <Route path="register" element={<InvitePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dangky" element={<DangKyPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />
    </>
  )
)

const Loading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-grey-5 text-grey-90">
    <Spinner variant="secondary" />
  </div>
)

const App = () => {
  console.log("App.tsx, router: ", router)

  return
  {
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  }
}

export default App
