const { aliasWebpack, aliasJest } = require("react-app-alias");

const aliasMap = {
  "@config": "src/config",
  "@components": "src/components",
  "@services": "src/services",
  "@utils": "src/utils",
  "@hooks": "src/hooks",
  "@pages": "src/pages",
  "@assets": "src/assets",
  "@colors": "src/colors",
  "@network": "src/network",
  "@contexts": "src/contexts",
  "@root/*": "src/*",
};

const options = {
  alias: aliasMap,
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
