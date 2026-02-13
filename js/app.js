import themeSwitcher from "./lib/theme-switcher.js";
import router from "./route.js";
import lendingApis from "./api/lendings.mock.server.js";

router.start();

lendingApis();

function initializeThemeSwitcher() {
  themeSwitcher();
}
document.addEventListener("DOMContentLoaded", initializeThemeSwitcher);
