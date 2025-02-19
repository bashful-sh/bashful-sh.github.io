/*  static/js/bashful.js
 *  handles bashful project specific functionality.
 */

const ccCmdSnips = [
  `coming soon...`,
  `coming soon...`,
]

const ccSelectDownload = (name) => {
  const el = document.querySelector(`#${name}-selected-command`);
  el.innerText = ccCmdSnips[0];

  const del = document.querySelector(`#download-cmd-option-${name}`);
  del.classList.add("selected");

  const cel = document.querySelector(`#clone-cmd-option-${name}`);
  cel.classList.remove("selected");
}

const ccSelectClone = (name) => {
  const el = document.querySelector(`#${name}-selected-command`);
  el.innerText = ccCmdSnips[1];

  const del = document.querySelector(`#download-cmd-option-${name}`);
  del.classList.remove("selected");

  const cel = document.querySelector(`#clone-cmd-option-${name}`);
  cel.classList.add("selected");
}

const ccOwner = "bashful-sh";
const ccName = "custom-cursor";
const ccGithubAPIUrl = `https://api.github.com/repos/${ccOwner}/${ccName}`;
const ccSetElement = (id, text) => document.getElementById(`cc-${id}`).textContent = ` ${text}`;

fetch(ccGithubAPIUrl)
  .then(response => response.json())
  .then(data => {
    console.log(
      `%c ${ccOwner}/${ccName} Github API Status: %c Good `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch;`,
      data
    );
    const description = data.description || "Coming soon...";
    const starCount = data.stargazers_count || "n/a";
    const watcherCount = data.watchers_count || "n/a";
    const forkCount = data.forks_count || "n/a";
    const lastUpdate = new Date(data.updated_at) || "n/a";
    ccSetElement("description", description);
    ccSetElement("star-count", starCount);
    ccSetElement("watcher-count", watcherCount);
    ccSetElement("fork-count", forkCount);
    ccSetElement("last-updated", lastUpdate.toLocaleString());
  })
  .catch(error => {
    console.log(
      `%c ${msOwner}/${msName} Github API Status: %c Bad `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #f66; color: #000; padding: 4px; border-radius: 2px;`,
      `margin-left: 1ch;`
    );
    ccSetElement("star-count", "n/a");
    ccSetElement("watcher-count", "n/a");
    ccSetElement("fork-count", "n/a");
    ccSetElement("last-updated", "n/a");
  });
