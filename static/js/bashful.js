/*  static/js/cmd.js
 *  handles any download and install clone-snippet features.
 */
const cmdSnips = [
  `curl -fsSL https://bashful-sh.github.io/install.sh | bash`,
  `curl -fsSL https://bashful-sh.github.io/install-dev.sh | bash`,
]

const selectDownload = () => {
  const el = document.querySelector("#bashful-selected-command");
  el.innerText = cmdSnips[0];

  const del = document.querySelector("#download-cmd-option-bashful");
  del.classList.add("selected");

  const cel = document.querySelector("#clone-cmd-option-bashful");
  cel.classList.remove("selected");
}

const selectClone = () => {
  const el = document.querySelector("#bashful-selected-command");
  el.innerText = cmdSnips[1];

  const del = document.querySelector("#download-cmd-option-bashful");
  del.classList.remove("selected");

  const cel = document.querySelector("#clone-cmd-option-bashful");
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
  const copyButton = document.querySelector("#copy-button-bashful");
  const codeSnippet = document.querySelector("#bashful-selected-command");
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
