all:
	DISPLAY=:0 sudo google-chrome --pack-extension=Source --pack-extension-key=PrayToFart.pem --user-data-dir=/tmp/foooo
	sudo chown brwyatt:brwyatt Source.crx
	mv Source.crx PrayToFart.crx
