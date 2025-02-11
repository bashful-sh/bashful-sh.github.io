const repoOwner = "bashful-sh";
const repoName = "bashful";
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const starCount = data.stargazers_count;
    const forkCount = data.forks_count;
    const watcherCount = data.subscribers_count;
    document.getElementById("star-count").textContent = starCount;
    document.getElementById("fork-count").textContent = forkCount;
    //document.getElementById("watcher-count").textContent = watcherCount;
  })
  .catch(error => {
    console.error("Error fetching repo info:", error);
    document.getElementById("star-count").textContent = "n/a";
    document.getElementById("fork-count").textContent = "n/a";
    //document.getElementById("watcher-count").textContent = "Error";
  });
