#!/bin/bash
rm -rf docs/*
reveal-md briefhistory.md --scripts js/reveal.js,js/Chart.bundle.min.js,js/chart.js --css css/v35.css --static docs --static-dirs images