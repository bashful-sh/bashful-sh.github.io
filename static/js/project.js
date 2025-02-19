/*  static/js/project.js
 *  handles any project container functionality.
 */

const selectCopy = (name) => {
  const copyButton = document.querySelector(`#copy-button-${name}`);
  const codeSnippet = document.querySelector(`#${name}-selected-command`);
  const textToCopy = codeSnippet.innerText;
  writeClipboardText(textToCopy).then(() => {
      copyButton.innerHTML = "<i class='bx bx-check' style='color:#6f6;font-size:13px;'></i><code style='margin:0;padding:0;font-size:10px;'>Copied!</code>"; // Success icon
      setTimeout(() => {
        copyButton.innerHTML = "<i class='bx bx-copy'></i>"; // Back to copy icon
      }, 2000); // Reset after 2 seconds
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
      copyButton.innerHTML = "<i class='bx bx-x' style='color:#f66;font-size:13px;'></i>"; // Error icon
      setTimeout(() => {
        copyButton.innerHTML = "<i class='bx bx-copy' style='color:#666;'></i>"; // Back to copy icon
    }, 2000); // Reset after 2 seconds
  });
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

const openProjectWindow = (el) => el.parentElement.classList.add("selected-project");

const closeProjectWindow = (el) => el.parentElement.classList.remove("selected-project");

const toggleProjectWindow = (el) => {
  if (el.parentElement.classList.contains("selected-project")) {
    closeProjectWindow(el);
  } else {
    openProjectWindow(el);
  }
}
