const fs = require('fs');
const sass = require('node-sass');
const includePath = process.env.NODE_ENV == 'development'
  ? 'src/sass/development' : 'src/sass/production';
const writeCss = (err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  fs.writeFileSync('dist/style.css', result.css);
};

sass.render({
  file: 'src/sass/style.scss',
  outFile: 'dist/style.css',
  includePaths: [includePath]
}, writeCss);
