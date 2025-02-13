/*  static/js/cmd.js
 *  handles any download and install clone-snippet features.
 */
const cmdSnips = [
  `curl -fsSL https://bashful-sh.github.io/install.sh | bash`,
  `git clone git@github.com:bashful-sh/bashful.git ~/.bashful`
]

const selectDownload = () => {
  const el = document.querySelector("#command-snippet-el");
  const del = document.querySelector("#download-cmd-option");
  const cel = document.querySelector("#clone-cmd-option");
  el.innerText = cmdSnips[0];
  del.classList.add("selected");
  cel.classList.remove("selected");
}

const selectClone = () => {
  const el = document.querySelector("#command-snippet-el");
  const del = document.querySelector("#download-cmd-option");
  const cel = document.querySelector("#clone-cmd-option");
  el.innerText = cmdSnips[1]
  del.classList.remove("selected");
  cel.classList.add("selected");
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

const selectCopy = () => {
  const copyButton = document.getElementById("copy-button");
  const codeSnippet = document.getElementById("command-snippet-el");
  const textToCopy = codeSnippet.innerText;
  writeClipboardText(textToCopy).then(() => {
      copyButton.innerHTML = "<i class='bx bx-check' style='color: green;'></i><code style='margin:0;padding:0;font-size:11px;'>Copied!</code>"; // Success icon
      setTimeout(() => {
        copyButton.innerHTML = "<i class='bx bx-copy'></i>"; // Back to copy icon
      }, 2000); // Reset after 2 seconds
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
      copyButton.innerHTML = "<i class='bx bx-x' style='color: red;'></i>"; // Error icon
      setTimeout(() => {
        copyButton.innerHTML = "<i class='bx bx-copy'></i>"; // Back to copy icon
    }, 2000); // Reset after 2 seconds
  });
}
