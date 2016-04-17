# Golin Digital - Starter Pack
A frontend starter pack for projects at Golin.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- IE Edge (IE 12+)
- Internet Explorer 9+
- Safari (latest)

## Structure
### CSS
The CSS structure is based upon the [7-1 Pattern](http://sass-guidelin.es/#the-7-1-pattern) as provided by Sass Guidelines. If you don't like it, you're free to change it. It is only a suggestion, but works most of the time for projects. The screen.scss file imports all of these  files, which follow a specific order so our styles aren't overwritten.

```
/assets
    /scss
        /base - Includes all boilerplate code. Global styles, such as setting a body background colour, should go in here. This is also true for typography, which has its own stylesheet in here.
        /components - Includes all component styles. Button styles, media blocks, carousels, thumbnail, etc. styles should go in here.
        /layout - Includes all styles that create a layout for the page. Header, footer, sidebar, forms, navigation, etc. styles should go in here.
        /pages - Includes all page specific styles.
        /utils - Includes all Sass tools, helpers, etcetera. This should include every global variable, function, mixin and placeholder.
        /vendors - Includes all vendor files - if you didn't write it, it goes here.
    ie.scss - Compiles a separate stylesheet for IE
    screen.scss - Compiles a separate stylesheet for screen
```

#### IE Specific Styles
If you need to write specific code for IE fixes for an element, please create another file in the folder, and suffix the filename with `.ie.scss`. This makes it easier for yourself and other developers to find IE-specific files if they need to. These specific stylesheets should _only_ be imported in the ie.scss file.

#### Print Specific Styles
As with IE Specific Styles, please create another file, in the same folder as the original file, and suffix the filename with `.print.scss`. These specific stylesheets should be imported in the screen.scss, inside the `@media print` block.

### JavaScript
The JavaScript structure depends on what your framework of choice is. If you are using AngularJS, please follow [John Papa's](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) styleguide. If you're using anything else (including jQuery), please follow the [ESLint Code Conventions](http://eslint.org/docs/developer-guide/code-conventions). The linter is configured for the ESLint Code Conventions using their recommended rules. We do, however, indent JS files with 2 (instead of 4) spaces.

Please also make an effort to write docblocks. We have implemented them on all backend projects, and on some frontend projects. It makes it so much easier for someone to jump onto the project and understand it if they've never worked on it before.

### Images
I've recently got into the habit of splitting images into folders based on type - svgs in one, pngs in another. You're welcome to do whatever you want here!

## Usage
- Build everything: `npm run build` / `npm run build --production`
- Build CSS: `npm run build:css`
- Build JS: `npm run build:js`
- Build Images: `npm run build:images`
- Build Styleguide: `npm run build:styleguide`
- Watch everything: `npm run watch`

### Using the Production flag
The production flag strips some tasks for being run on servers, such as linting JS and CSS, or generating a styleguide, which are only ever installed as dev dependencies anyway.

### A note about Images
PNGs, JPGs, etcetera, are all minified using Imagemin. Please note this may take a long time, so get a cuppa! SVGs are minified and then added to a single file (sprite.css.svg).

## What does each task do?
### Build CSS
The CSS task will do the following:
- Lint CSS
- Autoprefix properties to support browsers listed above
- Convert typography declarations (line-height, font-size, letter-spacing) to use rem sizing, meaning you no longer have to use a mixin
- Minify CSS using CSSNano
- Generate sourcemaps for your CSS files, removing the need to generate both a minified and unminified version

This task will output a `screen.css` and `ie.css` as separate stylesheets.

### Build JS
The JS task will do the following:
- Lint JS
- Concat all JS, including vendor-specific JS, into a single file
- Minify JS using UglifyJS2
- Generate sourcemaps for your JS file, removing the need to generate both a minified and unminified version
- Output into public folder

### Build Images
The image task will do the following:
- Compress images, including SVGs
- Generate an SVG sprite
- Inject SVG block into specified file
- Output into public folder

### Build Styleguide
The `build:styleguide` task will do the following:
- Automagically generate a styleguide if you've commented your CSS files appropriately
- Output into public folder

### Watch
The `watch` task will do the following:
- Watch CSS, JS, Images and run each build task on change.

You can also run `watch:css`, `watch:js`, `watch:images`, but I'll let you guess what they do.

This task will create a separate directory, /public/_styleguide, which is where the styleguide will reside. This task takes upwards of 5 seconds on most stylesheets, hence it is not part of the Build CSS task (for quicker development).

## Updating the Starterpack
This Starterpack will be updated weekly, on a Friday evening, if needs be. Deprecated packages, if any, will be replaced/removed, and packages will be updated to their latest appropriate version.

## Contributing
If you wish to add a task, or add features to a current task, please feel free. Fork this repository and PR back into `develop`!

## Other notes
Please make an effort to stop using jQuery for animations, changing CSS properties and doing anything CSS can do. Unless you're explicitly supporting IE 8, please create animations using CSS, which benefits the user by being able to use hardware accelleration to improve smoothness and speed of animations. Ideally, your project should be moving to a place where it doesn't rely on JS for animations, changing CSS properties or the like. I really can't think of any reason why you'd want to do that. It used to be easy using jQuery before CSS3 was implemented _literally everywhere_, but now it's a pain on the user and slows down sites massively.

Please also stop using floats. Floats are _a fucking pain_ in the ass, and require a hack (see: clearfix) for it to work correctly. You know what's good? Flexbox. Flexbox is better than using floats. Plus, it's fucking easy to vertical align shit that's next to eachother. You can do it with one fucking line (see: `align-items: center`, `justify-content: center`). Oh, and you don't get that PESKY FUCKING SPACE inbetween divs like you do with `display: inline-block`.

<!-- ---- CHECK AND REMOVE ----
## Usage
### Build Everything
To compile CSS, JavaScript and images, run `npm run build:local` on the command line in your Vagrant box. On an Architect server, do _not_ run this. Instead, run `npm run build:server`. The latter will omit developer dependencies, such as Imagemin.

### Build Everything
To compile CSS, JavaScript and images, run `npm run build:local` on the command line in your Vagrant box. On an Architect server, do _not_ run this. Instead, run `npm run build:server`. The latter will omit developer dependencies, such as Imagemin.

### Watch
To start watching files, run `npm run watch`. This will watch your CSS files, JavaScript files and images.

### Build CSS
To compile CSS, run `npm run build:css` on the command line in your Vagrant box.

### Process Images
To process images, run `npm run build:images` on the command line in your Vagrant box.

## What's happening during the process?
### CSS
The following proccesses are run:
- Autoprefixer
- PXtoREM
- CSSNano
- Automatically generate sourcemaps

### Images
#### General
- Imagemin

PNGs, JPGs, etcetera, are all minified using Imagemin. This is not run on any servers, and is only run locally. Your initial image files will be replaced with their respective minified versions. These will have to be committed, and compiled into the `public` folder on build.

# Todo
- npm run build --production
- Watch tasks
- ESlint implementation
- Sourcemap check
- Imagemin caching
- Hashbust and Inject
- Styleguide theme for Golin
- Remove lint from production task
 -->
