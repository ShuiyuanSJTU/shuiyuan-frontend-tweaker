import { apiInitializer } from "discourse/lib/api";

// eslint-disable-next-line no-unused-vars
export default apiInitializer("0.11.1", api => {
  // Add a class to the html tag if the user is using the TaskCenterApp
  if(window.navigator.userAgent.includes("TaskCenterApp")){
    document.querySelector("html").classList.add("jwb");
  }
});
