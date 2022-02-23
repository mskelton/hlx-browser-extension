const script = document.createElement("script")

script.setAttribute("type", "text/javascript")
script.setAttribute("src", chrome.runtime.getURL("/js/paste.js"))

document.body.appendChild(script)
