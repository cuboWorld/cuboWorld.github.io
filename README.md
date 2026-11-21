# cuboWorld

The cuboWorld personal brand website and games catalog. The homepage introduces
the brand and links to each game's own website; it is not a single game's homepage.
Only the existing game is listed. Add future games when real information is available.

Visitor-facing copy should introduce the games naturally. "Brand" and "personal
brand" describe the internal site direction, not public identity labels; do not
display those labels or their translations in page copy, metadata or link labels.

- Brand: https://cuboworld.github.io/
- Squish Invaders: https://cuboworld.github.io/squish-invaders/
- Website privacy: https://cuboworld.github.io/#site-privacy
- Authorized ad sellers: https://cuboworld.github.io/app-ads.txt
- Contact: catinyello88@gmail.com

## Languages and source

The brand homepage supports Korean, English, Japanese, Simplified Chinese and
Traditional Chinese (ko, en, ja, zh-Hans, zh-Hant). Use ?lang=ja to link to a specific
language. The selected language is passed to game links. Edit index.html,
assets/brand.css and assets/brand.js for the brand homepage.

The game's introduction and five-language policies are maintained separately in
cuboWorld/squish-invaders. Its routes are /squish-invaders/,
/squish-invaders/terms/ and /squish-invaders/privacy/.
Do not present the game's terms as brand-wide terms. The game operator remains cuboWorld.

## Hosting and compatibility

Buildless HTML, CSS and JavaScript. GitHub Pages publishes main from the repository
root, with .nojekyll. No installation or build is needed. Run
python -m http.server 4173 --bind 127.0.0.1 for a brand-only local preview.
Mount the separate game checkout at /squish-invaders/ to preview both sites together.

/privacy/ and /terms/ are legacy redirects to the game's new documents. They preserve
query strings and fragments, including account deletion anchors. Keep these available
for existing app and store links. JavaScript-disabled visitors can use the five-language
links on each redirect page.

Keep app-ads.txt at the hostname root even if the game's developer website URL contains
/squish-invaders/. Keep root robots.txt and sitemaps aligned with the public routes.
The website uses no third-party analytics or ad trackers.

## Previous site

The Jekflix version is retained on codex/backup-jekflix-20261116, at commit
ca01beb7c312ece7efb65b0773228cf775fc4f1d. Its template code and assets are not reused.

Game artwork and branding belong to their respective rights holders. This repository
does not grant a license to reuse them.
