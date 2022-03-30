var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/media/ristama/HD Ext/remix/myweb/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MF4HD45A.css";

// app/components/layout/index.tsx
init_react();
var import_react6 = require("react");

// app/components/layout/layout.context.tsx
init_react();
var import_react = require("react");
var defaultContext = {
  useTheme: "theme-indigo",
  setUseTheme: null
};
var LayoutContext = (0, import_react.createContext)(defaultContext);
var LayoutProvider = LayoutContext.Provider;

// app/components/layout/floatcontrol/index.tsx
init_react();
var import_react2 = __toESM(require("react"));

// app/components/dynamicicon/index.tsx
init_react();
var fiIcons = __toESM(require("react-icons/fi"));
var DynamicIcon = (props) => {
  const icons = __objRest(fiIcons, []);
  const TheIcon = icons[props.icon];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TheIcon, {
    className: props.className
  }));
};
var dynamicicon_default = DynamicIcon;

// app/components/layout/floatcontrol/index.tsx
var FloatControl = () => {
  const [openMenu, setOpenMenu] = (0, import_react2.useState)(true);
  const { setUseTheme } = (0, import_react2.useContext)(LayoutContext);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative m-3 h-fit w-fit rounded-full border border-theme-base bg-theme-muted p-1"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setOpenMenu(true);
    },
    className: "peer relative flex h-fit w-fit rounded-full hover:opacity-80"
  }, /* @__PURE__ */ import_react2.default.createElement(dynamicicon_default, {
    icon: "FiSlack",
    className: "h-7 w-7"
  })), openMenu && /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `invisible absolute bottom-[40px] right-0 z-40 mx-2 h-fit max-h-[calc(100vh-74px)] w-fit -translate-x-full 
          flex-row overflow-auto rounded-md border border-theme-base bg-theme-muted px-1 text-center opacity-0 shadow-md transition-all 
          duration-500 hover:visible hover:translate-x-0 hover:opacity-100 peer-focus:visible peer-focus:translate-x-0 peer-focus:opacity-100`,
    "aria-hidden": true
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-sm font-semibold text-theme-strong"
  }, "Theme Color"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-cyan");
    },
    className: "text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-cyan-600 p-1 hover:opacity-80"
  }, "Cyan"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-amber");
    },
    className: "text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-amber-600 p-1 hover:opacity-80"
  }, "Amber"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-indigo");
    },
    className: "text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-indigo-600 p-1 hover:opacity-80"
  }, "Indigo"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-slate");
    },
    className: "text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-slate-600 p-1 hover:opacity-80"
  }, "Slate"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-stone");
    },
    className: "text-md my-1 flex w-24 cursor-pointer justify-center rounded-sm bg-stone-600 p-1 hover:opacity-80"
  }, "Stone")));
};

// app/components/layout/navbar/index.tsx
init_react();
var import_react5 = __toESM(require("react"));

// app/components/layout/navbar/iconmenu/index.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var IconMenu = (props) => {
  const menuItem = props.menuItem;
  const [openMenu, setOpenMenu] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative m-1 flex h-auto w-16 items-center justify-center"
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: (event) => {
      setOpenMenu(true);
    },
    className: "peer relative flex h-fit w-fit rounded-full p-2 hover:scale-95"
  }, /* @__PURE__ */ import_react3.default.createElement(dynamicicon_default, {
    icon: props.icon,
    className: `${props.parentClass}`
  })), menuItem && openMenu && /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "IconMenus",
    className: `invisible absolute top-12 z-40 mx-2 h-auto max-h-[calc(100vh-74px)] w-auto -translate-y-full flex-row overflow-auto rounded-md border  border-theme-base bg-theme-muted pl-2
          pr-9 opacity-0 shadow-md transition-all duration-500 hover:visible hover:translate-y-0 hover:opacity-100 peer-focus:visible
          peer-focus:translate-y-0 peer-focus:opacity-100 ${props.onleft ? "left-0" : "right-0"}`
  }, menuItem.map((item, index) => /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    key: index,
    to: item.href
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: (event) => {
    },
    className: "m-2 flex cursor-pointer items-center text-sm hover:scale-105"
  }, /* @__PURE__ */ import_react3.default.createElement(dynamicicon_default, {
    icon: item.icon,
    className: `${props.childClass}`
  }), item.title)))));
};
var iconmenu_default = IconMenu;

// app/components/layout/navbar/menubar/index.tsx
init_react();

// app/components/layout/navbar/menubar/linkitem/index.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());
var LinkItem = (props) => {
  const spanClass = "absolute h-0 w-full rounded-sm group-hover:h-full transition-all ease-out duration-700";
  return /* @__PURE__ */ import_react4.default.createElement(import_remix3.Link, {
    to: props.href
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    id: "MenuItem",
    className: "group relative flex h-16 w-auto items-center px-2 hover:text-theme-strong active:text-theme-inverted"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: `top-0 left-0 bg-theme-muted/5 ${spanClass}`
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: `bottom-0 left-0 bg-theme-muted/20 ${spanClass}`
  }), props.title));
};
var linkitem_default = LinkItem;

// app/components/layout/navbar/menubar/index.tsx
var MenuBar = (props) => {
  const LinkItems = !props.LinkItems ? [{ href: "/", title: "RISTAMA" }] : props.LinkItems;
  return /* @__PURE__ */ React.createElement("div", {
    id: "MenuBar",
    className: "relative flex h-full w-fit items-center overflow-auto overflow-y-hidden"
  }, LinkItems.map((item, index) => /* @__PURE__ */ React.createElement(linkitem_default, {
    key: index,
    href: item.href,
    title: item.title
  })));
};
var menubar_default = MenuBar;

// app/components/layout/navbar/index.tsx
var NavBar = (props) => {
  const moduleItems = !props.ModuleItems ? {
    icon: "FiCpu"
  } : props.ModuleItems;
  const controlItems = !props.ControlItems ? {
    icon: "FiUser",
    menus: [
      { icon: "FiLogIn", title: "Login", href: "/auth/login" },
      { icon: "FiLogIn", title: "Register", href: "/auth/register" }
    ]
  } : props.ControlItems;
  const menuItems = !props.MenuItems ? [
    { href: "/", title: "Ristamaya" },
    { href: "/share/playground", title: "Playground" },
    { href: "/share/post", title: "Post" },
    { href: "/share/about", title: "About" }
  ] : props.MenuItems;
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    id: "NavBar",
    className: `fixed z-50 flex h-16 w-screen items-center justify-between bg-theme-fill text-theme-base shadow-md`
  }, /* @__PURE__ */ import_react5.default.createElement(iconmenu_default, {
    onleft: true,
    icon: moduleItems.icon,
    parentClass: "w-8 h-8",
    childClass: "w-6 h-6",
    menuItem: moduleItems.menus
  }), /* @__PURE__ */ import_react5.default.createElement(menubar_default, {
    LinkItems: menuItems
  }), /* @__PURE__ */ import_react5.default.createElement(iconmenu_default, {
    onleft: false,
    icon: controlItems.icon,
    parentClass: "w-8 h-8",
    childClass: "w-6 h-6",
    menuItem: controlItems.menus
  }));
};
var navbar_default = NavBar;

// app/components/layout/index.tsx
function Layout({ children }) {
  const [useTheme, setUseTheme] = (0, import_react6.useState)("");
  return /* @__PURE__ */ React.createElement(LayoutProvider, {
    value: { useTheme, setUseTheme }
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${useTheme}`
  }, /* @__PURE__ */ React.createElement(navbar_default, null), /* @__PURE__ */ React.createElement("main", {
    id: "MainContent",
    className: `fixed top-16 z-40 block h-[calc(100%-64px)] w-screen overflow-auto bg-theme-muted`
  }, children), /* @__PURE__ */ React.createElement("div", {
    id: "ThemeChanger",
    className: "absolute bottom-0 right-0 z-50"
  }, /* @__PURE__ */ React.createElement(FloatControl, null))));
}

// route:/media/ristama/HD Ext/remix/myweb/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/walkthroughs/index.tsx
var walkthroughs_exports = {};
__export(walkthroughs_exports, {
  default: () => walkthroughs_default
});
init_react();

// app/components/workonit/index.tsx
init_react();
function WorkOnIt() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-auto mt-3 text-center text-2xl text-theme-strong"
  }, "Sorry, I'm still working on it", /* @__PURE__ */ React.createElement("img", {
    src: "/img/work.png",
    className: "m-auto mt-10 object-cover"
  }));
}
var workonit_default = WorkOnIt;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/walkthroughs/index.tsx
function Walkthrough() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var walkthroughs_default = Walkthrough;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/admin/menus/index.tsx
var menus_exports = {};
__export(menus_exports, {
  default: () => menus_default
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/components/button/index.tsx
init_react();
var import_react7 = __toESM(require("react"));
var Button = (_a) => {
  var _b = _a, {
    label,
    className
  } = _b, props = __objRest(_b, [
    "label",
    "className"
  ]);
  const spanClass = "absolute top-0 h-full w-0 bg-theme-btn-hover/20 group-hover:w-full transition-all ease-out duration-700";
  return /* @__PURE__ */ import_react7.default.createElement("button", __spreadProps(__spreadValues({}, props), {
    className: `group relative m-2 min-h-fit min-w-fit items-center justify-center overflow-hidden rounded-md bg-theme-btn-base px-4 py-1 text-theme-base outline-none active:text-theme-inverted ${className}`
  }), label, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `left-0 ${spanClass}`
  }), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `right-0 ${spanClass}`
  }));
};

// app/components/input/index.tsx
init_react();
var import_react8 = __toESM(require("react"));
var Input = import_react8.default.forwardRef((_a, ref) => {
  var _b = _a, { label, className, inputData, errorMessage } = _b, props = __objRest(_b, ["label", "className", "inputData", "errorMessage"]);
  const [openData, setOpenData] = (0, import_react8.useState)(false);
  const [value, setValue] = (0, import_react8.useState)("");
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "relative m-3 flex h-fit w-fit items-center justify-center"
  }, /* @__PURE__ */ import_react8.default.createElement("input", __spreadProps(__spreadValues({}, props), {
    value,
    onChange: (e) => setValue(e.target.value),
    ref,
    className: `min-w-10 min-h-8 peer relative z-0 my-1 rounded-[4px] border bg-transparent px-1 pt-1 pb-1 text-theme-base outline-none placeholder:text-theme-muted invalid:border-theme-warning disabled:border-theme-base/50 
          ${className} 
          ${errorMessage ? "border-theme-warning" : "border-theme-base"}`
  })), /* @__PURE__ */ import_react8.default.createElement("span", {
    className: `absolute -top-[5px] left-2 z-10 rounded-sm bg-theme-muted px-[2px] text-sm leading-none text-theme-base peer-invalid:text-theme-warning peer-disabled:text-theme-muted 
          ${errorMessage ? "text-theme-warning" : "text-theme-base"}`
  }, label), errorMessage && /* @__PURE__ */ import_react8.default.createElement("span", {
    className: "absolute -top-[5px] right-1 z-10 w-fit rounded-full bg-theme-muted px-[2px] text-sm leading-none text-theme-warning"
  }, errorMessage), inputData && /* @__PURE__ */ import_react8.default.createElement("span", {
    onClick: (e) => setOpenData(!openData),
    className: `absolute right-1 h-fit w-fit cursor-pointer border-l border-theme-base bg-theme-muted text-theme-base`,
    "aria-hidden": true
  }, /* @__PURE__ */ import_react8.default.createElement(dynamicicon_default, {
    icon: "FiChevronLeft",
    className: `${openData && "-rotate-90"} h-6 w-6  transition duration-300`
  })), openData && /* @__PURE__ */ import_react8.default.createElement("div", {
    className: `absolute bottom-[10px] left-0 z-20 w-full translate-y-full flex-row rounded-[4px] border-l border-r border-b border-theme-base bg-theme-muted px-1 py-1 text-left`,
    "aria-hidden": true
  }, inputData == null ? void 0 : inputData.map((item, index) => /* @__PURE__ */ import_react8.default.createElement("div", {
    key: index,
    className: "cursor-pointer pl-1 text-theme-base hover:bg-theme-fill/75",
    onClick: (e) => {
      setValue(item);
      setOpenData(!openData);
    }
  }, item))));
});

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/admin/menus/index.tsx
function Menus() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-theme-mute m-auto my-5 h-fit w-fit rounded-[4px] border border-theme-base px-7 py-8 text-center shadow-md"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-left text-2xl font-semibold text-theme-base"
  }, "Menu Editor"), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement(Input, {
    label: "Menu Role",
    className: "w-full",
    name: "menurole",
    autoComplete: "off",
    inputData: ["public", "private"]
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Menu Type",
    className: "w-full",
    name: "menutype",
    autoComplete: "off",
    inputData: ["menu", "url"]
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Parent",
    className: "w-full",
    name: "parent",
    autoComplete: "off",
    inputData: ["public", "private"]
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Title",
    className: "w-full",
    name: "title",
    autoComplete: "off"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Icon",
    className: "w-full",
    name: "Icon",
    autoComplete: "off"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Path",
    className: "w-full",
    name: "path",
    autoComplete: "off"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Url type",
    className: "w-full",
    name: "pathtype",
    autoComplete: "off",
    inputData: ["internal", "External"]
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Status",
    className: "w-full",
    name: "status",
    autoComplete: "off",
    inputData: ["active", "inactive"]
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "Submit",
    className: "w-auto"
  }))));
}
var menus_default = Menus;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/admin/users/index.tsx
var users_exports = {};
__export(users_exports, {
  default: () => users_default
});
init_react();
function User() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative m-auto my-10 h-auto w-96 flex-row items-center justify-center rounded-md border border-theme-base shadow-md"
  }, /* @__PURE__ */ React.createElement(Input, {
    label: "Email",
    className: "w-full"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Status",
    className: "w-full"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "User Email",
    className: "w-full"
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "save",
    className: "w-16"
  })));
}
var users_default = User;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/myprojects/index.tsx
var myprojects_exports = {};
__export(myprojects_exports, {
  default: () => myprojects_default
});
init_react();
function MyProjects() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var myprojects_default = MyProjects;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var about_default = About;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground.tsx
var playground_exports = {};
__export(playground_exports, {
  default: () => Playground,
  meta: () => meta2
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/components/linkitem/index.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());
var LinkItem2 = (props) => {
  return /* @__PURE__ */ import_react9.default.createElement(import_remix6.Link, {
    to: props.to
  }, /* @__PURE__ */ import_react9.default.createElement("button", {
    id: "MenuItem",
    className: `relative flex items-center active:text-theme-inverted hover:text-theme-strong group ${props.className}`
  }, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "absolute right-0 h-full w-0 bg-theme-muted bg-opacity-20 rounded-sm group-hover:w-[calc(100%+100px)] transition-all ease-out duration-500"
  }), props.title));
};
var linkitem_default2 = LinkItem2;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground.tsx
var meta2 = () => {
  return { title: "Ristamaya|Playground" };
};
function Playground() {
  const classNameLink = "h-9 w-40 font-semibold";
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative z-0 block text-theme-base"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fixed z-20 block h-[calc(100%-64px)] w-32 bg-theme-fill shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-3 mb-6 pl-2 text-xl font-semibold text-theme-strong"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/shared/playground"
  }, "My Stuffs")), /* @__PURE__ */ React.createElement("div", {
    id: "PlaygroundSB",
    className: "relative h-[calc(100%-140px)] overflow-auto overflow-x-hidden pl-2 text-xs font-semibold"
  }, /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./layout",
    title: "Layout",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./input",
    title: "input",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./button",
    title: "Button",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./table",
    title: "Table",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./dynamicicon",
    title: "Dynamic Icon",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./treeview",
    title: "Treeview",
    className: classNameLink
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-2 text-center text-xs font-semibold text-theme-strong"
  }, "React.JS + Tailwind CSS")), /* @__PURE__ */ React.createElement("div", {
    className: "relative left-40 z-10 flex h-auto w-[calc(100%-192px)] p-2"
  }, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/dynamicicon.tsx
var dynamicicon_exports = {};
__export(dynamicicon_exports, {
  default: () => dynamicicon_default2
});
init_react();
function DynamicIcon2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var dynamicicon_default2 = DynamicIcon2;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/formcontrol.tsx
var formcontrol_exports = {};
__export(formcontrol_exports, {
  default: () => formcontrol_default
});
init_react();
function FormControl() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var formcontrol_default = FormControl;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/treeview.tsx
var treeview_exports = {};
__export(treeview_exports, {
  default: () => treeview_default
});
init_react();
function Treeview() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var treeview_default = Treeview;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/button.tsx
var button_exports = {};
__export(button_exports, {
  default: () => button_default
});
init_react();
function Button2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var button_default = Button2;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => layout_default
});
init_react();
function Layout2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var layout_default = Layout2;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/index.tsx
var playground_exports2 = {};
__export(playground_exports2, {
  default: () => playground_default
});
init_react();
function ComponentsShared() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-auto text-center text-4xl"
  }, "Let's explore my UI Components", /* @__PURE__ */ React.createElement("img", {
    src: "/img/playground.png",
    className: "my-6 mx-auto object-fill"
  }), "Just select on left sidebar");
}
var playground_default = ComponentsShared;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/input.tsx
var input_exports = {};
__export(input_exports, {
  default: () => input_default
});
init_react();
function Input2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var input_default = Input2;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/playground/table.tsx
var table_exports = {};
__export(table_exports, {
  default: () => table_default
});
init_react();
function Table() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var table_default = Table;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/post/index.tsx
var post_exports = {};
__export(post_exports, {
  default: () => post_default
});
init_react();
function TutorialShared() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var post_default = TutorialShared;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => register_default,
  loader: () => loader
});
init_react();
var React9 = __toESM(require("react"));
var import_remix9 = __toESM(require_remix());

// app/models/session.server.tsx
init_react();
var import_remix8 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/users.server.tsx
init_react();
var import_bcrypt = __toESM(require("@node-rs/bcrypt"));

// app/utils/db.prisma.tsx
init_react();
var import_client = require("@prisma/client");
var prisma;
if (false) {
  prisma = new import_client.PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new import_client.PrismaClient();
  }
  prisma = global.__db__;
  prisma.$connect();
}

// app/models/users.server.tsx
async function getUserByEmail(useremail) {
  return prisma.users.findUnique({ where: { useremail } });
}
async function createUser(useremail, userpassword) {
  const hashedPassword = await import_bcrypt.default.hash(userpassword, 10);
  return prisma.users.create({
    data: {
      useremail,
      userpassword: hashedPassword,
      createby: "systemjoin"
    }
  });
}
async function verifyLogin(useremail, userpassword) {
  const user = await prisma.users.findUnique({
    where: { useremail }
  });
  if (!user) {
    return null;
  }
  const isValid = await import_bcrypt.default.verify(userpassword, user == null ? void 0 : user.userpassword);
  if (!isValid) {
    return null;
  }
  return user;
}

// app/models/session.server.tsx
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_remix8.createCookieSessionStorage)({
  cookie: {
    name: "__usersession",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: false
  }
});
var USER_SESSION_KEY = "userId";
async function getUserSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix8.redirect)(`/auth/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  const session = await getUserSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_remix8.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}

// app/utils/utils.tsx
init_react();
var import_react10 = require("react");
function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/auth/register.tsx
var loader = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix9.redirect)("/core");
  return (0, import_remix9.json)({});
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const useremail = formData.get("useremail");
  const password = formData.get("password");
  const userpassword = formData.get("userpassword");
  const redirectTo = formData.get("redirectTo");
  if (!validateEmail(useremail)) {
    return (0, import_remix9.json)({ errors: { useremail: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix9.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  const existingUser = await getUserByEmail(useremail);
  if (existingUser) {
    return (0, import_remix9.json)({ errors: { useremail: "Email already exists" } }, { status: 400 });
  }
  if (password.length < 6) {
    return (0, import_remix9.json)({ errors: { password: "Too short" } }, { status: 400 });
  }
  if (userpassword != password) {
    return (0, import_remix9.json)({ errors: { userpassword: "Not Match" } }, { status: 400 });
  }
  const user = await createUser(useremail, userpassword);
  return createUserSession({
    request,
    userId: user.userid,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/core"
  });
};
function Register() {
  var _a, _b, _c;
  const [searchParams] = (0, import_remix9.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  const actionData = (0, import_remix9.useActionData)();
  const emailRef = React9.useRef(null);
  const passwordRef = React9.useRef(null);
  const userpasswordRef = React9.useRef(null);
  React9.useEffect(() => {
    var _a2, _b2, _c2, _d, _e, _f, _g;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.useremail) {
      console.log("asd", (_b2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b2.useremail);
      (_c2 = emailRef.current) == null ? void 0 : _c2.focus();
    } else if ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) {
      (_e = passwordRef.current) == null ? void 0 : _e.focus();
    } else if ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.userpassword) {
      (_g = userpasswordRef.current) == null ? void 0 : _g.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React9.createElement("div", null, /* @__PURE__ */ React9.createElement("div", {
    className: "bg-theme-mute m-auto my-6 h-fit w-fit rounded-md border border-theme-base px-7 py-8 text-center shadow-md"
  }, /* @__PURE__ */ React9.createElement("h1", {
    className: "mb-10 text-xl font-semibold text-theme-base"
  }, "Join To My Experiment"), /* @__PURE__ */ React9.createElement(import_remix9.Form, {
    method: "post"
  }, /* @__PURE__ */ React9.createElement(Input, {
    ref: emailRef,
    id: "useremail",
    type: "text",
    name: "useremail",
    label: "Email",
    autoComplete: "new-useremail",
    className: "w-full",
    errorMessage: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.useremail
  }), /* @__PURE__ */ React9.createElement(Input, {
    ref: passwordRef,
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    errorMessage: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.password,
    className: "w-full"
  }), /* @__PURE__ */ React9.createElement(Input, {
    ref: userpasswordRef,
    id: "userpassword",
    type: "password",
    name: "userpassword",
    label: "Retype Password",
    autoComplete: "new-password",
    errorMessage: (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.userpassword,
    className: "w-full"
  }), /* @__PURE__ */ React9.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React9.createElement(Button, {
    type: "submit",
    label: "Join",
    className: "w-28"
  }), /* @__PURE__ */ React9.createElement("h1", {
    className: "text-sm"
  }, "Or you can", " ", /* @__PURE__ */ React9.createElement(import_remix9.Link, {
    to: "/auth/login",
    className: "text-indigo-500 hover:underline"
  }, "sign in"), " ", "with trail user"))));
}
var register_default = Register;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/share/index.tsx
var share_exports = {};
__export(share_exports, {
  default: () => share_default
});
init_react();
function SharedIndex() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var share_default = SharedIndex;

// route:/media/ristama/HD Ext/remix/myweb/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var React10 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());
var loader2 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix10.redirect)("/core");
  return (0, import_remix10.json)({});
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");
  if (!validateEmail(email)) {
    return (0, import_remix10.json)({ errors: { email: "Invalid email" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix10.json)({ errors: { password: "Require password" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix10.json)({ errors: { password: "It's too short" } }, { status: 400 });
  }
  const user = await verifyLogin(email, password);
  if (!user) {
    return (0, import_remix10.json)({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.userid,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/core"
  });
};
var meta3 = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix10.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") || "/core";
  const actionData = (0, import_remix10.useActionData)();
  const emailRef = React10.useRef(null);
  const passwordRef = React10.useRef(null);
  React10.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React10.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React10.createElement(import_remix10.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React10.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React10.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React10.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React10.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React10.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React10.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React10.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React10.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Log in"), /* @__PURE__ */ React10.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Want to create an account?", " ", /* @__PURE__ */ React10.createElement(import_remix10.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/join",
      search: searchParams.toString()
    }
  }, "Sign up"))))));
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/core/index.tsx
var core_exports = {};
__export(core_exports, {
  default: () => Index,
  loader: () => loader3
});
init_react();
var import_remix11 = __toESM(require_remix());
var loader3 = async ({ request }) => {
  const userId = await requireUserId(request);
  return (0, import_remix11.json)({});
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "MainContent",
    className: "h-screen bg-theme-muted text-9xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:pb-16 sm:pt-8 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative rounded-md shadow-xl sm:overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-full w-full object-contain",
    src: "./img/main.png",
    alt: "Ristamaya"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 bg-theme-fill mix-blend-multiply"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block uppercase text-theme-inverted/75 drop-shadow-md"
  }, "Ristamaya")), /* @__PURE__ */ React.createElement("p", {
    className: "mb-1 text-center text-lg text-theme-inverted drop-shadow-md sm:text-lg"
  }, "Hello there I'm", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold sm:text-2xl lg:text-3xl"
  }, " Anjar Setyo"), ". Thanks a lot for visiting my personal website please take a look what's going on here"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0"
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/core/walkthroughs",
    className: "flex items-center justify-center rounded-md border border-theme-base bg-theme-btn-inverted/90 px-4 py-3 text-base font-medium text-theme-inverted shadow-sm hover:bg-theme-btn-inverted sm:px-8"
  }, "Walkthroughs"))))))));
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader4
});
init_react();
var import_remix13 = __toESM(require_remix());

// app/models/log.server.tsx
init_react();
var import_remix12 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
(0, import_tiny_invariant2.default)(process.env.VISITOR_KEY, "SESSION_SECRET must be set");
var visitorCookie = (0, import_remix12.createCookieSessionStorage)({
  cookie: {
    name: "__visitor",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.VISITOR_KEY],
    secure: false
  }
});
var VISITOR_SESSION_KEY = "IPv4";
async function getVisitorSession(request) {
  const cookie = request.headers.get("Cookie");
  return visitorCookie.getSession(cookie);
}
async function getVisitor(request) {
  const session = await getVisitorSession(request);
  const userId = session.get(VISITOR_SESSION_KEY);
  return userId;
}
async function SetVisitor(request, param) {
  const visitor = await getVisitor(request);
  if (!visitor) {
    const addVisitor = await prisma.visitors.create({
      data: {
        country_code: param.country_code,
        country_name: param.country_name,
        city: param.city,
        postal: param.postal,
        latitude: param.latitude.toString(),
        longitude: param.longitude.toString(),
        IPv4: param.IPv4,
        state: param.state
      }
    });
    const session = await getVisitorSession(request);
    session.set(VISITOR_SESSION_KEY, param.IPv4);
    return (0, import_remix12.json)(addVisitor, {
      headers: {
        "Set-Cookie": await visitorCookie.commitSession(session, {
          maxAge: 60 * 30
        })
      }
    });
  }
  return (0, import_remix12.json)({});
}

// route:/media/ristama/HD Ext/remix/myweb/app/routes/index.tsx
var loader4 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix13.redirect)("/core");
  const response = await fetch("https://geolocation-db.com/json");
  const visitor = await SetVisitor(request, await response.json());
  return visitor;
};
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "MainContent",
    className: "h-screen bg-theme-muted text-9xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:pb-16 sm:pt-8 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative rounded-md shadow-xl sm:overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-full w-full object-contain",
    src: "./img/main.png",
    alt: "Ristamaya"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 bg-theme-fill mix-blend-multiply"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block uppercase text-theme-inverted/75 drop-shadow-md"
  }, "Ristamaya")), /* @__PURE__ */ React.createElement("p", {
    className: "mb-1 text-center text-lg text-theme-inverted drop-shadow-md sm:text-lg"
  }, "Hello there I'm", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold sm:text-2xl lg:text-3xl"
  }, " Anjar Setyo"), ". Thanks a lot for visiting my personal website please take a look what's going on here"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "/share/playground",
    className: "flex items-center justify-center rounded-md border border-theme-base bg-theme-btn-inverted/90 px-4 py-3 text-base font-medium text-theme-inverted shadow-sm hover:bg-theme-btn-inverted sm:px-8"
  }, "Playground"))))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex flex-wrap justify-center gap-8"
  }, [
    {
      src: "./svg/remixjs.svg",
      alt: "Remix JS",
      href: "https://remix.run/"
    },
    {
      src: "./svg/reactjs.svg",
      alt: "React JS",
      href: "https://reactjs.org/"
    },
    {
      src: "./svg/typescript.svg",
      alt: "TypeScript",
      href: "https://typescriptlang.org"
    },
    {
      src: "./svg/tailwindcss.svg",
      alt: "Tailwind CSS",
      href: "https://tailwindcss.com"
    },
    {
      src: "./svg/prisma.svg",
      alt: "Prisma",
      href: "https://prisma.io"
    },
    {
      src: "./svg/mongodb.svg",
      alt: "MongoDB",
      href: "https://www.mongodb.com/"
    },
    {
      src: "./svg/netlify.svg",
      alt: "Netlify",
      href: "https://netlify.com"
    },
    {
      src: "./svg/prettier.svg",
      alt: "Prettier",
      href: "https://prettier.io"
    },
    {
      src: "./svg/eslint.svg",
      alt: "ESLint",
      href: "https://eslint.org"
    },
    {
      src: "./svg/vscode.svg",
      alt: "Visual Studio Code",
      href: "https://code.visualstudio.com/"
    }
  ].map((img) => /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    key: img.href,
    href: img.href,
    className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: img.alt,
    src: img.src
  })))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3dcb41dc", "entry": { "module": "/build/entry.client-J776RSCQ.js", "imports": ["/build/_shared/chunk-3D5IHA6A.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CCM7BUXI.js", "imports": ["/build/_shared/chunk-ZADF5BQF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-ZUMTSX6W.js", "imports": ["/build/_shared/chunk-FGGCKMXM.js", "/build/_shared/chunk-PNLQVVDC.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/register": { "id": "routes/auth/register", "parentId": "root", "path": "auth/register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/register-REIHLTD3.js", "imports": ["/build/_shared/chunk-FGGCKMXM.js", "/build/_shared/chunk-PNLQVVDC.js", "/build/_shared/chunk-SW2VSOEQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/admin/menus/index": { "id": "routes/core/admin/menus/index", "parentId": "root", "path": "core/admin/menus", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/admin/menus/index-222CDLPG.js", "imports": ["/build/_shared/chunk-SW2VSOEQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/admin/users/index": { "id": "routes/core/admin/users/index", "parentId": "root", "path": "core/admin/users", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/admin/users/index-BTLWTIRI.js", "imports": ["/build/_shared/chunk-SW2VSOEQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-MYJEVTD7.js", "imports": ["/build/_shared/chunk-PNLQVVDC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/walkthroughs/index": { "id": "routes/core/walkthroughs/index", "parentId": "root", "path": "core/walkthroughs", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/walkthroughs/index-OTEB6ADB.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-3XIA2VVI.js", "imports": ["/build/_shared/chunk-PNLQVVDC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/about/index": { "id": "routes/share/about/index", "parentId": "root", "path": "share/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/about/index-T2FE2I2G.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/index": { "id": "routes/share/index", "parentId": "root", "path": "share", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/index-EMEMI4D2.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/myprojects/index": { "id": "routes/share/myprojects/index", "parentId": "root", "path": "share/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/myprojects/index-Z6FTHOKY.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground": { "id": "routes/share/playground", "parentId": "root", "path": "share/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground-FGRGPZVT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/button": { "id": "routes/share/playground/button", "parentId": "routes/share/playground", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/button-OGJNRZAU.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/dynamicicon": { "id": "routes/share/playground/dynamicicon", "parentId": "routes/share/playground", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/dynamicicon-NO6JWLA5.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/formcontrol": { "id": "routes/share/playground/formcontrol", "parentId": "routes/share/playground", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/formcontrol-QUA3V7NI.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/index": { "id": "routes/share/playground/index", "parentId": "routes/share/playground", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/share/playground/index-BBDCIFMO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/input": { "id": "routes/share/playground/input", "parentId": "routes/share/playground", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/input-NXTS7H3V.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/layout": { "id": "routes/share/playground/layout", "parentId": "routes/share/playground", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/layout-56VLDS6Z.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/table": { "id": "routes/share/playground/table", "parentId": "routes/share/playground", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/table-WUB5MA76.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/treeview": { "id": "routes/share/playground/treeview", "parentId": "routes/share/playground", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/treeview-FA4MBAZS.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/post/index": { "id": "routes/share/post/index", "parentId": "root", "path": "share/post", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/post/index-PWWNYI4J.js", "imports": ["/build/_shared/chunk-DBFOLY3G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3DCB41DC.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/core/walkthroughs/index": {
    id: "routes/core/walkthroughs/index",
    parentId: "root",
    path: "core/walkthroughs",
    index: true,
    caseSensitive: void 0,
    module: walkthroughs_exports
  },
  "routes/core/admin/menus/index": {
    id: "routes/core/admin/menus/index",
    parentId: "root",
    path: "core/admin/menus",
    index: true,
    caseSensitive: void 0,
    module: menus_exports
  },
  "routes/core/admin/users/index": {
    id: "routes/core/admin/users/index",
    parentId: "root",
    path: "core/admin/users",
    index: true,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/share/myprojects/index": {
    id: "routes/share/myprojects/index",
    parentId: "root",
    path: "share/myprojects",
    index: true,
    caseSensitive: void 0,
    module: myprojects_exports
  },
  "routes/share/about/index": {
    id: "routes/share/about/index",
    parentId: "root",
    path: "share/about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/share/playground": {
    id: "routes/share/playground",
    parentId: "root",
    path: "share/playground",
    index: void 0,
    caseSensitive: void 0,
    module: playground_exports
  },
  "routes/share/playground/dynamicicon": {
    id: "routes/share/playground/dynamicicon",
    parentId: "routes/share/playground",
    path: "dynamicicon",
    index: void 0,
    caseSensitive: void 0,
    module: dynamicicon_exports
  },
  "routes/share/playground/formcontrol": {
    id: "routes/share/playground/formcontrol",
    parentId: "routes/share/playground",
    path: "formcontrol",
    index: void 0,
    caseSensitive: void 0,
    module: formcontrol_exports
  },
  "routes/share/playground/treeview": {
    id: "routes/share/playground/treeview",
    parentId: "routes/share/playground",
    path: "treeview",
    index: void 0,
    caseSensitive: void 0,
    module: treeview_exports
  },
  "routes/share/playground/button": {
    id: "routes/share/playground/button",
    parentId: "routes/share/playground",
    path: "button",
    index: void 0,
    caseSensitive: void 0,
    module: button_exports
  },
  "routes/share/playground/layout": {
    id: "routes/share/playground/layout",
    parentId: "routes/share/playground",
    path: "layout",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/share/playground/index": {
    id: "routes/share/playground/index",
    parentId: "routes/share/playground",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: playground_exports2
  },
  "routes/share/playground/input": {
    id: "routes/share/playground/input",
    parentId: "routes/share/playground",
    path: "input",
    index: void 0,
    caseSensitive: void 0,
    module: input_exports
  },
  "routes/share/playground/table": {
    id: "routes/share/playground/table",
    parentId: "routes/share/playground",
    path: "table",
    index: void 0,
    caseSensitive: void 0,
    module: table_exports
  },
  "routes/share/post/index": {
    id: "routes/share/post/index",
    parentId: "root",
    path: "share/post",
    index: true,
    caseSensitive: void 0,
    module: post_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/share/index": {
    id: "routes/share/index",
    parentId: "root",
    path: "share",
    index: true,
    caseSensitive: void 0,
    module: share_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/core/index": {
    id: "routes/core/index",
    parentId: "root",
    path: "core",
    index: true,
    caseSensitive: void 0,
    module: core_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb290LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29udGV4dC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zsb2F0Y29udHJvbC9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZHluYW1pY2ljb24vaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvaWNvbm1lbnUvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbWVudWJhci9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9jb3JlL3dhbGt0aHJvdWdocy9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvd29ya29uaXQvaW5kZXgudHN4IiwgInJvdXRlOi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL2NvcmUvYWRtaW4vbWVudXMvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudHN4IiwgInJvdXRlOi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL2NvcmUvYWRtaW4vdXNlcnMvaW5kZXgudHN4IiwgInJvdXRlOi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL215cHJvamVjdHMvaW5kZXgudHN4IiwgInJvdXRlOi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9saW5raXRlbS9pbmRleC50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9keW5hbWljaWNvbi50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9mb3JtY29udHJvbC50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC90cmVldmlldy50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9idXR0b24udHN4IiwgInJvdXRlOi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvbGF5b3V0LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2luZGV4LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2lucHV0LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RhYmxlLnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wb3N0L2luZGV4LnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9hdXRoL3JlZ2lzdGVyLnRzeCIsICIuLi8uLi9hcHAvbW9kZWxzL3Nlc3Npb24uc2VydmVyLnRzeCIsICIuLi8uLi9hcHAvbW9kZWxzL3VzZXJzLnNlcnZlci50c3giLCAiLi4vLi4vYXBwL3V0aWxzL2RiLnByaXNtYS50c3giLCAiLi4vLi4vYXBwL3V0aWxzL3V0aWxzLnRzeCIsICJyb3V0ZTovbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9pbmRleC50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3giLCAicm91dGU6L21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9tb2RlbHMvbG9nLnNlcnZlci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyLFxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvY29yZS93YWxrdGhyb3VnaHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL2NvcmUvYWRtaW4vbWVudXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL2NvcmUvYWRtaW4vdXNlcnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL215cHJvamVjdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RyZWV2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9idXR0b24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2xheW91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2lucHV0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC90YWJsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL3NoYXJlL3Bvc3QvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9hdXRoL3JlZ2lzdGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvc2hhcmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCIvbWVkaWEvcmlzdGFtYS9IRCBFeHQvcmVtaXgvbXl3ZWIvYXBwL3JvdXRlcy9hdXRoL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiL21lZGlhL3Jpc3RhbWEvSEQgRXh0L3JlbWl4L215d2ViL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIi9tZWRpYS9yaXN0YW1hL0hEIEV4dC9yZW1peC9teXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS93YWxrdGhyb3VnaHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvcmUvd2Fsa3Rocm91Z2hzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvcmUvd2Fsa3Rocm91Z2hzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9hZG1pbi9tZW51cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9hZG1pbi9tZW51cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlL2FkbWluL21lbnVzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9hZG1pbi91c2Vycy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9hZG1pbi91c2Vycy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlL2FkbWluL3VzZXJzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvbXlwcm9qZWN0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvbXlwcm9qZWN0cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZS9teXByb2plY3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlL2Fib3V0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlL2Fib3V0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZS9wbGF5Z3JvdW5kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJkeW5hbWljaWNvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9mb3JtY29udHJvbFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9mb3JtY29udHJvbFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiZm9ybWNvbnRyb2xcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlL3BsYXlncm91bmQvdHJlZXZpZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlL3BsYXlncm91bmQvdHJlZXZpZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcInRyZWV2aWV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2J1dHRvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9idXR0b25cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImJ1dHRvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlL3BsYXlncm91bmQvbGF5b3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2xheW91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwibGF5b3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9pbnB1dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9pbnB1dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiaW5wdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RhYmxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RhYmxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJ0YWJsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlL3Bvc3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlL3Bvc3QvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmUvcG9zdFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL3JlZ2lzdGVyXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL3JlZ2lzdGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvcmVnaXN0ZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmUvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjBcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPik7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbnRleHRcIjtcbmltcG9ydCB7IEZsb2F0Q29udHJvbCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0L2Zsb2F0Y29udHJvbFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dC9uYXZiYXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFt1c2VUaGVtZSwgc2V0VXNlVGhlbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0UHJvdmlkZXIgdmFsdWU9e3sgdXNlVGhlbWUsIHNldFVzZVRoZW1lIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3VzZVRoZW1lfWB9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxtYWluXG4gICAgICAgICAgaWQ9XCJNYWluQ29udGVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTE2IHotNDAgYmxvY2sgaC1bY2FsYygxMDAlLTY0cHgpXSB3LXNjcmVlbiBvdmVyZmxvdy1hdXRvIGJnLXRoZW1lLW11dGVkYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGlkPVwiVGhlbWVDaGFuZ2VyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB6LTUwXCI+XG4gICAgICAgICAgPEZsb2F0Q29udHJvbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgdGhlbWVDb250ZXh0IHtcbiAgdXNlVGhlbWU6IFN0cmluZztcbiAgc2V0VXNlVGhlbWU6IGFueTtcbn1cblxuY29uc3QgZGVmYXVsdENvbnRleHQgPSB7XG4gIHVzZVRoZW1lOiBcInRoZW1lLWluZGlnb1wiLFxuICBzZXRVc2VUaGVtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx0aGVtZUNvbnRleHQ+KGRlZmF1bHRDb250ZXh0KTtcbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9IExheW91dENvbnRleHQuUHJvdmlkZXI7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHluYW1pY0ljb24gZnJvbSBcIn4vY29tcG9uZW50cy9keW5hbWljaWNvblwiO1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBGbG9hdENvbnRyb2wgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgc2V0VXNlVGhlbWUgfSA9IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tMyBoLWZpdCB3LWZpdCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci10aGVtZS1iYXNlIGJnLXRoZW1lLW11dGVkIHAtMVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInBlZXIgcmVsYXRpdmUgZmxleCBoLWZpdCB3LWZpdCByb3VuZGVkLWZ1bGwgaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljSWNvbiBpY29uPVwiRmlTbGFja1wiIGNsYXNzTmFtZT1cImgtNyB3LTdcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW52aXNpYmxlIGFic29sdXRlIGJvdHRvbS1bNDBweF0gcmlnaHQtMCB6LTQwIG14LTIgaC1maXQgbWF4LWgtW2NhbGMoMTAwdmgtNzRweCldIHctZml0IC10cmFuc2xhdGUteC1mdWxsIFxuICAgICAgICAgIGZsZXgtcm93IG92ZXJmbG93LWF1dG8gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRoZW1lLWJhc2UgYmctdGhlbWUtbXV0ZWQgcHgtMSB0ZXh0LWNlbnRlciBvcGFjaXR5LTAgc2hhZG93LW1kIHRyYW5zaXRpb24tYWxsIFxuICAgICAgICAgIGR1cmF0aW9uLTUwMCBob3Zlcjp2aXNpYmxlIGhvdmVyOnRyYW5zbGF0ZS14LTAgaG92ZXI6b3BhY2l0eS0xMDAgcGVlci1mb2N1czp2aXNpYmxlIHBlZXItZm9jdXM6dHJhbnNsYXRlLXgtMCBwZWVyLWZvY3VzOm9wYWNpdHktMTAwYH1cbiAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXRoZW1lLXN0cm9uZ1wiPlRoZW1lIENvbG9yPC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1jeWFuXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbWQgbXktMSBmbGV4IHctMjQgY3Vyc29yLXBvaW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBiZy1jeWFuLTYwMCBwLTEgaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3lhblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1hbWJlclwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIG15LTEgZmxleCB3LTI0IGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gYmctYW1iZXItNjAwIHAtMSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbWJlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1pbmRpZ29cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBteS0xIGZsZXggdy0yNCBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGJnLWluZGlnby02MDAgcC0xIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluZGlnb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1zbGF0ZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIG15LTEgZmxleCB3LTI0IGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gYmctc2xhdGUtNjAwIHAtMSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTbGF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1zdG9uZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIG15LTEgZmxleCB3LTI0IGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gYmctc3RvbmUtNjAwIHAtMSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdG9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBmaUljb25zIGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG5jb25zdCBEeW5hbWljSWNvbjogRkM8eyBpY29uOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgLi4uaWNvbnMgfSA9IGZpSWNvbnM7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgVGhlSWNvbjogSlNYLkVsZW1lbnQgPSBpY29uc1twcm9wcy5pY29uXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQHRzLWlnbm9yZSAqL31cbiAgICAgIDxUaGVJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbk1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL2ljb25tZW51XCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbWVudWJhclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIG1lbnVJdGVtcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25NZW51SXRlbXMge1xuICBpY29uPzogc3RyaW5nO1xuICBtZW51cz86IG1lbnVJdGVtc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVCYXJJdGVtcyB7XG4gIGhyZWY6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgTmF2QmFyOiBGQzx7XG4gIE1vZHVsZUl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgQ29udHJvbEl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgTWVudUl0ZW1zPzogTWVudUJhckl0ZW1zW107XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtb2R1bGVJdGVtcyA9ICFwcm9wcy5Nb2R1bGVJdGVtc1xuICAgID8ge1xuICAgICAgICBpY29uOiBcIkZpQ3B1XCIsXG4gICAgICB9XG4gICAgOiBwcm9wcy5Nb2R1bGVJdGVtcztcblxuICBjb25zdCBjb250cm9sSXRlbXMgPSAhcHJvcHMuQ29udHJvbEl0ZW1zXG4gICAgPyB7XG4gICAgICAgIGljb246IFwiRmlVc2VyXCIsXG4gICAgICAgIG1lbnVzOiBbXG4gICAgICAgICAgeyBpY29uOiBcIkZpTG9nSW5cIiwgdGl0bGU6IFwiTG9naW5cIiwgaHJlZjogXCIvYXV0aC9sb2dpblwiIH0sXG4gICAgICAgICAgeyBpY29uOiBcIkZpTG9nSW5cIiwgdGl0bGU6IFwiUmVnaXN0ZXJcIiwgaHJlZjogXCIvYXV0aC9yZWdpc3RlclwiIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgOiBwcm9wcy5Db250cm9sSXRlbXM7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gIXByb3BzLk1lbnVJdGVtc1xuICAgID8gW1xuICAgICAgICB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJSaXN0YW1heWFcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlL3BsYXlncm91bmRcIiwgdGl0bGU6IFwiUGxheWdyb3VuZFwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmUvcG9zdFwiLCB0aXRsZTogXCJQb3N0XCIgfSxcbiAgICAgICAgeyBocmVmOiBcIi9zaGFyZS9hYm91dFwiLCB0aXRsZTogXCJBYm91dFwiIH0sXG4gICAgICBdXG4gICAgOiBwcm9wcy5NZW51SXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIk5hdkJhclwiXG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCB6LTUwIGZsZXggaC0xNiB3LXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXRoZW1lLWZpbGwgdGV4dC10aGVtZS1iYXNlIHNoYWRvdy1tZGB9XG4gICAgPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17dHJ1ZX1cbiAgICAgICAgaWNvbj17bW9kdWxlSXRlbXMuaWNvbn1cbiAgICAgICAgcGFyZW50Q2xhc3M9XCJ3LTggaC04XCJcbiAgICAgICAgY2hpbGRDbGFzcz1cInctNiBoLTZcIlxuICAgICAgICBtZW51SXRlbT17bW9kdWxlSXRlbXMubWVudXN9XG4gICAgICAvPlxuXG4gICAgICA8TWVudUJhciBMaW5rSXRlbXM9e21lbnVJdGVtc30gLz5cblxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17ZmFsc2V9XG4gICAgICAgIGljb249e2NvbnRyb2xJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXtjb250cm9sSXRlbXMubWVudXN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL2R5bmFtaWNpY29uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbn1cblxuY29uc3QgSWNvbk1lbnU6IEZDPHtcbiAgb25sZWZ0OiBib29sZWFuO1xuICBpY29uOiBzdHJpbmc7XG4gIHBhcmVudENsYXNzPzogc3RyaW5nO1xuICBjaGlsZENsYXNzOiBzdHJpbmc7XG4gIG1lbnVJdGVtOiBNZW51SXRlbVtdO1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSBwcm9wcy5tZW51SXRlbTtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbS0xIGZsZXggaC1hdXRvIHctMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICBzZXRPcGVuTWVudSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicGVlciByZWxhdGl2ZSBmbGV4IGgtZml0IHctZml0IHJvdW5kZWQtZnVsbCBwLTIgaG92ZXI6c2NhbGUtOTVcIlxuICAgICAgPlxuICAgICAgICA8RHluYW1pY0ljb24gaWNvbj17cHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtgJHtwcm9wcy5wYXJlbnRDbGFzc31gfSAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHttZW51SXRlbSAmJiBvcGVuTWVudSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cIkljb25NZW51c1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW52aXNpYmxlIGFic29sdXRlIHRvcC0xMiB6LTQwIG14LTIgaC1hdXRvIG1heC1oLVtjYWxjKDEwMHZoLTc0cHgpXSB3LWF1dG8gLXRyYW5zbGF0ZS15LWZ1bGwgZmxleC1yb3cgb3ZlcmZsb3ctYXV0byByb3VuZGVkLW1kIGJvcmRlciAgYm9yZGVyLXRoZW1lLWJhc2UgYmctdGhlbWUtbXV0ZWQgcGwtMlxuICAgICAgICAgIHByLTkgb3BhY2l0eS0wIHNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6dmlzaWJsZSBob3Zlcjp0cmFuc2xhdGUteS0wIGhvdmVyOm9wYWNpdHktMTAwIHBlZXItZm9jdXM6dmlzaWJsZVxuICAgICAgICAgIHBlZXItZm9jdXM6dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOm9wYWNpdHktMTAwICR7cHJvcHMub25sZWZ0ID8gXCJsZWZ0LTBcIiA6IFwicmlnaHQtMFwifWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVudUl0ZW0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gdG89e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBzZXRPcGVuTWVudSghb3Blbk1lbnUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0yIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIHRleHQtc20gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljSWNvbiBpY29uPXtpdGVtLmljb259IGNsYXNzTmFtZT17YCR7cHJvcHMuY2hpbGRDbGFzc31gfSAvPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lbnU7XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rSXRlbSBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbWVudWJhci9saW5raXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtTb3VyY2Uge1xuICBocmVmOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lbnVCYXI6IEZDPHsgTGlua0l0ZW1zPzogTGlua1NvdXJjZVtdIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IExpbmtJdGVtcyA9ICFwcm9wcy5MaW5rSXRlbXMgPyBbeyBocmVmOiBcIi9cIiwgdGl0bGU6IFwiUklTVEFNQVwiIH1dIDogcHJvcHMuTGlua0l0ZW1zO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiTWVudUJhclwiXG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtZnVsbCB3LWZpdCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy15LWhpZGRlblwiXG4gICAgPlxuICAgICAge0xpbmtJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaW5rSXRlbSBrZXk9e2luZGV4fSBocmVmPXtpdGVtLmhyZWZ9IHRpdGxlPXtpdGVtLnRpdGxlfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyO1xuIiwgIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5jb25zdCBMaW5rSXRlbTogRkM8eyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3BhbkNsYXNzID1cbiAgICBcImFic29sdXRlIGgtMCB3LWZ1bGwgcm91bmRlZC1zbSBncm91cC1ob3ZlcjpoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLmhyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cIk1lbnVJdGVtXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgZmxleCBoLTE2IHctYXV0byBpdGVtcy1jZW50ZXIgcHgtMiBob3Zlcjp0ZXh0LXRoZW1lLXN0cm9uZyBhY3RpdmU6dGV4dC10aGVtZS1pbnZlcnRlZFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvcC0wIGxlZnQtMCBiZy10aGVtZS1tdXRlZC81ICR7c3BhbkNsYXNzfWB9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYm90dG9tLTAgbGVmdC0wIGJnLXRoZW1lLW11dGVkLzIwICR7c3BhbkNsYXNzfWB9Pjwvc3Bhbj5cblxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBXYWxrdGhyb3VnaCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGt0aHJvdWdoO1xuIiwgImZ1bmN0aW9uIFdvcmtPbkl0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG10LTMgdGV4dC1jZW50ZXIgdGV4dC0yeGwgdGV4dC10aGVtZS1zdHJvbmdcIj5cbiAgICAgIFNvcnJ5LCBJJ20gc3RpbGwgd29ya2luZyBvbiBpdFxuICAgICAgPGltZyBzcmM9XCIvaW1nL3dvcmsucG5nXCIgY2xhc3NOYW1lPVwibS1hdXRvIG10LTEwIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtPbkl0O1xuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9idXR0b25cIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwifi9jb21wb25lbnRzL2lucHV0XCI7XHJcblxyXG5mdW5jdGlvbiBNZW51cygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10aGVtZS1tdXRlIG0tYXV0byBteS01IGgtZml0IHctZml0IHJvdW5kZWQtWzRweF0gYm9yZGVyIGJvcmRlci10aGVtZS1iYXNlIHB4LTcgcHktOCB0ZXh0LWNlbnRlciBzaGFkb3ctbWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC10aGVtZS1iYXNlXCI+TWVudSBFZGl0b3I8L2gxPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTWVudSBSb2xlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgbmFtZT1cIm1lbnVyb2xlXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgaW5wdXREYXRhPXtbXCJwdWJsaWNcIiwgXCJwcml2YXRlXCJdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIk1lbnUgVHlwZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZW51dHlwZVwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIGlucHV0RGF0YT17W1wibWVudVwiLCBcInVybFwiXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXJlbnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFyZW50XCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgaW5wdXREYXRhPXtbXCJwdWJsaWNcIiwgXCJwcml2YXRlXCJdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cInRpdGxlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cclxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkljb25cIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBuYW1lPVwiSWNvblwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXRoXCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cInBhdGhcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXJsIHR5cGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGF0aHR5cGVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBpbnB1dERhdGE9e1tcImludGVybmFsXCIsIFwiRXh0ZXJuYWxcIl19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIGlucHV0RGF0YT17W1wiYWN0aXZlXCIsIFwiaW5hY3RpdmVcIl19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlN1Ym1pdFwiIGNsYXNzTmFtZT1cInctYXV0b1wiIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVzO1xyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbiwgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbjxIVE1MSW5wdXRFbGVtZW50LCBCdXR0b25Qcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBzcGFuQ2xhc3MgPVxuICAgIFwiYWJzb2x1dGUgdG9wLTAgaC1mdWxsIHctMCBiZy10aGVtZS1idG4taG92ZXIvMjAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tYWxsIGVhc2Utb3V0IGR1cmF0aW9uLTcwMFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcmVsYXRpdmUgbS0yIG1pbi1oLWZpdCBtaW4tdy1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLXRoZW1lLWJ0bi1iYXNlIHB4LTQgcHktMSB0ZXh0LXRoZW1lLWJhc2Ugb3V0bGluZS1ub25lIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkICR7Y2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGVmdC0wICR7c3BhbkNsYXNzfWB9Pjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHJpZ2h0LTAgJHtzcGFuQ2xhc3N9YH0+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL2R5bmFtaWNpY29uXCI7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHJlZj86IHt9O1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgaW5wdXREYXRhPzogc3RyaW5nW107XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBJbnB1dFByb3BzPihcbiAgKHsgbGFiZWwsIGNsYXNzTmFtZSwgaW5wdXREYXRhLCBlcnJvck1lc3NhZ2UsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtvcGVuRGF0YSwgc2V0T3BlbkRhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtLTMgZmxleCBoLWZpdCB3LWZpdCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2BtaW4tdy0xMCBtaW4taC04IHBlZXIgcmVsYXRpdmUgei0wIG15LTEgcm91bmRlZC1bNHB4XSBib3JkZXIgYmctdHJhbnNwYXJlbnQgcHgtMSBwdC0xIHBiLTEgdGV4dC10aGVtZS1iYXNlIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LXRoZW1lLW11dGVkIGludmFsaWQ6Ym9yZGVyLXRoZW1lLXdhcm5pbmcgZGlzYWJsZWQ6Ym9yZGVyLXRoZW1lLWJhc2UvNTAgXG4gICAgICAgICAgJHtjbGFzc05hbWV9IFxuICAgICAgICAgICR7ZXJyb3JNZXNzYWdlID8gXCJib3JkZXItdGhlbWUtd2FybmluZ1wiIDogXCJib3JkZXItdGhlbWUtYmFzZVwifWB9XG4gICAgICAgID48L2lucHV0PlxuXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgLXRvcC1bNXB4XSBsZWZ0LTIgei0xMCByb3VuZGVkLXNtIGJnLXRoZW1lLW11dGVkIHB4LVsycHhdIHRleHQtc20gbGVhZGluZy1ub25lIHRleHQtdGhlbWUtYmFzZSBwZWVyLWludmFsaWQ6dGV4dC10aGVtZS13YXJuaW5nIHBlZXItZGlzYWJsZWQ6dGV4dC10aGVtZS1tdXRlZCBcbiAgICAgICAgICAke2Vycm9yTWVzc2FnZSA/IFwidGV4dC10aGVtZS13YXJuaW5nXCIgOiBcInRleHQtdGhlbWUtYmFzZVwifWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLVs1cHhdIHJpZ2h0LTEgei0xMCB3LWZpdCByb3VuZGVkLWZ1bGwgYmctdGhlbWUtbXV0ZWQgcHgtWzJweF0gdGV4dC1zbSBsZWFkaW5nLW5vbmUgdGV4dC10aGVtZS13YXJuaW5nXCI+XG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aW5wdXREYXRhICYmIChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldE9wZW5EYXRhKCFvcGVuRGF0YSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSByaWdodC0xIGgtZml0IHctZml0IGN1cnNvci1wb2ludGVyIGJvcmRlci1sIGJvcmRlci10aGVtZS1iYXNlIGJnLXRoZW1lLW11dGVkIHRleHQtdGhlbWUtYmFzZWB9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RHluYW1pY0ljb25cbiAgICAgICAgICAgICAgaWNvbj1cIkZpQ2hldnJvbkxlZnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29wZW5EYXRhICYmIFwiLXJvdGF0ZS05MFwifSBoLTYgdy02ICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cblxuICAgICAgICB7b3BlbkRhdGEgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGJvdHRvbS1bMTBweF0gbGVmdC0wIHotMjAgdy1mdWxsIHRyYW5zbGF0ZS15LWZ1bGwgZmxleC1yb3cgcm91bmRlZC1bNHB4XSBib3JkZXItbCBib3JkZXItciBib3JkZXItYiBib3JkZXItdGhlbWUtYmFzZSBiZy10aGVtZS1tdXRlZCBweC0xIHB5LTEgdGV4dC1sZWZ0YH1cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbnB1dERhdGE/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcGwtMSB0ZXh0LXRoZW1lLWJhc2UgaG92ZXI6YmctdGhlbWUtZmlsbC83NVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgc2V0T3BlbkRhdGEoIW9wZW5EYXRhKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuIiwgImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvaW5wdXRcIjtcblxuZnVuY3Rpb24gVXNlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtLWF1dG8gbXktMTAgaC1hdXRvIHctOTYgZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10aGVtZS1iYXNlIHNoYWRvdy1tZFwiPlxuICAgICAgICA8SW5wdXQgbGFiZWw9XCJFbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIlN0YXR1c1wiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIlVzZXIgRW1haWxcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxuICAgICAgICA8QnV0dG9uIGxhYmVsPVwic2F2ZVwiIGNsYXNzTmFtZT1cInctMTZcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExpbmtJdGVtIGZyb20gXCJ+L2NvbXBvbmVudHMvbGlua2l0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiUmlzdGFtYXlhfFBsYXlncm91bmRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWdyb3VuZCgpIHtcbiAgY29uc3QgY2xhc3NOYW1lTGluayA9IFwiaC05IHctNDAgZm9udC1zZW1pYm9sZFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgYmxvY2sgdGV4dC10aGVtZS1iYXNlXCI+XG4gICAgICB7LyogU2lkZWJhciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgei0yMCBibG9jayBoLVtjYWxjKDEwMCUtNjRweCldIHctMzIgYmctdGhlbWUtZmlsbCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0zIG1iLTYgcGwtMiB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC10aGVtZS1zdHJvbmdcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9zaGFyZWQvcGxheWdyb3VuZFwiPk15IFN0dWZmczwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwiUGxheWdyb3VuZFNCXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVtjYWxjKDEwMCUtMTQwcHgpXSBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHBsLTIgdGV4dC14cyBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vbGF5b3V0XCIgdGl0bGU9XCJMYXlvdXRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi9pbnB1dFwiIHRpdGxlPVwiaW5wdXRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi9idXR0b25cIiB0aXRsZT1cIkJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL3RhYmxlXCIgdGl0bGU9XCJUYWJsZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2R5bmFtaWNpY29uXCIgdGl0bGU9XCJEeW5hbWljIEljb25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi90cmVldmlld1wiIHRpdGxlPVwiVHJlZXZpZXdcIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTIgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtdGhlbWUtc3Ryb25nXCI+XG4gICAgICAgICAgUmVhY3QuSlMgKyBUYWlsd2luZCBDU1NcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGxlZnQtNDAgei0xMCBmbGV4IGgtYXV0byB3LVtjYWxjKDEwMCUtMTkycHgpXSBwLTJcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IHRvOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKFxuICBwcm9wc1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwICR7cHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1mdWxsIHctMCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6dy1bY2FsYygxMDAlKzEwMHB4KV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNTAwXCI+PC9zcGFuPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBEeW5hbWljSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJY29uO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2w7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHJlZXZpZXcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlldztcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBCdXR0b24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTGF5b3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIENvbXBvbmVudHNTaGFyZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC1jZW50ZXIgdGV4dC00eGxcIj5cbiAgICAgIExldCdzIGV4cGxvcmUgbXkgVUkgQ29tcG9uZW50c1xuICAgICAgPGltZyBzcmM9XCIvaW1nL3BsYXlncm91bmQucG5nXCIgY2xhc3NOYW1lPVwibXktNiBteC1hdXRvIG9iamVjdC1maWxsXCIgLz5cbiAgICAgIEp1c3Qgc2VsZWN0IG9uIGxlZnQgc2lkZWJhclxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIElucHV0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVGFibGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUdXRvcmlhbFNoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsU2hhcmVkO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRm9ybSwgTGluaywgcmVkaXJlY3QsIHVzZVNlYXJjaFBhcmFtcywganNvbiwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIn4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkLCBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L21vZGVscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlciwgZ2V0VXNlckJ5RW1haWwgfSBmcm9tIFwifi9tb2RlbHMvdXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcblxuaW50ZXJmYWNlIEFjdGlvbkRhdGEge1xuICBlcnJvcnM6IHtcbiAgICB1c2VyZW1haWw/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgdXNlcnBhc3N3b3JkPzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICh1c2VySWQpIHJldHVybiByZWRpcmVjdChcIi9jb3JlXCIpO1xuICByZXR1cm4ganNvbih7fSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdXNlcmVtYWlsID0gZm9ybURhdGEuZ2V0KFwidXNlcmVtYWlsXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCB1c2VycGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJ1c2VycGFzc3dvcmRcIik7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtRGF0YS5nZXQoXCJyZWRpcmVjdFRvXCIpO1xuXG4gIGlmICghdmFsaWRhdGVFbWFpbCh1c2VyZW1haWwpKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oeyBlcnJvcnM6IHsgdXNlcmVtYWlsOiBcIkVtYWlsIGlzIGludmFsaWRcIiB9IH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oeyBlcnJvcnM6IHsgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9IH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBnZXRVc2VyQnlFbWFpbCh1c2VyZW1haWwpO1xuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oeyBlcnJvcnM6IHsgdXNlcmVtYWlsOiBcIkVtYWlsIGFscmVhZHkgZXhpc3RzXCIgfSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPih7IGVycm9yczogeyBwYXNzd29yZDogXCJUb28gc2hvcnRcIiB9IH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBpZiAodXNlcnBhc3N3b3JkICE9IHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oeyBlcnJvcnM6IHsgdXNlcnBhc3N3b3JkOiBcIk5vdCBNYXRjaFwiIH0gfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKHVzZXJlbWFpbCwgdXNlcnBhc3N3b3JkKTtcblxuICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24oe1xuICAgIHJlcXVlc3QsXG4gICAgdXNlcklkOiB1c2VyLnVzZXJpZCxcbiAgICByZW1lbWJlcjogZmFsc2UsXG4gICAgcmVkaXJlY3RUbzogdHlwZW9mIHJlZGlyZWN0VG8gPT09IFwic3RyaW5nXCIgPyByZWRpcmVjdFRvIDogXCIvY29yZVwiLFxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZWRpcmVjdFRvID0gc2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IGVtYWlsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgdXNlcnBhc3N3b3JkUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbkRhdGE/LmVycm9ycz8udXNlcmVtYWlsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFzZFwiLCBhY3Rpb25EYXRhPy5lcnJvcnM/LnVzZXJlbWFpbCk7XG4gICAgICBlbWFpbFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCkge1xuICAgICAgcGFzc3dvcmRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbkRhdGE/LmVycm9ycz8udXNlcnBhc3N3b3JkKSB7XG4gICAgICB1c2VycGFzc3dvcmRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10aGVtZS1tdXRlIG0tYXV0byBteS02IGgtZml0IHctZml0IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10aGVtZS1iYXNlIHB4LTcgcHktOCB0ZXh0LWNlbnRlciBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXRoZW1lLWJhc2VcIj5Kb2luIFRvIE15IEV4cGVyaW1lbnQ8L2gxPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgaWQ9XCJ1c2VyZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy11c2VyZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17YWN0aW9uRGF0YT8uZXJyb3JzPy51c2VyZW1haWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlZj17cGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2FjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICByZWY9e3VzZXJwYXNzd29yZFJlZn1cbiAgICAgICAgICAgIGlkPVwidXNlcnBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcnBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmV0eXBlIFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2FjdGlvbkRhdGE/LmVycm9ycz8udXNlcnBhc3N3b3JkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVkaXJlY3RUb1wiIHZhbHVlPXtyZWRpcmVjdFRvfSAvPlxuXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJKb2luXCIgY2xhc3NOYW1lPVwidy0yOFwiIC8+XG5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgT3IgeW91IGNhbntcIiBcIn1cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2F1dGgvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgIHNpZ24gaW5cbiAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICB3aXRoIHRyYWlsIHVzZXJcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXJzIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlckJ5SWQgfSBmcm9tIFwifi9tb2RlbHMvdXNlcnMuc2VydmVyXCI7XG5cbmludmFyaWFudChwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCwgXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIl9fdXNlcnNlc3Npb25cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IDAsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5jb25zdCBVU0VSX1NFU1NJT05fS0VZID0gXCJ1c2VySWRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgY29va2llID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKTtcbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oY29va2llKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChVU0VSX1NFU1NJT05fS0VZKTtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8bnVsbCB8IFVzZXJzPiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKHVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQodXNlcklkKTtcbiAgaWYgKHVzZXIpIHJldHVybiB1c2VyO1xuXG4gIHRocm93IGF3YWl0IGxvZ291dChyZXF1ZXN0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICghdXNlcklkKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgIHRocm93IHJlZGlyZWN0KGAvYXV0aC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlJZCh1c2VySWQpO1xuICBpZiAodXNlcikgcmV0dXJuIHVzZXI7XG5cbiAgdGhyb3cgYXdhaXQgbG9nb3V0KHJlcXVlc3QpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24oe1xuICByZXF1ZXN0LFxuICB1c2VySWQsXG4gIHJlbWVtYmVyLFxuICByZWRpcmVjdFRvLFxufToge1xuICByZXF1ZXN0OiBSZXF1ZXN0O1xuICB1c2VySWQ6IHN0cmluZztcbiAgcmVtZW1iZXI6IGJvb2xlYW47XG4gIHJlZGlyZWN0VG86IHN0cmluZztcbn0pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBzZXNzaW9uLnNldChVU0VSX1NFU1NJT05fS0VZLCB1c2VySWQpO1xuICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzZXNzaW9uU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24sIHtcbiAgICAgICAgbWF4QWdlOiByZW1lbWJlclxuICAgICAgICAgID8gNjAgKiA2MCAqIDI0ICogNyAvLyA3IGRheXNcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBVc2VycyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiQG5vZGUtcnMvYmNyeXB0XCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi91dGlscy9kYi5wcmlzbWFcIjtcblxuZXhwb3J0IHR5cGUgeyBVc2VycyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQodXNlcmlkOiBVc2Vyc1tcInVzZXJpZFwiXSkge1xuICByZXR1cm4gcHJpc21hLnVzZXJzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VyaWQgfSB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUVtYWlsKHVzZXJlbWFpbDogVXNlcnNbXCJ1c2VyZW1haWxcIl0pIHtcbiAgcmV0dXJuIHByaXNtYS51c2Vycy5maW5kVW5pcXVlKHsgd2hlcmU6IHsgdXNlcmVtYWlsIH0gfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKFxuICB1c2VyZW1haWw6IFVzZXJzW1widXNlcmVtYWlsXCJdLFxuICB1c2VycGFzc3dvcmQ6IFVzZXJzW1widXNlcnBhc3N3b3JkXCJdXG4pIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh1c2VycGFzc3dvcmQsIDEwKTtcblxuICByZXR1cm4gcHJpc21hLnVzZXJzLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdXNlcmVtYWlsOiB1c2VyZW1haWwsXG4gICAgICB1c2VycGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgY3JlYXRlYnk6IFwic3lzdGVtam9pblwiLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5TG9naW4oXG4gIHVzZXJlbWFpbDogVXNlcnNbXCJ1c2VyZW1haWxcIl0sXG4gIHVzZXJwYXNzd29yZDogVXNlcnNbXCJ1c2VycGFzc3dvcmRcIl1cbikge1xuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHVzZXJlbWFpbCB9LFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQudmVyaWZ5KHVzZXJwYXNzd29yZCwgdXNlcj8udXNlcnBhc3N3b3JkKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiX186IFByaXNtYUNsaWVudDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbi8vIGluIHByb2R1Y3Rpb24gd2UnbGwgaGF2ZSBhIHNpbmdsZSBjb25uZWN0aW9uIHRvIHRoZSBEQi5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYl9fKSB7XG4gICAgZ2xvYmFsLl9fZGJfXyA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuX19kYl9fO1xuICBwcmlzbWEuJGNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IHsgcHJpc21hIH07XG4iLCAiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWF0Y2hlcyB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgdHlwZSB7IFVzZXJzIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXJzLnNlcnZlclwiO1xuXG4vKipcbiAqIFRoaXMgYmFzZSBob29rIGlzIHVzZWQgaW4gb3RoZXIgaG9va3MgdG8gcXVpY2tseSBzZWFyY2ggZm9yIHNwZWNpZmljIGRhdGFcbiAqIGFjcm9zcyBhbGwgbG9hZGVyIGRhdGEgdXNpbmcgdXNlTWF0Y2hlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm91dGUgaWRcbiAqIEByZXR1cm5zIHtKU09OfHVuZGVmaW5lZH0gVGhlIHJvdXRlciBkYXRhIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hdGNoZXNEYXRhKGlkOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoaW5nUm91dGVzID0gdXNlTWF0Y2hlcygpO1xuICBjb25zdCByb3V0ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbWF0Y2hpbmdSb3V0ZXMuZmluZCgocm91dGUpID0+IHJvdXRlLmlkID09PSBpZCksXG4gICAgW21hdGNoaW5nUm91dGVzLCBpZF1cbiAgKTtcbiAgcmV0dXJuIHJvdXRlPy5kYXRhO1xufVxuXG5mdW5jdGlvbiBpc1VzZXIodXNlcjogYW55KTogdXNlciBpcyBVc2VycyB7XG4gIHJldHVybiB1c2VyICYmIHR5cGVvZiB1c2VyID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB1c2VyLmVtYWlsID09PSBcInN0cmluZ1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlT3B0aW9uYWxVc2VyKCk6IFVzZXJzIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZGF0YSA9IHVzZU1hdGNoZXNEYXRhKFwicm9vdFwiKTtcbiAgaWYgKCFkYXRhIHx8ICFpc1VzZXIoZGF0YS51c2VyKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGRhdGEudXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKTogVXNlcnMge1xuICBjb25zdCBtYXliZVVzZXIgPSB1c2VPcHRpb25hbFVzZXIoKTtcbiAgaWYgKCFtYXliZVVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIk5vIHVzZXIgZm91bmQgaW4gcm9vdCBsb2FkZXIsIGJ1dCB1c2VyIGlzIHJlcXVpcmVkIGJ5IHVzZVVzZXIuIElmIHVzZXIgaXMgb3B0aW9uYWwsIHRyeSB1c2VPcHRpb25hbFVzZXIgaW5zdGVhZC5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG1heWJlVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHVua25vd24pOiBlbWFpbCBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIGVtYWlsID09PSBcInN0cmluZ1wiICYmIGVtYWlsLmxlbmd0aCA+IDMgJiYgZW1haWwuaW5jbHVkZXMoXCJAXCIpO1xufVxuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFNoYXJlZEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVkSW5kZXg7XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgRm9ybSwganNvbiwgTGluaywgdXNlQWN0aW9uRGF0YSwgcmVkaXJlY3QsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgZ2V0VXNlcklkIH0gZnJvbSBcIn4vbW9kZWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IHZlcmlmeUxvZ2luIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXJzLnNlcnZlclwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xyXG4gIGlmICh1c2VySWQpIHJldHVybiByZWRpcmVjdChcIi9jb3JlXCIpO1xyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmludGVyZmFjZSBBY3Rpb25EYXRhIHtcclxuICBlcnJvcnM/OiB7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKTtcclxuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtRGF0YS5nZXQoXCJyZWRpcmVjdFRvXCIpO1xyXG4gIGNvbnN0IHJlbWVtYmVyID0gZm9ybURhdGEuZ2V0KFwicmVtZW1iZXJcIik7XHJcblxyXG4gIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcclxuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KHsgZXJyb3JzOiB7IGVtYWlsOiBcIkludmFsaWQgZW1haWxcIiB9IH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPih7IGVycm9yczogeyBwYXNzd29yZDogXCJSZXF1aXJlIHBhc3N3b3JkXCIgfSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KHsgZXJyb3JzOiB7IHBhc3N3b3JkOiBcIkl0J3MgdG9vIHNob3J0XCIgfSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHZlcmlmeUxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oeyBlcnJvcnM6IHsgZW1haWw6IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH0gfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih7XHJcbiAgICByZXF1ZXN0LFxyXG4gICAgdXNlcklkOiB1c2VyLnVzZXJpZCxcclxuICAgIHJlbWVtYmVyOiByZW1lbWJlciA9PT0gXCJvblwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgcmVkaXJlY3RUbzogdHlwZW9mIHJlZGlyZWN0VG8gPT09IFwic3RyaW5nXCIgPyByZWRpcmVjdFRvIDogXCIvY29yZVwiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiTG9naW5cIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgcmVkaXJlY3RUbyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL2NvcmVcIjtcclxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XHJcbiAgY29uc3QgZW1haWxSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCkge1xyXG4gICAgICBlbWFpbFJlZi5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LnBhc3N3b3JkKSB7XHJcbiAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGlvbkRhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctbWQgcHgtOFwiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbWFpbFJlZn1cclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsID8gdHJ1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbC1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHB4LTIgcHktMSB0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cImVtYWlsLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnM/LnBhc3N3b3JkID8gdHJ1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZC1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHB4LTIgcHktMSB0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnM/LnBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cInBhc3N3b3JkLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVkaXJlY3RUb1wiIHZhbHVlPXtyZWRpcmVjdFRvfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYmctYmx1ZS01MDAgIHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOmJnLWJsdWUtNDAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgV2FudCB0byBjcmVhdGUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgIHRvPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9qb2luXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGpzb24sIExpbmssIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L21vZGVscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICByZXR1cm4ganNvbih7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiTWFpbkNvbnRlbnRcIiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy10aGVtZS1tdXRlZCB0ZXh0LTl4bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpwYi0xNiBzbTpwdC04IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1tZCBzaGFkb3cteGwgc206b3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb250YWluXCIgc3JjPVwiLi9pbWcvbWFpbi5wbmdcIiBhbHQ9XCJSaXN0YW1heWFcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctdGhlbWUtZmlsbCBtaXgtYmxlbmQtbXVsdGlwbHlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnBiLTE4IHJlbGF0aXZlIHB4LTQgcHQtMTYgcGItOCBzbTpweC02IHNtOnB0LTI0IHNtOnBiLTE0IGxnOnB4LTggbGc6cHQtMzJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtOHhsIGxnOnRleHQtOXhsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtdGhlbWUtaW52ZXJ0ZWQvNzUgZHJvcC1zaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICAgIFJpc3RhbWF5YVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtdGhlbWUtaW52ZXJ0ZWQgZHJvcC1zaGFkb3ctbWQgc206dGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIEhlbGxvIHRoZXJlIEknbVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgc206dGV4dC0yeGwgbGc6dGV4dC0zeGxcIj4gQW5qYXIgU2V0eW88L3NwYW4+LiBUaGFua3NcbiAgICAgICAgICAgICAgICBhIGxvdCBmb3IgdmlzaXRpbmcgbXkgcGVyc29uYWwgd2Vic2l0ZSBwbGVhc2UgdGFrZSBhIGxvb2sgd2hhdCdzIGdvaW5nIG9uIGhlcmVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtMTAgbWF4LXctc20gc206ZmxleCBzbTptYXgtdy1ub25lIHNtOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgc206bXgtYXV0byBzbTppbmxpbmUtZ3JpZCBzbTpncmlkLWNvbHMtMSBzbTpnYXAtNSBzbTpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL2NvcmUvd2Fsa3Rocm91Z2hzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRoZW1lLWJhc2UgYmctdGhlbWUtYnRuLWludmVydGVkLzkwIHB4LTQgcHktMyB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC10aGVtZS1pbnZlcnRlZCBzaGFkb3ctc20gaG92ZXI6YmctdGhlbWUtYnRuLWludmVydGVkIHNtOnB4LThcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBXYWxrdGhyb3VnaHNcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L21vZGVscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgU2V0VmlzaXRvciwgdmlzaXRvckNvb2tpZSB9IGZyb20gXCJ+L21vZGVscy9sb2cuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKHVzZXJJZCkgcmV0dXJuIHJlZGlyZWN0KFwiL2NvcmVcIik7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uXCIpO1xuICBjb25zdCB2aXNpdG9yID0gYXdhaXQgU2V0VmlzaXRvcihyZXF1ZXN0LCBhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICByZXR1cm4gdmlzaXRvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJNYWluQ29udGVudFwiIGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLXRoZW1lLW11dGVkIHRleHQtOXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOnBiLTE2IHNtOnB0LTggXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLW1kIHNoYWRvdy14bCBzbTpvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiBzcmM9XCIuL2ltZy9tYWluLnBuZ1wiIGFsdD1cIlJpc3RhbWF5YVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy10aGVtZS1maWxsIG1peC1ibGVuZC1tdWx0aXBseVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6cGItMTggcmVsYXRpdmUgcHgtNCBwdC0xNiBwYi04IHNtOnB4LTYgc206cHQtMjQgc206cGItMTQgbGc6cHgtOCBsZzpwdC0zMlwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC02eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgc206dGV4dC04eGwgbGc6dGV4dC05eGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdGV4dC10aGVtZS1pbnZlcnRlZC83NSBkcm9wLXNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgUmlzdGFtYXlhXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC10aGVtZS1pbnZlcnRlZCBkcm9wLXNoYWRvdy1tZCBzbTp0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgSGVsbG8gdGhlcmUgSSdtXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bFwiPiBBbmphciBTZXR5bzwvc3Bhbj4uIFRoYW5rc1xuICAgICAgICAgICAgICAgIGEgbG90IGZvciB2aXNpdGluZyBteSBwZXJzb25hbCB3ZWJzaXRlIHBsZWFzZSB0YWtlIGEgbG9vayB3aGF0J3MgZ29pbmcgb24gaGVyZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xMCBtYXgtdy1zbSBzbTpmbGV4IHNtOm1heC13LW5vbmUgc206anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpteC1hdXRvIHNtOmlubGluZS1ncmlkIHNtOmdyaWQtY29scy0xIHNtOmdhcC01IHNtOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc2hhcmUvcGxheWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10aGVtZS1iYXNlIGJnLXRoZW1lLWJ0bi1pbnZlcnRlZC85MCBweC00IHB5LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtdGhlbWUtaW52ZXJ0ZWQgc2hhZG93LXNtIGhvdmVyOmJnLXRoZW1lLWJ0bi1pbnZlcnRlZCBzbTpweC04XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUGxheWdyb3VuZFxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB5LTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiLi9zdmcvcmVtaXhqcy5zdmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiUmVtaXggSlNcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vcmVtaXgucnVuL1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiBcIi4vc3ZnL3JlYWN0anMuc3ZnXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlJlYWN0IEpTXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3JlYWN0anMub3JnL1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiBcIi4vc3ZnL3R5cGVzY3JpcHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlR5cGVTY3JpcHRcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vdHlwZXNjcmlwdGxhbmcub3JnXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiLi9zdmcvdGFpbHdpbmRjc3Muc3ZnXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIuL3N2Zy9wcmlzbWEuc3ZnXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlByaXNtYVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9wcmlzbWEuaW9cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIuL3N2Zy9tb25nb2RiLnN2Z1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJNb25nb0RCXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5tb25nb2RiLmNvbS9cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIuL3N2Zy9uZXRsaWZ5LnN2Z1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJOZXRsaWZ5XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL25ldGxpZnkuY29tXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiLi9zdmcvcHJldHRpZXIuc3ZnXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlByZXR0aWVyXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3ByZXR0aWVyLmlvXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiLi9zdmcvZXNsaW50LnN2Z1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJFU0xpbnRcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZXNsaW50Lm9yZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiBcIi4vc3ZnL3ZzY29kZS5zdmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2NvZGUudmlzdWFsc3R1ZGlvLmNvbS9cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0ubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAga2V5PXtpbWcuaHJlZn1cbiAgICAgICAgICAgICAgICBocmVmPXtpbWcuaHJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMTYgdy0zMiBqdXN0aWZ5LWNlbnRlciBwLTEgZ3JheXNjYWxlIHRyYW5zaXRpb24gaG92ZXI6Z3JheXNjYWxlLTAgZm9jdXM6Z3JheXNjYWxlLTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9e2ltZy5hbHR9IHNyYz17aW1nLnNyY30gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi91dGlscy9kYi5wcmlzbWFcIjtcblxuaW52YXJpYW50KHByb2Nlc3MuZW52LlZJU0lUT1JfS0VZLCBcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpO1xuXG5leHBvcnQgY29uc3QgdmlzaXRvckNvb2tpZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Zpc2l0b3JcIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IDAsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LlZJU0lUT1JfS0VZXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5jb25zdCBWSVNJVE9SX1NFU1NJT05fS0VZID0gXCJJUHY0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXNpdG9yU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGNvb2tpZSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIik7XG4gIHJldHVybiB2aXNpdG9yQ29va2llLmdldFNlc3Npb24oY29va2llKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFZpc2l0b3JTZXNzaW9uKHsgcmVxdWVzdCwgaXAgfTogeyByZXF1ZXN0OiBSZXF1ZXN0OyBpcDogc3RyaW5nIH0pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFZpc2l0b3JTZXNzaW9uKHJlcXVlc3QpO1xuICBzZXNzaW9uLnNldChWSVNJVE9SX1NFU1NJT05fS0VZLCBpcCk7XG4gIGF3YWl0IHZpc2l0b3JDb29raWUuY29tbWl0U2Vzc2lvbihzZXNzaW9uLCB7XG4gICAgbWF4QWdlOiA2MCAqIDYwICogMzAsXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmlzaXRvcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFZpc2l0b3JTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChWSVNJVE9SX1NFU1NJT05fS0VZKTtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuaW50ZXJmYWNlIGxvZ0RhdGEge1xuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgY291bnRyeV9uYW1lOiBzdHJpbmc7XG4gIGNpdHk6IHN0cmluZztcbiAgcG9zdGFsOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBzdHJpbmc7XG4gIGxvbmdpdHVkZTogc3RyaW5nO1xuICBJUHY0OiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBTZXRWaXNpdG9yKHJlcXVlc3Q6IFJlcXVlc3QsIHBhcmFtOiBsb2dEYXRhKSB7XG4gIGNvbnN0IHZpc2l0b3IgPSBhd2FpdCBnZXRWaXNpdG9yKHJlcXVlc3QpO1xuICBpZiAoIXZpc2l0b3IpIHtcbiAgICBjb25zdCBhZGRWaXNpdG9yID0gYXdhaXQgcHJpc21hLnZpc2l0b3JzLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvdW50cnlfY29kZTogcGFyYW0uY291bnRyeV9jb2RlLFxuICAgICAgICBjb3VudHJ5X25hbWU6IHBhcmFtLmNvdW50cnlfbmFtZSxcbiAgICAgICAgY2l0eTogcGFyYW0uY2l0eSxcbiAgICAgICAgcG9zdGFsOiBwYXJhbS5wb3N0YWwsXG4gICAgICAgIGxhdGl0dWRlOiBwYXJhbS5sYXRpdHVkZS50b1N0cmluZygpLFxuICAgICAgICBsb25naXR1ZGU6IHBhcmFtLmxvbmdpdHVkZS50b1N0cmluZygpLFxuICAgICAgICBJUHY0OiBwYXJhbS5JUHY0LFxuICAgICAgICBzdGF0ZTogcGFyYW0uc3RhdGUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFZpc2l0b3JTZXNzaW9uKHJlcXVlc3QpO1xuICAgIHNlc3Npb24uc2V0KFZJU0lUT1JfU0VTU0lPTl9LRVksIHBhcmFtLklQdjQpO1xuXG4gICAgcmV0dXJuIGpzb24oYWRkVmlzaXRvciwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgdmlzaXRvckNvb2tpZS5jb21taXRTZXNzaW9uKHNlc3Npb24sIHtcbiAgICAgICAgICBtYXhBZ2U6IDYwICogMzAsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBqc29uKHt9KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczZGNiNDFkYycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSjc3NlJTQ1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNENUlIQTZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzNBWllHUFguanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUNDTTdCVVhJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aQURGNUJRRi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dpbic6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9sb2dpbi1aVU1UU1g2Vy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRkdHQ0tNWE0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTkxRVlZEQy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvcmVnaXN0ZXInOnsnaWQnOidyb3V0ZXMvYXV0aC9yZWdpc3RlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL3JlZ2lzdGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvcmVnaXN0ZXItUkVJSExURDMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZHR0NLTVhNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUE5MUVZWREMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TVzJWU09FUS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvcmUvYWRtaW4vbWVudXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29yZS9hZG1pbi9tZW51cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb3JlL2FkbWluL21lbnVzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb3JlL2FkbWluL21lbnVzL2luZGV4LTIyMkNETFBHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TVzJWU09FUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29yZS9hZG1pbi91c2Vycy9pbmRleCc6eydpZCc6J3JvdXRlcy9jb3JlL2FkbWluL3VzZXJzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvcmUvYWRtaW4vdXNlcnMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcmUvYWRtaW4vdXNlcnMvaW5kZXgtQlRMV1RJUkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNXMlZTT0VRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb3JlL2luZGV4Jzp7J2lkJzoncm91dGVzL2NvcmUvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29yZScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29yZS9pbmRleC1NWUpFVlRENy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUE5MUVZWREMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29yZS93YWxrdGhyb3VnaHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29yZS93YWxrdGhyb3VnaHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29yZS93YWxrdGhyb3VnaHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcmUvd2Fsa3Rocm91Z2hzL2luZGV4LU9URUI2QURCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EQkZPTFkzRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtM1hJQTJWVkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTFFWVkRDLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlL2Fib3V0L2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlL2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZS9hYm91dC9pbmRleC1UMkZFMkkyRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREJGT0xZM0cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZS9pbmRleC1FTUVNSTREMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREJGT0xZM0cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlL215cHJvamVjdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmUvbXlwcm9qZWN0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZS9teXByb2plY3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZS9teXByb2plY3RzL2luZGV4LVo2RlRIT0tZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EQkZPTFkzRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZCc6eydpZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlL3BsYXlncm91bmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC1GR1JHUFpWVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlL3BsYXlncm91bmQvYnV0dG9uJzp7J2lkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQvYnV0dG9uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZCcsJ3BhdGgnOididXR0b24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC9idXR0b24tT0dKTlJaQVUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURCRk9MWTNHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uJzp7J2lkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQvZHluYW1pY2ljb24nLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kJywncGF0aCc6J2R5bmFtaWNpY29uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvZHluYW1pY2ljb24tTk82SldMQTUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURCRk9MWTNHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sJzp7J2lkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQvZm9ybWNvbnRyb2wnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kJywncGF0aCc6J2Zvcm1jb250cm9sJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvZm9ybWNvbnRyb2wtUVVBM1Y3TkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURCRk9MWTNHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvaW5kZXgtQkJEQ0lGTU8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2lucHV0Jzp7J2lkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQvaW5wdXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kJywncGF0aCc6J2lucHV0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvaW5wdXQtTlhUUzdIM1YuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURCRk9MWTNHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2xheW91dCc6eydpZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL2xheW91dCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlL3BsYXlncm91bmQnLCdwYXRoJzonbGF5b3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3BsYXlncm91bmQvbGF5b3V0LTU2VkxEUzZaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EQkZPTFkzRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC90YWJsZSc6eydpZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RhYmxlJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZCcsJ3BhdGgnOid0YWJsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RhYmxlLVdVQjVNQTc2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EQkZPTFkzRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZC90cmVldmlldyc6eydpZCc6J3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RyZWV2aWV3JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmUvcGxheWdyb3VuZCcsJ3BhdGgnOid0cmVldmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZS9wbGF5Z3JvdW5kL3RyZWV2aWV3LUZBNE1CQVpTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EQkZPTFkzRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmUvcG9zdC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZS9wb3N0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlL3Bvc3QnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlL3Bvc3QvaW5kZXgtUFdXTllJNEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURCRk9MWTNHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtM0RDQjQxREMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FB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QUEsRUFFWiwyQkFBMkI7QUFBQSxJQUN2QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHdCQUF3QjtBQUFBLElBQ3BCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEckxkLHdCQUF3QixPQUFPLFNBQVM7QUFDdEMsTUFBSTtBQUNKLE1BQUk7QUFFSixNQUFJLE1BQU0saUJBQWlCLE1BQU07QUFDL0Isd0JBQW9CLE1BQU07QUFBQTtBQUc1QixRQUFNLGFBQWEsTUFBTSxRQUFRO0FBQ2pDLFFBQU0sdUJBQXVCLE1BQU0sUUFBUTtBQUUzQyxNQUFJLGNBQWMsUUFBUSxZQUFZLEtBQUssYUFBYTtBQUN0RCw2QkFBeUIsV0FBVyxNQUFNLEtBQUs7QUFBQTtBQUdqRCxRQUFNLGNBQWM7QUFBQSxJQUNsQiwrQkFBK0I7QUFBQSxJQUMvQjtBQUFBLElBQ0EsdUJBQXVCO0FBQUE7QUFJekIsU0FBTyxLQUFLLGFBQWEsUUFBUSxDQUFDLFFBQVE7QUFDeEMsUUFBSSxZQUFZLFFBQVEsTUFBTTtBQUM1QixhQUFPLFlBQVk7QUFBQTtBQUFBO0FBSXZCLFNBQU87QUFBQTtBQUdGLElBQU0sVUFBVSx5Q0FBcUI7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
