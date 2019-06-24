make test: cliente-build serve-update serve-start

serve-start:
	(cd servidor/; npm install; npm start)

serve-update: clean-dist
	 (cd servidor/; cp -r ../cliente/dist/cliente/ ./dist)

# Angular Commands
cliente-build:
	(cd cliente/; ng build)

cliente-serve:
	(cd cliente/; ng serve -o)

clean-dist:
	(cd servidor/; $(RM) -rf dist/)
