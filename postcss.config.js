require("postcss-import");
require("postcss-mixins");
require("postcss-preset-env");
require("postcss-selector-replace");
require("cssnano");

module.exports = (ctx) => ({
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "custom-media-queries": true,
      },
    },

    // ...(process.env.NODE_ENV === "production"
    //   ? {
    //       "postcss-selector-replace": {
    //         before: ["nk-"],
    //         after: [""],
    //       },
    //     }
    //   : {}),
    cssnano: {
      preset: "default",
    },
  },
});
