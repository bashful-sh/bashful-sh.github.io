/*  static/js/project.js
 *  handles any project container functionality.
 */

const openProjectWindow = (el) => el.parentElement.classList.add("selected-project");

const closeProjectWindow = (el) => el.parentElement.classList.remove("selected-project");

const toggleProjectWindow = (el) => {
  if (el.parentElement.classList.contains("selected-project")) {
    closeProjectWindow(el);
  } else {
    openProjectWindow(el);
  }
}
