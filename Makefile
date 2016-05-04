# Node Modules for CSS
NODE_SASS=node ./node_modules/.bin/node-sass

# Node Modules for JS
UGLIFY_JS=node ./node_modules/.bin/uglifyjs
ESLINT=node ./node_modules/.bin/eslint

# Node Modules for Images
SVGO=node ./node_modules/.bin/svgo

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

build: clean css images js partials

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
	# @todo Minify other images here?
	# @todo SVG Sprite rm -rf $npm_package_config_basepath_dest_img/**/sprite.css.svg && svg-sprite --symbol --symbol-dest $npm_package_config_basepath_dest_img $npm_package_config_basepath_dest_img/**/*
	@echo 'Finished copying images'

js: lint
	@echo 'Building JS'
	@mkdir -p $(BASEPATH_DEST_JS)
	@cat `find $(BASEPATH_SRC_JS) -type f -name "*.js"` > $(BASEPATH_DEST_JS)/app.js
	@$(UGLIFY_JS) $(BASEPATH_DEST_JS)/app.js -o $(BASEPATH_DEST_JS)/app.js --screw-ie8 --source-map $(BASEPATH_DEST_JS)/app.js.map --source-map-url /_js/app.js.map
	@echo 'Finished building JS'

lint:
	@echo 'Linting'
	@$(ESLINT) $(BASEPATH_SRC_JS)/**/*.js -c .eslintrc
	@echo 'Finished linting'

partials:
	@echo 'Copying partials'
	@mkdir -p $(BASEPATH_DEST_PARTIALS)
	@cp -a $(BASEPATH_SRC_PARTIALS)/. $(BASEPATH_DEST_PARTIALS) || :
	@echo 'Finished copying partials'

# Build Vendor JS (concat & uglify)
# Hashbust and Asset Injector
# Watch Tasks
