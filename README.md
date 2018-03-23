# A Brief History of CTF

Originally presented at [Insomni'Hack 2018](https://insomnihack.ch/).

To rebuild:

1. Install [reveal-md](https://github.com/webpro/reveal-md) 
2. Modify it to not use the `_assets` subfolder because gh-pages is a huge pain. `sed -i'' -e 's/_assets/asset/g' ~/.npm-packages/lib/node_modules/reveal-md/lib/*.js` or equivalent.
3. Rebuild with: `reveal-md briefhistory.md --scripts js/Chart.bundle.min.js,js/chart.js --css css/v35.css --static docs --static-dirs images`

## View

[https://psifertex.github.io/a-brief-history-of-ctf](https://psifertex.github.io/a-brief-history-of-ctf)

## License

This talk licensed under a [(CC) by-nc-sa](https://creativecommons.org/licenses/by-nc-sa/3.0/) license.

Individual image licenses and sources specified in the associated `.txt` files.
