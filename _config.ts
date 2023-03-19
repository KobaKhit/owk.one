import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
    src: './src'
});

site.copy('static')
site.use(relative_urls())
site.use(sass({ extensions: ['.scss'] }))
site.use(tailwindcss());
site.use(postcss())
site.use(basePath());

export default site;
