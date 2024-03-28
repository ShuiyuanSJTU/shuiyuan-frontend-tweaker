import { apiInitializer } from "discourse/lib/api";

// eslint-disable-next-line no-unused-vars
export default apiInitializer("0.11.1", api => {
  // Add a class to the html tag if the user is using the TaskCenterApp
  if(window.navigator.userAgent.includes("TaskCenterApp")){
    document.querySelector("html").classList.add("jwb");
  }

  const siteSettings = api._lookupContainer("service:site-settings");
  if (siteSettings.secure_uploads && settings.fix_chat_image_thumbnail) {
    api.modifyClass("component:chat-upload", {
      get imageUrl() {
        if (this.args.upload.thumbnail?.url) {
          const url = new URL(this.args.upload.thumbnail?.url, location.href);
          if (url.host !== location.host) {
            url.host = location.host;
            url.pathname = "/secure-uploads" + url.pathname;
          }
          return url.href;
        } else {
          return this.args.upload.url;
        }
      }
    });
  }
});
