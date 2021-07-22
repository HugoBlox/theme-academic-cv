(() => {
  // <stdin>
  (() => {
    var a = Object.assign || function(d2) {
      for (var a2 = 1, b2, c2; a2 < arguments.length; a2++) {
        b2 = arguments[a2];
        for (c2 in b2)
          Object.prototype.hasOwnProperty.call(b2, c2) && (d2[c2] = b2[c2]);
      }
      return d2;
    }, e = function(a2) {
      return a2.tagName === "IMG";
    }, V = function(a2) {
      return NodeList.prototype.isPrototypeOf(a2);
    }, f = function(a2) {
      return a2 && a2.nodeType === 1;
    }, B = function(a2) {
      var b2 = a2.currentSrc || a2.src;
      return b2.substr(-4).toLowerCase() === ".svg";
    }, A = function(a2) {
      try {
        return Array.isArray(a2) ? a2.filter(e) : V(a2) ? [].slice.call(a2).filter(e) : f(a2) ? [a2].filter(e) : typeof a2 == "string" ? [].slice.call(document.querySelectorAll(a2)).filter(e) : [];
      } catch (a3) {
        throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
      }
    }, X = function(b2) {
      var a2 = document.createElement("div");
      return a2.classList.add("medium-zoom-overlay"), a2.style.background = b2, a2;
    }, U = function(c2) {
      var b2 = c2.getBoundingClientRect(), e2 = b2.top, f2 = b2.left, g2 = b2.width, d2 = b2.height, a2 = c2.cloneNode(), h2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, i2 = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      return a2.removeAttribute("id"), a2.style.position = "absolute", a2.style.top = e2 + h2 + "px", a2.style.left = f2 + i2 + "px", a2.style.width = g2 + "px", a2.style.height = d2 + "px", a2.style.transform = "", a2;
    }, c = function(c2, e2) {
      var b2 = a({bubbles: false, cancelable: false, detail: void 0}, e2), d2;
      return typeof window.CustomEvent == "function" ? new CustomEvent(c2, b2) : (d2 = document.createEvent("CustomEvent"), d2.initCustomEvent(c2, b2.bubbles, b2.cancelable, b2.detail), d2);
    }, x = function(j2) {
      var F2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m2 = window.Promise || function(b3) {
        function a2() {
        }
        b3(a2, a2);
      }, E2 = function(b3) {
        var a2 = b3.target;
        if (a2 === k2) {
          h2();
          return;
        }
        if (g2.indexOf(a2) === -1)
          return;
        o2({target: a2});
      }, D2 = function() {
        if (i2 || !b2.original)
          return;
        var a2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        Math.abs(p2 - a2) > d2.scrollOffset && setTimeout(h2, 150);
      }, C2 = function(b3) {
        var a2 = b3.key || b3.keyCode;
        (a2 === "Escape" || a2 === "Esc" || a2 === 27) && h2();
      }, z2 = function() {
        var b3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h3 = b3, i3;
        return b3.background && (k2.style.background = b3.background), b3.container && b3.container instanceof Object && (h3.container = a({}, d2.container, b3.container)), b3.template && (i3 = f(b3.template) ? b3.template : document.querySelector(b3.template), h3.template = i3), d2 = a({}, d2, h3), g2.forEach(function(a2) {
          a2.dispatchEvent(c("medium-zoom:update", {detail: {zoom: e2}}));
        }), e2;
      }, y2 = function() {
        var b3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return x(a({}, d2, b3));
      }, n2 = function() {
        for (var b3 = arguments.length, c2 = Array(b3), a2 = 0, d3; a2 < b3; a2++)
          c2[a2] = arguments[a2];
        return d3 = c2.reduce(function(a3, b4) {
          return [].concat(a3, A(b4));
        }, []), d3.filter(function(a3) {
          return g2.indexOf(a3) === -1;
        }).forEach(function(a3) {
          g2.push(a3), a3.classList.add("medium-zoom-image");
        }), l2.forEach(function(a3) {
          var b4 = a3.type, c3 = a3.listener, e3 = a3.options;
          d3.forEach(function(a4) {
            a4.addEventListener(b4, c3, e3);
          });
        }), e2;
      }, w2 = function() {
        for (var f2 = arguments.length, d3 = Array(f2), a2 = 0, i3; a2 < f2; a2++)
          d3[a2] = arguments[a2];
        return b2.zoomed && h2(), i3 = d3.length > 0 ? d3.reduce(function(a3, b3) {
          return [].concat(a3, A(b3));
        }, []) : g2, i3.forEach(function(a3) {
          a3.classList.remove("medium-zoom-image"), a3.dispatchEvent(c("medium-zoom:detach", {detail: {zoom: e2}}));
        }), g2 = g2.filter(function(a3) {
          return i3.indexOf(a3) === -1;
        }), e2;
      }, s2 = function(a2, b3) {
        var c2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return g2.forEach(function(d3) {
          d3.addEventListener("medium-zoom:" + a2, b3, c2);
        }), l2.push({type: "medium-zoom:" + a2, listener: b3, options: c2}), e2;
      }, r2 = function(a2, b3) {
        var c2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return g2.forEach(function(d3) {
          d3.removeEventListener("medium-zoom:" + a2, b3, c2);
        }), l2 = l2.filter(function(c3) {
          return !(c3.type === "medium-zoom:" + a2 && c3.listener.toString() === b3.toString());
        }), e2;
      }, q2 = function() {
        var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, j3 = n3.target, l3 = function() {
          var c2 = {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0}, e3 = void 0, g3 = void 0, y3, i3, v3, u3, r3, q3, h3, p3, o3, j4, s3, t3, m3, l4, w3, x2, k3, z3, A2, n4;
          d2.container && (d2.container instanceof Object ? (c2 = a({}, c2, d2.container), e3 = c2.width - c2.left - c2.right - d2.margin * 2, g3 = c2.height - c2.top - c2.bottom - d2.margin * 2) : (y3 = f(d2.container) ? d2.container : document.querySelector(d2.container), i3 = y3.getBoundingClientRect(), v3 = i3.width, u3 = i3.height, r3 = i3.left, q3 = i3.top, c2 = a({}, c2, {width: v3, height: u3, left: r3, top: q3}))), e3 = e3 || c2.width - d2.margin * 2, g3 = g3 || c2.height - d2.margin * 2, h3 = b2.zoomedHd || b2.original, p3 = B(h3) ? e3 : h3.naturalWidth || e3, o3 = B(h3) ? g3 : h3.naturalHeight || g3, j4 = h3.getBoundingClientRect(), s3 = j4.top, t3 = j4.left, m3 = j4.width, l4 = j4.height, w3 = Math.min(p3, e3) / m3, x2 = Math.min(o3, g3) / l4, k3 = Math.min(w3, x2), z3 = (-t3 + (e3 - m3) / 2 + d2.margin + c2.left) / k3, A2 = (-s3 + (g3 - l4) / 2 + d2.margin + c2.top) / k3, n4 = "scale(" + k3 + ") translate3d(" + z3 + "px, " + A2 + "px, 0)", b2.zoomed.style.transform = n4, b2.zoomedHd && (b2.zoomedHd.style.transform = n4);
        };
        return new m2(function(a2) {
          var n4, o3, q3, m3, r3;
          if (j3 && g2.indexOf(j3) === -1) {
            a2(e2);
            return;
          }
          if (n4 = function d3() {
            i2 = false, b2.zoomed.removeEventListener("transitionend", d3), b2.original.dispatchEvent(c("medium-zoom:opened", {detail: {zoom: e2}})), a2(e2);
          }, b2.zoomed) {
            a2(e2);
            return;
          }
          if (j3)
            b2.original = j3;
          else if (g2.length > 0)
            o3 = g2, b2.original = o3[0];
          else {
            a2(e2);
            return;
          }
          b2.original.dispatchEvent(c("medium-zoom:open", {detail: {zoom: e2}})), p2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, i2 = true, b2.zoomed = U(b2.original), document.body.appendChild(k2), d2.template && (q3 = f(d2.template) ? d2.template : document.querySelector(d2.template), b2.template = document.createElement("div"), b2.template.appendChild(q3.content.cloneNode(true)), document.body.appendChild(b2.template)), document.body.appendChild(b2.zoomed), window.requestAnimationFrame(function() {
            document.body.classList.add("medium-zoom--opened");
          }), b2.original.classList.add("medium-zoom-image--hidden"), b2.zoomed.classList.add("medium-zoom-image--opened"), b2.zoomed.addEventListener("click", h2), b2.zoomed.addEventListener("transitionend", n4), b2.original.getAttribute("data-zoom-src") ? (b2.zoomedHd = b2.zoomed.cloneNode(), b2.zoomedHd.removeAttribute("srcset"), b2.zoomedHd.removeAttribute("sizes"), b2.zoomedHd.src = b2.zoomed.getAttribute("data-zoom-src"), b2.zoomedHd.onerror = function() {
            clearInterval(m3), console.warn("Unable to reach the zoom image target " + b2.zoomedHd.src), b2.zoomedHd = null, l3();
          }, m3 = setInterval(function() {
            b2.zoomedHd.complete && (clearInterval(m3), b2.zoomedHd.classList.add("medium-zoom-image--opened"), b2.zoomedHd.addEventListener("click", h2), document.body.appendChild(b2.zoomedHd), l3());
          }, 10)) : b2.original.hasAttribute("srcset") ? (b2.zoomedHd = b2.zoomed.cloneNode(), b2.zoomedHd.removeAttribute("sizes"), b2.zoomedHd.removeAttribute("loading"), r3 = b2.zoomedHd.addEventListener("load", function() {
            b2.zoomedHd.removeEventListener("load", r3), b2.zoomedHd.classList.add("medium-zoom-image--opened"), b2.zoomedHd.addEventListener("click", h2), document.body.appendChild(b2.zoomedHd), l3();
          })) : l3();
        });
      }, h2 = function() {
        return new m2(function(a2) {
          if (i2 || !b2.original) {
            a2(e2);
            return;
          }
          var d3 = function d4() {
            b2.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(b2.zoomed), b2.zoomedHd && document.body.removeChild(b2.zoomedHd), document.body.removeChild(k2), b2.zoomed.classList.remove("medium-zoom-image--opened"), b2.template && document.body.removeChild(b2.template), i2 = false, b2.zoomed.removeEventListener("transitionend", d4), b2.original.dispatchEvent(c("medium-zoom:closed", {detail: {zoom: e2}})), b2.original = null, b2.zoomed = null, b2.zoomedHd = null, b2.template = null, a2(e2);
          };
          i2 = true, document.body.classList.remove("medium-zoom--opened"), b2.zoomed.style.transform = "", b2.zoomedHd && (b2.zoomedHd.style.transform = ""), b2.template && (b2.template.style.transition = "opacity 150ms", b2.template.style.opacity = 0), b2.original.dispatchEvent(c("medium-zoom:close", {detail: {zoom: e2}})), b2.zoomed.addEventListener("transitionend", d3);
        });
      }, o2 = function() {
        var a2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c2 = a2.target;
        return b2.original ? h2() : q2({target: c2});
      }, t2 = function() {
        return d2;
      }, u2 = function() {
        return g2;
      }, v2 = function() {
        return b2.original;
      }, g2 = [], l2 = [], i2 = false, p2 = 0, d2 = F2, b2 = {original: null, zoomed: null, zoomedHd: null, template: null}, k2, e2;
      return Object.prototype.toString.call(j2) === "[object Object]" ? d2 = j2 : (j2 || typeof j2 == "string") && n2(j2), d2 = a({margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null}, d2), k2 = X(d2.background), document.addEventListener("click", E2), document.addEventListener("keyup", C2), document.addEventListener("scroll", D2), window.addEventListener("resize", h2), e2 = {open: q2, close: h2, toggle: o2, update: z2, clone: y2, attach: n2, detach: w2, on: s2, off: r2, getOptions: t2, getImages: u2, getZoomedImage: v2}, e2;
    }, R, Q, P, t, E, d, h, p, g, b, w, z, C, W, v;
    function T(c2, d2) {
      var e2, b2, a2;
      if (d2 === void 0 && (d2 = {}), e2 = d2.insertAt, !c2 || typeof document == "undefined")
        return;
      b2 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style"), a2.type = "text/css", e2 === "top" ? b2.firstChild ? b2.insertBefore(a2, b2.firstChild) : b2.appendChild(a2) : b2.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = c2 : a2.appendChild(document.createTextNode(c2));
    }
    R = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}", T(R), Q = x, P = true, t = "production", E = true;
    function q(b2 = false) {
      let a2 = [];
      [].push.apply(a2, document.getElementsByClassName("language-mermaid"));
      for (let d2 = 0; d2 < a2.length; d2++) {
        let e2 = a2[d2], c2 = document.createElement("div");
        c2.innerHTML = e2.innerHTML, c2.classList.add("mermaid"), b2 && window.mermaid.mermaidAPI.render(`mermaid-${d2}`, c2.textContent, function(a3) {
          c2.innerHTML = a3;
        }), e2.parentNode.replaceWith(c2);
      }
      console.debug(`Processed ${a2.length} Mermaid code blocks`);
    }
    function r(a2, d2) {
      const b2 = a2.getBoundingClientRect(), e2 = {height: a2.clientHeight, width: a2.clientWidth}, c2 = d2.getBoundingClientRect(), f2 = c2.top >= b2.top && c2.bottom <= b2.top + e2.height;
      f2 || (a2.scrollTop = c2.top + a2.scrollTop - b2.top);
    }
    function s(a2, d2 = 600) {
      a2.style.display = "", a2.style.opacity = "0";
      let c2 = +new Date(), b2 = function() {
        a2.style.opacity = (+a2.style.opacity + (new Date() - c2) / d2).toString(), c2 = +new Date(), +a2.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(b2) || setTimeout(b2, 16));
      };
      b2();
    }
    d = document.body;
    function u() {
      return parseInt(localStorage.getItem("wcTheme") || 2);
    }
    function l() {
      return Boolean(window.wc.darkLightEnabled);
    }
    function I() {
      if (!l())
        return console.debug("User theming disabled."), {isDarkTheme: window.wc.isSiteThemeDark, themeMode: window.wc.isSiteThemeDark ? 1 : 0};
      console.debug("User theming enabled.");
      let a2, b2 = u();
      switch (console.debug(`User's theme variation: ${b2}`), b2) {
        case 0:
          a2 = false;
          break;
        case 1:
          a2 = true;
          break;
        default:
          window.matchMedia("(prefers-color-scheme: dark)").matches ? a2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? a2 = false : a2 = window.wc.isSiteThemeDark;
          break;
      }
      return a2 && !d.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"), document.body.classList.add("dark")) : !a2 && d.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"), document.body.classList.remove("dark")), {isDarkTheme: a2, themeMode: b2};
    }
    function j(b2) {
      if (!l()) {
        console.debug("Cannot change theme - user theming disabled.");
        return;
      }
      let a2;
      switch (b2) {
        case 0:
          localStorage.setItem("wcTheme", "0"), a2 = false, console.debug("User changed theme variation to Light.");
          break;
          localStorage.setItem("wcTheme", "0"), a2 = false, console.debug("User changed theme variation to Light.");
          break;
        case 1:
          localStorage.setItem("wcTheme", "1"), a2 = true, console.debug("User changed theme variation to Dark.");
          break;
          localStorage.setItem("wcTheme", "1"), a2 = true, console.debug("User changed theme variation to Dark.");
          break;
        default:
          localStorage.setItem("wcTheme", "2"), window.matchMedia("(prefers-color-scheme: dark)").matches ? a2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? a2 = false : a2 = window.wc.isSiteThemeDark, console.debug("User changed theme variation to Auto.");
          break;
          localStorage.setItem("wcTheme", "2"), window.matchMedia("(prefers-color-scheme: dark)").matches ? a2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? a2 = false : a2 = window.wc.isSiteThemeDark, console.debug("User changed theme variation to Auto.");
          break;
      }
      o(a2, b2);
    }
    function F(d2) {
      let a2 = document.querySelector(".js-set-theme-light"), b2 = document.querySelector(".js-set-theme-dark"), c2 = document.querySelector(".js-set-theme-auto");
      if (a2 === null)
        return;
      switch (d2) {
        case 0:
          a2.classList.add("dropdown-item-active"), b2.classList.remove("dropdown-item-active"), c2.classList.remove("dropdown-item-active");
          break;
          a2.classList.add("dropdown-item-active"), b2.classList.remove("dropdown-item-active"), c2.classList.remove("dropdown-item-active");
          break;
        case 1:
          a2.classList.remove("dropdown-item-active"), b2.classList.add("dropdown-item-active"), c2.classList.remove("dropdown-item-active");
          break;
          a2.classList.remove("dropdown-item-active"), b2.classList.add("dropdown-item-active"), c2.classList.remove("dropdown-item-active");
          break;
        default:
          a2.classList.remove("dropdown-item-active"), b2.classList.remove("dropdown-item-active"), c2.classList.add("dropdown-item-active");
          break;
          a2.classList.remove("dropdown-item-active"), b2.classList.remove("dropdown-item-active"), c2.classList.add("dropdown-item-active");
          break;
      }
    }
    function o(a2, h2 = 2, b2 = false) {
      const c2 = document.querySelector("link[title=hl-light]"), e2 = document.querySelector("link[title=hl-dark]"), f2 = c2 !== null || e2 !== null, g2 = document.querySelector("script[title=mermaid]") !== null;
      F(h2);
      const i2 = new CustomEvent("wcThemeChange", {detail: {isDarkTheme: () => a2}});
      if (document.dispatchEvent(i2), !b2) {
        if (a2 === false && !d.classList.contains("dark") || a2 === true && d.classList.contains("dark"))
          return;
      }
      a2 === false ? (b2 || (Object.assign(document.body.style, {opacity: 0, visibility: "visible"}), s(document.body, 600)), d.classList.remove("dark"), f2 && (console.debug("Setting HLJS theme to light"), c2 && (c2.disabled = false), e2 && (e2.disabled = true)), g2 && (console.debug("Initializing Mermaid with light theme"), b2 ? (window.mermaid.initialize({startOnLoad: false, theme: "default", securityLevel: "loose"}), q(true)) : location.reload())) : a2 === true && (b2 || (Object.assign(document.body.style, {opacity: 0, visibility: "visible"}), s(document.body, 600)), d.classList.add("dark"), f2 && (console.debug("Setting HLJS theme to dark"), c2 && (c2.disabled = true), e2 && (e2.disabled = false)), g2 && (console.debug("Initializing Mermaid with dark theme"), b2 ? (window.mermaid.initialize({startOnLoad: false, theme: "dark", securityLevel: "loose"}), q(true)) : location.reload()));
    }
    function H(c2) {
      if (!l())
        return;
      const d2 = c2.matches;
      console.debug(`OS dark mode preference changed to ${d2 ? "\u{1F312} on" : "\u2600\uFE0F off"}.`);
      let b2 = u(), a2;
      b2 === 2 && (window.matchMedia("(prefers-color-scheme: dark)").matches ? a2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? a2 = false : a2 = window.wc.isSiteThemeDark, o(a2, b2));
    }
    console.debug(`Environment: ${t}`);
    function i() {
      let b2 = $("#navbar-main"), a2 = b2.outerHeight();
      return console.debug("Navbar height: " + a2), a2;
    }
    function k(a2, b2 = 0) {
      if (a2 = typeof a2 == "undefined" || typeof a2 == "object" ? decodeURIComponent(window.location.hash) : a2, $(a2).length) {
        a2 = "#" + $.escapeSelector(a2.substring(1));
        let c2 = Math.ceil($(a2).offset().top - i());
        $("body").addClass("scrolling"), $("html, body").animate({scrollTop: c2}, b2, function() {
          $("body").removeClass("scrolling");
        });
      } else
        console.debug("Cannot scroll to target `#" + a2 + "`. ID not found!");
    }
    function D() {
      let a2 = $("body"), b2 = a2.data("bs.scrollspy");
      b2 && (b2._config.offset = i(), a2.data("bs.scrollspy", b2), a2.scrollspy("refresh"));
    }
    function G() {
      if (window.history.replaceState) {
        let a2 = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
        window.history.replaceState({path: a2}, "", a2);
      }
    }
    if (window.addEventListener("hashchange", k), $("#navbar-main li.nav-item a.nav-link, .js-scroll").on("click", function(b2) {
      let a2 = this.hash;
      if (this.pathname === window.location.pathname && a2 && $(a2).length && $(".js-widget-page").length > 0) {
        b2.preventDefault();
        let c2 = Math.ceil($(a2).offset().top - i());
        $("html, body").animate({scrollTop: c2}, 800);
      }
    }), $(document).on("click", ".navbar-collapse.show", function(a2) {
      let b2 = $(a2.target).is("a") ? $(a2.target) : $(a2.target).parent();
      b2.is("a") && b2.attr("class") != "dropdown-toggle" && $(this).collapse("hide");
    }), h = {}, b = $("#container-publications"), b.length) {
      b.isotope({itemSelector: ".isotope-item", percentPosition: true, masonry: {columnWidth: ".grid-sizer"}, filter: function() {
        let a3 = $(this), b2 = !p || a3.text().match(p), c2 = !g || a3.is(g);
        return b2 && c2;
      }});
      let a2 = $(".filter-search").keyup(J(function() {
        p = new RegExp(a2.val(), "gi"), b.isotope();
      }));
      $(".pub-filters").on("change", function() {
        let c2 = $(this), a3 = c2[0].getAttribute("data-filter-group");
        if (h[a3] = this.value, g = y(h), b.isotope(), a3 === "pubtype") {
          let a4 = $(this).val();
          a4.substr(0, 9) === ".pubtype-" ? window.location.hash = a4.substr(9) : window.location.hash = "";
        }
      });
    }
    function J(c2, a2) {
      let b2;
      return a2 = a2 || 100, function() {
        clearTimeout(b2);
        let d2 = arguments, e2 = this;
        function f2() {
          c2.apply(e2, d2);
        }
        b2 = setTimeout(f2, a2);
      };
    }
    function y(a2) {
      let b2 = "";
      for (let c2 in a2)
        b2 += a2[c2];
      return b2;
    }
    function M() {
      if (!b.length)
        return;
      let a2 = window.location.hash.replace("#", ""), c2 = "*";
      a2 != "" && !isNaN(a2) && (c2 = ".pubtype-" + a2);
      let d2 = "pubtype";
      h[d2] = c2, g = y(h), b.isotope(), $(".pubtype-select").val(c2);
    }
    function N() {
      if ($("#map").length) {
        let e2 = $("#map-provider").val(), a2 = $("#map-lat").val(), b2 = $("#map-lng").val(), c2 = parseInt($("#map-zoom").val()), d2 = $("#map-dir").val(), f2 = $("#map-api-key").val();
        if (e2 === "google") {
          let e3 = new GMaps({div: "#map", lat: a2, lng: b2, zoom: c2, zoomControl: true, zoomControlOpt: {style: "SMALL", position: "TOP_LEFT"}, streetViewControl: false, mapTypeControl: false, gestureHandling: "cooperative"});
          e3.addMarker({lat: a2, lng: b2, click: function() {
            let c3 = "https://www.google.com/maps/place/" + encodeURIComponent(d2) + "/@" + a2 + "," + b2 + "/";
            window.open(c3, "_blank");
          }, title: d2});
        } else {
          let g2 = new L.map("map").setView([a2, b2], c2);
          e2 === "mapbox" && f2.length ? L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xA9 <a href="http://mapbox.com">Mapbox</a>', tileSize: 512, maxZoom: 18, zoomOffset: -1, id: "mapbox/streets-v11", accessToken: f2}).addTo(g2) : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(g2);
          let h2 = L.marker([a2, b2]).addTo(g2), i2 = a2 + "," + b2 + "#map=" + c2 + "/" + a2 + "/" + b2 + "&layers=N";
          h2.bindPopup(d2 + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + i2 + '">Routing via OpenStreetMap</a></p>');
        }
      }
    }
    function O(a2, b2) {
      t === "production" && $.getJSON("https://api.github.com/repos/" + b2 + "/tags").done(function(b3) {
        let c2 = b3[0];
        $(a2).append(" " + c2.name);
      }).fail(function(d2, a3, b3) {
        let c2 = a3 + ", " + b3;
        console.log("Request Failed: " + c2);
      });
    }
    function n() {
      $("body").hasClass("searching") ? ($("[id=search-query]").blur(), $("body").removeClass("searching compensate-for-scrollbar"), G(), $("#fancybox-style-noscroll").remove()) : (!$("#fancybox-style-noscroll").length && document.body.scrollHeight > window.innerHeight && ($("head").append('<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>"), $("body").addClass("compensate-for-scrollbar")), $("body").addClass("searching"), $(".search-results").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200), $("#search-query").focus());
    }
    function m() {
      $(".carousel").each(function() {
        let a2 = $(".carousel-item", this);
        a2.css("min-height", 0);
        let b2 = Math.max.apply(null, a2.map(function() {
          return $(this).outerHeight();
        }).get());
        a2.css("min-height", b2 + "px");
      });
    }
    function K() {
      $("#TableOfContents").addClass("nav flex-column"), $("#TableOfContents li").addClass("nav-item"), $("#TableOfContents li a").addClass("nav-link"), $("input[type='checkbox'][disabled]").parents("ul").addClass("task-list");
    }
    function S(a2) {
      return Array.prototype.filter.call(a2.parentNode.children, function(b2) {
        return b2 !== a2;
      });
    }
    $(document).ready(function() {
      K();
      let {isDarkTheme: c2, themeMode: d2} = I();
      o(c2, d2, true), P && hljs.initHighlighting();
      let a2 = document.querySelector(".docs-links .active"), b2 = document.querySelector(".docs-links");
      a2 && b2 && r(b2, a2);
    }), $(window).on("load", function() {
      D();
      let c2 = document.querySelectorAll(".projects-container"), g2 = c2.length;
      window.location.hash && g2 === 0 && k(decodeURIComponent(window.location.hash), 0);
      let d2 = document.querySelector(".docs-toc .nav-link.active"), e2 = document.querySelector(".docs-toc");
      d2 && e2 && r(e2, d2);
      let b2 = {};
      document.body.classList.contains("dark") ? b2.background = "rgba(0,0,0,0.9)" : b2.background = "rgba(255,255,255,0.9)", Q("[data-zoomable]", b2);
      let f2 = 0;
      c2.forEach(function(a3, g3) {
        console.debug(`Loading Isotope instance ${g3}`);
        let e3, b3 = a3.closest("section"), c3 = "";
        b3.querySelector(".isotope").classList.contains("js-layout-row") ? c3 = "fitRows" : c3 = "masonry";
        let f3 = b3.querySelector(".default-project-filter"), d3 = "*";
        f3 !== null && (d3 = f3.textContent), console.debug(`Default Isotope filter: ${d3}`), imagesLoaded(a3, function() {
          e3 = new Isotope(a3, {itemSelector: ".isotope-item", layoutMode: c3, masonry: {gutter: 20}, filter: d3});
          let f4 = b3.querySelectorAll(".project-filters a");
          f4.forEach((a4) => a4.addEventListener("click", (c4) => {
            c4.preventDefault();
            let b4 = a4.getAttribute("data-filter");
            console.debug(`Updating Isotope filter to ${b4}`), e3.arrange({filter: b4}), a4.classList.remove("active"), a4.classList.add("active");
            let d4 = S(a4);
            d4.forEach((a5) => {
              a5.classList.remove("active"), a5.classList.remove("all");
            });
          })), h2();
        });
      });
      function h2() {
        f2++, f2 === g2 && (console.debug(`All Portfolio Isotope instances loaded.`), window.location.hash && k(decodeURIComponent(window.location.hash), 0));
      }
      $(".pub-filters-select") && M(), $(".js-cite-modal").click(function(c3) {
        c3.preventDefault();
        let a3 = $(this).attr("data-filename"), b3 = $("#modal");
        b3.find(".modal-body code").load(a3, function(d3, c4, b4) {
          if (c4 == "error") {
            let a4 = "Error: ";
            $("#modal-error").html(a4 + b4.status + " " + b4.statusText);
          } else
            $(".js-download-cite").attr("href", a3);
        }), b3.modal("show");
      }), $(".js-copy-cite").click(function(b3) {
        b3.preventDefault();
        let a3 = document.createRange(), c3 = document.querySelector("#modal .modal-body");
        a3.selectNode(c3), window.getSelection().addRange(a3);
        try {
          document.execCommand("copy");
        } catch (a4) {
          console.log("Error: citation copy failed.");
        }
        window.getSelection().removeRange(a3);
      }), N();
      let a2 = ".js-github-release";
      $(a2).length > 0 && O(a2, $(a2).data("repo")), document.addEventListener("keyup", (a3) => {
        if (a3.code === "Escape") {
          const a4 = document.body;
          a4.classList.contains("searching") && n();
        }
        if (a3.key === "/") {
          let b3 = document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement || null, c3 = b3 instanceof HTMLInputElement || b3 instanceof HTMLTextAreaElement;
          E && !c3 && (a3.preventDefault(), n());
        }
      }), E && $(".js-search").click(function(a3) {
        a3.preventDefault(), n();
      }), $('[data-toggle="tooltip"]').tooltip();
    }), w = document.querySelector(".js-set-theme-light"), z = document.querySelector(".js-set-theme-dark"), C = document.querySelector(".js-set-theme-auto"), w && z && C && (w.addEventListener("click", (a2) => {
      a2.preventDefault(), j(0);
    }), z.addEventListener("click", (a2) => {
      a2.preventDefault(), j(1);
    }), C.addEventListener("click", (a2) => {
      a2.preventDefault(), j(2);
    })), W = window.matchMedia("(prefers-color-scheme: dark)"), W.addEventListener("change", (a2) => {
      H(a2);
    }), window.addEventListener("load", m), window.addEventListener("resize", m), window.addEventListener("orientationchange", m), $("body").on("mouseenter mouseleave", ".dropdown", function(c2) {
      var a2 = $(c2.target).closest(".dropdown"), b2 = $(".dropdown-menu", a2);
      a2.addClass("show"), b2.addClass("show"), setTimeout(function() {
        a2[a2.is(":hover") ? "addClass" : "removeClass"]("show"), b2[a2.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 300);
    }), $(window).resize(function() {
      clearTimeout(v), v = setTimeout(D, 200);
    });
  })(), (() => {
    var e = {authors: "\u8457\u8005", event: "\u767B\u58C7", post: "\u6295\u7A3F", project: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8", publication: "\u767A\u8868\u6587\u732E", slides: "\u30B9\u30E9\u30A4\u30C9"}, f = {no_results: "\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F", placeholder: "\u691C\u7D22", results: "\u691C\u7D22\u7D50\u679C"}, c = {indexURI: "/index.json", minLength: 1, threshold: 0.3}, d = {shouldSort: true, includeMatches: true, tokenize: true, threshold: c.threshold, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: c.minLength, keys: [{name: "title", weight: 0.99}, {name: "summary", weight: 0.6}, {name: "authors", weight: 0.5}, {name: "content", weight: 0.2}, {name: "tags", weight: 0.5}, {name: "categories", weight: 0.5}]}, a = 60;
    function g(a2) {
      return decodeURIComponent((location.search.split(a2 + "=")[1] || "").split("&")[0]).replace(/\+/g, " ");
    }
    function h(a2) {
      history.replaceState && window.history.replaceState({path: a2}, "", a2);
    }
    function b(b2, c2) {
      let a2 = $("#search-query").val();
      if (a2.length < 1 && ($("#search-hits").empty(), $("#search-common-queries").show()), !b2 && a2.length < d.minMatchCharLength)
        return;
      $("#search-hits").empty(), $("#search-common-queries").hide(), i(a2, c2);
      let e2 = window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(a2) + window.location.hash;
      h(e2);
    }
    function i(b2, c2) {
      let a2 = c2.search(b2);
      a2.length > 0 ? ($("#search-hits").append('<h3 class="mt-0">' + a2.length + " " + f.results + "</h3>"), j(b2, a2)) : $("#search-hits").append('<div class="search-no-results">' + f.no_results + "</div>");
    }
    function j(b2, c2) {
      $.each(c2, function(j2, c3) {
        let f2 = c3.item.section, g2 = "", h2 = "", i2 = [];
        ["publication", "event"].includes(f2) ? g2 = c3.item.summary : g2 = c3.item.content, d.tokenize ? i2.push(b2) : $.each(c3.matches, function(c4, b3) {
          if (b3.key == "content") {
            let c5 = b3.indices[0][0] - a > 0 ? b3.indices[0][0] - a : 0, d2 = b3.indices[0][1] + a < g2.length ? b3.indices[0][1] + a : g2.length;
            h2 += g2.substring(c5, d2), i2.push(b3.value.substring(b3.indices[0][0], b3.indices[0][1] - b3.indices[0][0] + 1));
          }
        }), h2.length < 1 && (h2 += c3.item.summary);
        let l = $("#search-hit-fuse-template").html();
        f2 in e && (f2 = e[f2]);
        let m = {key: j2, title: c3.item.title, type: f2, relpermalink: c3.item.relpermalink, snippet: h2}, n = k(l, m);
        $("#search-hits").append(n), $.each(i2, function(b3, a2) {
          $("#summary-" + j2).mark(a2);
        });
      });
    }
    function k(a2, c2) {
      let b2, d2, e2;
      for (b2 in c2)
        d2 = "\\{\\{\\s*" + b2 + "\\s*\\}\\}", e2 = new RegExp(d2, "g"), a2 = a2.replace(e2, c2[b2]);
      return a2;
    }
    typeof Fuse == "function" && $.getJSON(c.indexURI, function(e2) {
      let a2 = new Fuse(e2, d), c2 = g("q");
      c2 && ($("body").addClass("searching"), $(".search-results").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200), $("#search-query").val(c2), $("#search-query").focus(), b(true, a2)), $("#search-query").keyup(function(c3) {
        clearTimeout($.data(this, "searchTimer")), c3.keyCode == 13 ? b(true, a2) : $(this).data("searchTimer", setTimeout(function() {
          b(false, a2);
        }, 250));
      });
    });
  })(), $(".card-simple").click(function(a) {
    if (!$(a.target).closest("a").length) {
      let a2 = $(this).children(".article-title").children("a").attr("href");
      if (!a2)
        return;
      let b = "{{ $.Site.BaseURL }}", c = /^https?:\/\//i.test(a2), d = !c || a2.startsWith(b);
      d ? location.href = a2 : window.open(a2, "");
    }
  });
})();
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */
/*! Wowchemy v5.1.0 | https://wowchemy.com/ */
