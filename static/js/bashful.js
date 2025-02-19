/*  static/js/cmd.js
 *  handles any download and install clone-snippet features.
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
const bashfulSetElement = (id, text) => document.getElementById(id).textContent = ` ${text}`;

fetch(bashfulGithubAPIUrl)
  .then(response => response.json())
  .then(data => {
    console.log(
      `%c ${bashfulOwner}/${bashfulName} Github API Status: %c Good `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch;`
    );
    console.log(data);
    const starCount = data.stargazers_count;
    const watcherCount = data.watchers_count;
    const forkCount = data.forks_count;
    const lastUpdate = new Date(data.updated_at);
    bashfulSetElement("bashful-star-count", starCount);
    bashfulSetElement("bashful-watcher-count", watcherCount);
    bashfulSetElement("bashful-fork-count", forkCount);
    bashfulSetElement("bashful-last-updated", lastUpdate.toLocaleString());
  })
  .catch(error => {
    console.log(
      `%c ${bashfulOwner}/${bashfulName} Github API Status: %c Bad `,
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #f66; color: #000; padding: 4px; border-radius: 2px;`,
      `margin-left: 1ch;`
    );
    console.error(`Error fetching repo info @ ${bashfulGithubAPIUrl}:`, error);
    setElement("bashful-star-count", "n/a");
    setElement("bashful-watcher-count", "n/a");
    setElement("bashful-fork-count", "n/a");
    setElement("bashful-last-updated", "n/a");
  });
