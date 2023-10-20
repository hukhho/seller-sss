import { MedusaProvider } from "medusa-react"
import type { PropsWithChildren } from "react"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./assets/styles/global.css"
import { LayeredModalProvider } from "./components/molecules/modal/layered-modal"
import { SteppedProvider } from "./components/molecules/modal/stepped-modal"
import { FeatureFlagProvider } from "./context/feature-flag"
import { medusaUrl } from "./services/config"
import queryClient from "./services/queryClient"

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div>
        This is login page
    </div>
  )
}

const root = createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
     <div>
        This is login page
    </div>
  </React.StrictMode>
)
