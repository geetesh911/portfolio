import { onMount } from "solid-js";
declare const window: any;
const Netlify = () => {
  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
  return <div></div>;
};

export default Netlify;
