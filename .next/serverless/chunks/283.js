exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 4475:
/***/ ((module) => {

// Exports
module.exports = {
	"NavbarContent": "navbar_NavbarContent__c7GZv",
	"logo": "navbar_logo__kbD_4",
	"Navbar": "navbar_Navbar__KvEt7",
	"SocialInfo": "navbar_SocialInfo__Y9HcF",
	"icon1": "navbar_icon1__xscMd",
	"icon2": "navbar_icon2__8LP8d",
	"icon3": "navbar_icon3__FBbLA",
	"icon4": "navbar_icon4__zu05N",
	"float": "navbar_float__aE8E5"
};


/***/ }),

/***/ 8272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./pages/components/Logo.png
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.461dd1e7.png","height":162,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAU0lEQVR42gXAzQaDAAAA4O80xmxjy8iWmc0OY5GKbinRIfrRY3Tp/S9h9FQLQaTnhUTs4efmSytXKUwCpTt7odlqwVtAZKeTyvw1jgw+rk7OLg5slbwHr2Ppa20AAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/components/navbar.module.css
var navbar_module = __webpack_require__(4475);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(1559);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__(9398);
;// CONCATENATED MODULE: ./pages/components/navbar.js







function navbar() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (navbar_module_default()).NavbarContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: (navbar_module_default()).Navbar,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (navbar_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: Logo,
                        alt: "alt"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (navbar_module_default()).SocialInfo,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: index_es/* faIndianRupeeSign */.H0g,
                                className: (navbar_module_default()).icon1
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: index_es/* faShoppingCart */.sq$,
                                className: (navbar_module_default()).icon2
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: index_es/* faArchive */.N2j,
                                className: (navbar_module_default()).icon3
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: index_es/* faBagShopping */.Cdv,
                                className: (navbar_module_default()).icon4
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;