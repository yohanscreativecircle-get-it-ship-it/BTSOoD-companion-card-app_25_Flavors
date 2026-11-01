# BTSOoD · Break the Wall

The 25 Flavors of Doubt as a phone app. Each doubt is a creature. Flip a card, read the truth, and check a counter when you put it into motion. Every card you act on knocks a brick out of the wall. Clear all five realms, from Pressure to Emergence, to break through.

**What's inside**

- **Today:** a card of the day drawn from the realm you're working through, your streak, a 7-day activity strip, and your realm progress.
- **Journey:** the full card viewer. Tap to flip, swipe to move, check counters, then Pin, Share, Journal, or log a Daily Receipt.
- **Deck:** all 25 creatures by realm, filtered by Still standing, Broken or Pinned.
- **Journal:** your entries and receipts, plus backup export and import.
- Installs to a phone's home screen and works offline.
- No accounts, no tracking. Progress is saved only on the device.

---

## Put it on GitHub (about 5 minutes, no coding)

1. Sign in at **github.com** and click **New repository** (the **+** at the top right).
2. Name it something like `btsood`, set it to **Public**, and click **Create repository**.
3. On the next page, click **uploading an existing file**.
4. Open this folder on your computer, select **everything inside it** (not the folder itself), and drag it onto the page. `index.html` needs to sit at the top level of the repository.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*, choose **main** and **/(root)**, then click **Save**.
7. Wait a minute or two and refresh. GitHub shows your link: `https://YOUR-USERNAME.github.io/btsood/`

On a Mac the hidden `.nojekyll` file may not get dragged in. That's fine, because the app works without it.

### Add it to a phone

- **iPhone (Safari):** open the link, tap **Share**, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap the **⋮** menu, then **Install app** or **Add to Home screen**.

---

## Edit the cards

All card text lives in **`data/deck.js`**: names, doubts, truths, counters and realm order. To edit it on GitHub, open the file, click the pencil icon, make your change, and click **Commit changes**. The site updates within a minute or two.

- Cards appear in the order they're listed.
- Each card's `realm` must be one of `pressure`, `cracks`, `impact`, `shatter`, `emergence`.
- Keep each card's `id` the same once people are using the app, because saved progress is tied to it.
- Card symbols are SVG drawings in `data/symbols.js`, keyed by card id.

After any change, open **`sw.js`** and bump the version (for example `btsood-v1` to `btsood-v2`) so installed phones pick up the update.

## Files

```
index.html             app shell
css/app.css            all styling
js/app.js              screens and interactions
js/store.js            saved progress (on the device)
js/wall.js             brick-wall art that breaks open by realm
data/deck.js           the 25 cards and 5 realms  ← edit me
data/symbols.js        creature symbols (SVG)
assets/                card back and app icons
manifest.webmanifest   home-screen install settings
sw.js                  offline support
```

## Try it on your computer first (optional)

Double-click `index.html` to open it in a browser. Everything works except offline mode and installing, which need the GitHub link.
