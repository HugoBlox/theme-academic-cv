(() => {
  // <stdin>
  /*! Wowchemy v5.0.0-beta.3 | https://wowchemy.com/ */
  /*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
  /*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */
  (() => {
    var a = document.body, e, f;
    function b() {
      return parseInt(localStorage.getItem("wcTheme") || 2);
    }
    function c() {
      return Boolean(window.wc.darkLightEnabled);
    }
    function d() {
      if (!c())
        return console.debug("User theming disabled."), {isDarkTheme: window.wc.isSiteThemeDark, themeMode: window.wc.isSiteThemeDark ? 1 : 0};
      console.debug("User theming enabled.");
      let d2, e2 = b();
      switch (console.debug(`User's theme variation: ${e2}`), e2) {
        case 0:
          d2 = false;
          break;
        case 1:
          d2 = true;
          break;
        default:
          window.matchMedia("(prefers-color-scheme: dark)").matches ? d2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? d2 = false : d2 = window.wc.isSiteThemeDark;
          break;
      }
      return d2 && !a.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"), document.body.classList.add("dark")) : !d2 && a.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"), document.body.classList.remove("dark")), {isDarkTheme: d2, themeMode: e2};
    }
    e = false, f = true, window.wc = {darkLightEnabled: e, isSiteThemeDark: f}, window.netlifyIdentity && window.netlifyIdentity.on("init", (a2) => {
      a2 || window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }), d(), window.PlotlyConfig = {MathJaxConfig: "local"};
  })();
})();
