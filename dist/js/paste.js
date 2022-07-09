;(function () {
  const container = document.querySelector(".buttonC")
  const button = document.createElement("button")

  function paste() {
    navigator.clipboard.readText().then((text) => {
      window.wmks.sendInputString(text)
    })
  }

  button.textContent = "Paste"
  button.addEventListener("click", paste)
  container?.appendChild(button)

  function handleKeyDown(e) {
    if (e.key === "v" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      e.stopPropagation()
      paste()
    }
  }

  document.addEventListener("keydown", handleKeyDown, true)
})()
