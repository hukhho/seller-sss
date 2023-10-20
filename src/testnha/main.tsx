import { MedusaProvider } from "medusa-react"
import type { PropsWithChildren } from "react"
import React from "react"
import { createRoot } from "react-dom/client"

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
