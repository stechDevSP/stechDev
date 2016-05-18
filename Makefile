# Node Modules for CSS
NODE_SASS=node ./node_modules/.bin/node-sass

# Node Modules for JS
UGLIFY_JS=node ./node_modules/.bin/uglifyjs
ESLINT=node ./node_modules/.bin/eslint

# Node Modules for Images
SVGO=node ./node_modules/.bin/svgo
SVG_SPRITE=node ./node_modules/.bin/svg-sprite

# Basepath Source
BASEPATH_SRC_CSS=./assets/css
BASEPATH_SRC_IMG=./assets/img
BASEPATH_SRC_JS=./assets/js
BASEPATH_SRC_PARTIALS=./assets/partials

# Basepath Destinations
BASEPATH_DEST_CSS=./public/_css
BASEPATH_DEST_IMG=./public/_img
BASEPATH_DEST_JS=./public/_js
BASEPATH_DEST_PARTIALS=./public/_partials

# Vendor JS Files
VENDOR_JQUERY=./node_modules/jquery/dist/jquery.js

build: clean css images js_lint js_vendor js partials
build_prod: clean css images js_vendor js partials

init:
	npm install

clean:
	@echo 'Cleaning up prebuilt directories'
	@rm -rf $(BASEPATH_DEST_CSS)
	@rm -rf $(BASEPATH_DEST_IMG)
	@rm -rf $(BASEPATH_DEST_JS)
	@rm -rf $(BASEPATH_DEST_PARTIALS)
	@echo 'Cleaned!'

css:
	@echo 'Building CSS'
	@mkdir -p $(BASEPATH_DEST_CSS)
	@$(NODE_SASS) $(BASEPATH_SRC_CSS) -o $(BASEPATH_DEST_CSS) --source-map $(BASEPATH_DEST_CSS)
	@node scripts/build.css.post.js --directory $(BASEPATH_DEST_CSS)/**/*
	@echo 'Finished building CSS'

images:
	@echo 'Copying images'
	@mkdir -p $(BASEPATH_DEST_IMG)
	@cp -a $(BASEPATH_SRC_IMG)/. $(BASEPATH_DEST_IMG)
	@$(SVGO) -f $(BASEPATH_DEST_IMG)/svg --enable=removeTitle
	@rm -rf $(BASEPATH_DEST_IMG)/**/sprite.css.svg
	@$(SVG_SPRITE) --symbol --symbol-dest $(BASEPATH_DEST_IMG) $(BASEPATH_DEST_IMG)/**/*
	@echo 'Finished copying images'

js:
	@echo 'Building JS'
	@mkdir -p $(BASEPATH_DEST_JS)
	@$(UGLIFY_JS) `find $(BASEPATH_SRC_JS) -type f -name "*.js"` --screw-ie8 -o $(BASEPATH_DEST_JS)/app.js --source-map $(BASEPATH_DEST_JS)/app.js.map --source-map-url /_js/app.js.map --source-map-root .. --prefix 1
	@echo 'Finished building JS'

js_lint:
	@echo 'Linting'
	@$(ESLINT) $(BASEPATH_SRC_JS)/**/*.js -c .eslintrc
	@echo 'Finished linting'

js_vendor:
	@echo 'Building vendor JS'
	@mkdir -p $(BASEPATH_DEST_JS)
	@$(UGLIFY_JS) $(VENDOR_JQUERY) --screw-ie8 -o $(BASEPATH_DEST_JS)/vendor.js --source-map $(BASEPATH_DEST_JS)/vendor.js.map --source-map-url /_js/vendor.js.map --source-map-root .. --prefix 1

partials:
	@echo 'Copying partials'
	@mkdir -p $(BASEPATH_DEST_PARTIALS)
	@cp -a $(BASEPATH_SRC_PARTIALS)/. $(BASEPATH_DEST_PARTIALS) || :
	@echo 'Finished copying partials'

watch:
	@echo 'Watching CSS and JS files'
	@node scripts/watch.js "$(BASEPATH_SRC_JS)/**/*" "$(BASEPATH_SRC_CSS)/**/*"
