#!/bin/bash
while test $# -gt 0; do
	case "$1" in
		-u|--upload)
			UPLOAD=true
			;;
		*)
			break
			;;
	esac
done

rm -rf docs/*
reveal-md briefhistory.md --scripts js/Chart.bundle.min.js,js/chart.js --css css/v35.css --static docs --static-dirs images
if [ -d docs/_assets ]; then
	mv docs/_assets docs/asset
	sed -i'' -e 's/_assets/asset/g' docs/index.html
fi

if [ "$UPLOAD" = true ]; then
	git push origin :gh-pages
	git subtree push --prefix docs origin gh-pages
fi
