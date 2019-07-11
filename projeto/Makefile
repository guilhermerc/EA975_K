SERVER_FOLDER = servidor
TEST_FOLDER = $(SERVER_FOLDER)/spec/api

# Performs a test suite
frisby-test:
	jasmine-node --verbose $(TEST_FOLDER)

make test: cliente-build serve-update serve-start

serve-start:
	(cd $(SERVER_FOLDER); npm install && npm start)

serve-update: clean-dist
	 (cd servidor/; cp -r ../cliente/dist/cliente/ ./dist)

clean-dist:
	(cd servidor/; $(RM) -rf dist/)

# Angular Commands
cliente-build:
	(cd cliente/; ng build)

cliente-serve:
	(cd cliente/; ng serve -o)

cliente-update:
	(cd cliente/; npm install;ng update;npm update)

cliente-install-material:
	npm install --save @angular/material @angular/cdk @angular/animations
