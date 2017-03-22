# Node Modules for CSS
NODE_SASS=node ./node_modules/.bin/node-sass

# Node Modules for JS
BROWSERIFY=node ./node_modules/.bin/browserify
BABEL=node ./node_modules/.bin/babel
ESLINT=node ./node_modules/.bin/eslint
SPSAVE=node ./scripts/spsave

# Node Modules for Images
SVGO=node ./node_modules/.bin/svgo
SVG_SPRITE=node ./node_modules/.bin/svg-sprite

# Basepath Source
BASEPATH_SRC_CSS=./assets/css
BASEPATH_SRC_IMG=./assets/img
BASEPATH_SRC_JS=./assets/js
BASEPATH_SRC_PARTIALS=./assets/templates

# Basepath Destinations
BASEPATH_DEST_CSS=./public/_css
BASEPATH_DEST_IMG=./public/_img
BASEPATH_DEST_JS=./public/_js
BASEPATH_DEST_PARTIALS=./public/_templates

# SharePoint Info
SITE_URL = 'https://demopry.sharepoint.com/sites/DemoLayout/'
USERNAME = 'dev_prysmian@demoPry.onmicrosoft.com'
PASSWORD = "testOnline365."

build: clean css images js_lint js partials
build_prod: clean css images js partials

buildup: clean css images js_lint js partials up_js up_screen_css up_ie_css

init:
	npm install --production

initdev:
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
	@$(BROWSERIFY) `find $(BASEPATH_SRC_JS) -type f -name "*.js" -o -name "*.jsx"` -o $(BASEPATH_DEST_JS)/app.js -t babelify -t uglifyify --presets --debug 
	@$(BROWSERIFY) `find $(BASEPATH_SRC_JS) -type f -name "*.js" -o -name "*.jsx"` -o $(BASEPATH_DEST_JS)/appFull.js -t babelify --presets --debug
	@echo 'Finished building JS'

js_lint:
	@echo 'Linting'
	@$(ESLINT) $(BASEPATH_SRC_JS)/**/*.js -c .eslintrc
	@echo 'Finished linting'

up_js:
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) js $(BASEPATH_DEST_JS) appFull.js

up_screen_css:
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) css $(BASEPATH_DEST_CSS) screen.css

up_template:
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) template $(BASEPATH_DEST_TEMPLATE) testLink.html

up_ie_css:
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) css $(BASEPATH_DEST_CSS) ie.css

public_all:
	@echo 'Start upload files on Sharepoint'
	@echo $(SITE_URL)

	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) js $(BASEPATH_DEST_JS) appFull.js
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) css $(BASEPATH_DEST_CSS) screen.css
	@$(SPSAVE) $(SITE_URL) $(USERNAME) $(PASSWORD) template $(BASEPATH_DEST_PARTIALS) testLink.html

	@echo 'Finished uploading on Sharepoint'

partials:
	@echo 'Copying templates'
	@mkdir -p $(BASEPATH_DEST_PARTIALS)
	@cp -a $(BASEPATH_SRC_PARTIALS)/. $(BASEPATH_DEST_PARTIALS) || :
	@echo 'Finished copying templates'

watch:
	@echo 'Watching CSS and JS files'
	@node scripts/watch.js "$(BASEPATH_SRC_JS)/**/*" "$(BASEPATH_SRC_CSS)/**/*"
