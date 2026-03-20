const output = document.getElementById("output");

async function main() {
  const apiKey = await getKey();
  render(apiKey);
}

function render(string) {
  const element = document.createElement("p");
  element.innerText = string;
  output.appendChild(element);
}

async function getKey() {
  try {
    const options = {
      method: "POST",
    };
    const res = await fetch(
      "https://proxy-key-47ga.onrender.com/get-key5",
      options,
    );
    if (!res.ok) {
      console.error("Failed to get key.");
    }
    const { key } = await res.json();
    return key;
  } catch (error) {
    console.error(error);
  }
}

main();
