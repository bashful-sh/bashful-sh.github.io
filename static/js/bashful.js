/*  static/js/bashful.js
 *  handles bashful project specific functionality.
 */
const cmdSnips = [
  `curl -fsSL https://bashful-sh.github.io/install.sh | bash`,
  `curl -fsSL https://bashful-sh.github.io/install-dev.sh | bash`,
]

const bashfulSelectDownload = () => {
  const el = document.querySelector("#bashful-selected-command");
  el.innerText = cmdSnips[0];

  const del = document.querySelector("#download-cmd-option-bashful");
  del.classList.add("selected");

  const cel = document.querySelector("#clone-cmd-option-bashful");
  cel.classList.remove("selected");
}

const bashfulSelectClone = () => {
  const el = document.querySelector("#bashful-selected-command");
  el.innerText = cmdSnips[1];

  const del = document.querySelector("#download-cmd-option-bashful");
  del.classList.remove("selected");

  const cel = document.querySelector("#clone-cmd-option-bashful");
  cel.classList.add("selected");
}

const bashfulOwner = "bashful-sh";
const bashfulName = "bashful";
const bashfulGithubAPIUrl = `https://api.github.com/repos/${bashfulOwner}/${bashfulName}`;
const bashfulSetElement = (id, text) => document.getElementById(`bashful-${id}`).textContent = ` ${text}`;

fetch(bashfulGithubAPIUrl)
  .then(response => response.json())
  .then(data => {
    console.log(
      `%c ${bashfulOwner}/${bashfulName} Github API Status: %c Good `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch;`,
      data
    );
    const description = data.description;
    const starCount = data.stargazers_count;
    const watcherCount = data.watchers_count;
    const forkCount = data.forks_count;
    const lastUpdate = new Date(data.updated_at);
    bashfulSetElement("description", description);
    bashfulSetElement("star-count", starCount);
    bashfulSetElement("watcher-count", watcherCount);
    bashfulSetElement("fork-count", forkCount);
    bashfulSetElement("last-updated", lastUpdate.toLocaleString());
  })
  .catch(error => {
    console.log(
      `%c ${bashfulOwner}/${bashfulName} Github API Status: %c Bad `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #f66; color: #000; padding: 4px; border-radius: 2px;`,
      `margin-left: 1ch;`
    );
    bashfulSetElement("star-count", "n/a");
    bashfulSetElement("watcher-count", "n/a");
    bashfulSetElement("fork-count", "n/a");
    bashfulSetElement("last-updated", "n/a");
  });
