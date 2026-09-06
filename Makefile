.PHONY: serve build install clean

install:
	pip install -r requirements.txt

serve:
	mkdocs serve

build:
	mkdocs build
	cp -r .well-known site/

clean:
	rm -rf site
