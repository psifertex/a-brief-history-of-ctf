#!/bin/bash
rm -rf docs/*
reveal-md briefhistory.md --scripts js/Chart.bundle.min.js,js/chart.js --css css/v35.css --static docs --static-dirs images
#git subtree push --prefix docs origin gh-pages
