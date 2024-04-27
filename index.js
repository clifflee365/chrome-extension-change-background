async function sayHello(){
  const [tab] = await chrome.tabs.query({ active: true})

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // document.body
      alert("Hello from my extension!")
    }
  })
}

document.getElementById("myButton").addEventListener("click", sayHello)