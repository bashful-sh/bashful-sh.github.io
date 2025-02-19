/*  static/js/bashful.js
 *  handles bashful project specific functionality.
 */

const msCmdSnips = [
  `coming soon...`,
  `coming soon...`,
]

const selectDownload = (name) => {
  const el = document.querySelector(`#${name}-selected-command`);
  el.innerText = msCmdSnips[0];

  const del = document.querySelector(`#download-cmd-option-${name}`);
  del.classList.add("selected");

  const cel = document.querySelector(`#clone-cmd-option-${name}`);
  cel.classList.remove("selected");
}

const selectClone = (name) => {
  const el = document.querySelector(`#${name}-selected-command`);
  el.innerText = msCmdSnips[1];

  const del = document.querySelector(`#download-cmd-option-${name}`);
  del.classList.remove("selected");

  const cel = document.querySelector(`#clone-cmd-option-${name}`);
  cel.classList.add("selected");
}

const msOwner = "bashful-sh";
const msName = "model-server";
const msGithubAPIUrl = `https://api.github.com/repos/${msOwner}/${msName}`;
const msSetElement = (id, text) => document.getElementById(`ms-${id}`).textContent = ` ${text}`;

fetch(msGithubAPIUrl)
  .then(response => response.json())
  .then(data => {
    console.log(
      `%c ${msOwner}/${msName} Github API Status: %c Good `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch;`,
      data
    );
    const description = data.description || "Coming soon...";
    const starCount = data.stargazers_count || "n/a";
    const watcherCount = data.watchers_count || "n/a";
    const forkCount = data.forks_count || "n/a";
    const lastUpdate = new Date(data.updated_at) || "n/a";
    msSetElement("description", description);
    msSetElement("star-count", starCount);
    msSetElement("watcher-count", watcherCount);
    msSetElement("fork-count", forkCount);
    msSetElement("last-updated", lastUpdate.toLocaleString());
  })
  .catch(error => {
    console.log(
      `%c ${msOwner}/${msName} Github API Status: %c Bad `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #f66; color: #000; padding: 4px; border-radius: 2px;`,
      `margin-left: 1ch;`
    );
    msSetElement("star-count", "n/a");
    msSetElement("watcher-count", "n/a");
    msSetElement("fork-count", "n/a");
    msSetElement("last-updated", "n/a");
  });
