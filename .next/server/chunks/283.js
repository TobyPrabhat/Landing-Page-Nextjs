exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 475:
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

/***/ 272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/components/Logo.png
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.461dd1e7.png","height":162,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAU0lEQVR42gXAzQaDAAAA4O80xmxjy8iWmc0OY5GKbinRIfrRY3Tp/S9h9FQLQaTnhUTs4efmSytXKUwCpTt7odlqwVtAZKeTyvw1jgw+rk7OLg5slbwHr2Ppa20AAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/components/navbar.module.css
var navbar_module = __webpack_require__(475);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(466);
;// CONCATENATED MODULE: ./pages/components/navbar.js







function navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (navbar_module_default()).NavbarContent,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (navbar_module_default()).Navbar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navbar_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: Logo,
                        alt: "alt"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (navbar_module_default()).SocialInfo,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faIndianRupeeSign,
                                className: (navbar_module_default()).icon1
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faShoppingCart,
                                className: (navbar_module_default()).icon2
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faArchive,
                                className: (navbar_module_default()).icon3
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faBagShopping,
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