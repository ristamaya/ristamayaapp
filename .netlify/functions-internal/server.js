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
var tailwind_default = "/build/_assets/tailwind-VYNTHBEU.css";

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
if (true) {
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
    secure: true
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
    secure: true
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
var assets_manifest_default = { "version": "9a7c3376", "entry": { "module": "/build/entry.client-ZDJPMZMJ.js", "imports": ["/build/_shared/chunk-I44QDM5O.js", "/build/_shared/chunk-SPSU65KA.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AL37WVE2.js", "imports": ["/build/_shared/chunk-WE67SK5V.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-HQCRT4JQ.js", "imports": ["/build/_shared/chunk-JPOE2HLZ.js", "/build/_shared/chunk-XDFNWPUA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/register": { "id": "routes/auth/register", "parentId": "root", "path": "auth/register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/register-YKLXXZNJ.js", "imports": ["/build/_shared/chunk-JPOE2HLZ.js", "/build/_shared/chunk-XDFNWPUA.js", "/build/_shared/chunk-V3K3XAJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/admin/menus/index": { "id": "routes/core/admin/menus/index", "parentId": "root", "path": "core/admin/menus", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/admin/menus/index-NCFUM7VS.js", "imports": ["/build/_shared/chunk-V3K3XAJA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/admin/users/index": { "id": "routes/core/admin/users/index", "parentId": "root", "path": "core/admin/users", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/admin/users/index-OXJC7H5Z.js", "imports": ["/build/_shared/chunk-V3K3XAJA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-R3Y7AQSD.js", "imports": ["/build/_shared/chunk-XDFNWPUA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/walkthroughs/index": { "id": "routes/core/walkthroughs/index", "parentId": "root", "path": "core/walkthroughs", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/walkthroughs/index-KRQ3E4TJ.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VPQHG6JG.js", "imports": ["/build/_shared/chunk-XDFNWPUA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/about/index": { "id": "routes/share/about/index", "parentId": "root", "path": "share/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/about/index-X6PCRI4S.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/index": { "id": "routes/share/index", "parentId": "root", "path": "share", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/index-BOOEQHLL.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/myprojects/index": { "id": "routes/share/myprojects/index", "parentId": "root", "path": "share/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/myprojects/index-6I7U6U7U.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground": { "id": "routes/share/playground", "parentId": "root", "path": "share/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground-ZBAW2U2P.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/button": { "id": "routes/share/playground/button", "parentId": "routes/share/playground", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/button-N7BNPI3A.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/dynamicicon": { "id": "routes/share/playground/dynamicicon", "parentId": "routes/share/playground", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/dynamicicon-KBRTL5NU.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/formcontrol": { "id": "routes/share/playground/formcontrol", "parentId": "routes/share/playground", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/formcontrol-CHWSWZYI.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/index": { "id": "routes/share/playground/index", "parentId": "routes/share/playground", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/share/playground/index-W7XBL63J.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/input": { "id": "routes/share/playground/input", "parentId": "routes/share/playground", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/input-TR2XVTU6.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/layout": { "id": "routes/share/playground/layout", "parentId": "routes/share/playground", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/layout-I5AJELHM.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/table": { "id": "routes/share/playground/table", "parentId": "routes/share/playground", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/table-YD5LIR7Y.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/playground/treeview": { "id": "routes/share/playground/treeview", "parentId": "routes/share/playground", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/share/playground/treeview-OJ3DQMCK.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/share/post/index": { "id": "routes/share/post/index", "parentId": "root", "path": "share/post", "index": true, "caseSensitive": void 0, "module": "/build/routes/share/post/index-HBGQIG4L.js", "imports": ["/build/_shared/chunk-BZBXUZRY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9A7C3376.js" };

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
  mode: "production"
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
