const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    // Configurar o publicPath para funcionar no subdiretório /desafio-lsmais/
    publicPath: process.env.NODE_ENV === "production" ? "/desafio-lsmais/" : "/",
});
