import "../style.css"
import javascriptLogo from "../javascript.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "../counter.js"

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector("#counter"))

async function main() {
    if (process.env.NODE_ENV === "development") {
        if (window.location.pathname === "/login") {
            window.location.pathname = "/login/"
            return
        }

        const { worker } = require("./shared/api/browser.js")

        await worker.start({
            serviceWorker: {
                url: "/login/mockServiceWorker.js",
            },
        })
    }
}

main()

const runApp = async () => {
    switch (process.env.NODE_ENV) {
        case "development":
            await import("./shared/api/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                    })
                })

    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })
