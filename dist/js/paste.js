;(function () {
  const container = document.querySelector(".buttonC")
  const button = document.createElement("button")

  button.textContent = "Paste"
  button.addEventListener("click", () => {
    navigator.clipboard.readText().then((text) => {
      window.wmks.sendInputString(text)
    })
  })

  container?.appendChild(button)
})()
