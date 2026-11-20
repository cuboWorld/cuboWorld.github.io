# cuboWorld

Official public website for cuboWorld and the Android game Squish Invaders.

- Website: https://cuboworld.github.io/
- Privacy policy (Korean and English): https://cuboworld.github.io/privacy/
- Terms of Service (Korean and English): https://cuboworld.github.io/terms/
- Authorized ad sellers: https://cuboworld.github.io/app-ads.txt
- Support: catinyello88@gmail.com

## Hosting

Buildless HTML, CSS and JavaScript. GitHub Pages publishes `main` from the repository root. `.nojekyll` disables Jekyll processing. No dependency installation or build is required.

For local preview, run `python -m http.server 4173 --bind 127.0.0.1` in this directory.

## Maintenance

- Update release status and add a verified Google Play link when the game launches.
- Keep the privacy policy aligned with the shipped app, SDK settings, and Google Play Data safety answers. The policy currently covers the Android version.
- Keep the Terms of Service aligned with the free, rewarded-ad-supported game, optional Google account linking, and Firebase cloud saves. Verify the shipped authentication, backup and deletion flows before updating these disclosures, and provide any notice or consent required for material changes.
- The public contact address appears in the homepage and policy.
- Keep `app-ads.txt` at the domain root and update it if the advertising account changes.
- The website uses no third-party scripts, embedded services or visitor analytics. Images come from the Squish Invaders project.

## Previous site

The Jekflix version is retained on `codex/backup-jekflix-20261116`, at commit `ca01beb7c312ece7efb65b0773228cf775fc4f1d`. The new site does not reuse Jekflix template code or assets.

Game art and branding belong to their respective rights holders. This repository does not grant a license to reuse them.
