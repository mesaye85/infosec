# InfoSec

The start of a React article site, branded InfoSec in the navbar: sign-in and registration forms, an infinite-scroll article feed and a most-viewed sidebar.

## Context

I set this up over December 23-24, 2023, got as far as the component outline and routing, and stopped. None of the pieces are connected to data.

## Stack

- React 18.2, react-router-dom 6.21, react-infinite-scroll-component 6.1
- Create React App, with `react-scripts` pinned back to `^3.0.1` (webpack 4); it was 5.0.1 when generated
- Bootstrap 5.3 is installed but not imported

## Running it

```
npm ci
NODE_OPTIONS=--openssl-legacy-provider npm start
```

The OpenSSL flag is needed on Node 17 and later because of the webpack 4 toolchain. It compiles on Node 22 (checked October 2026), but the page is blank because of the routing issue below.

## Status

Unfinished skeleton, archived.

## Known gaps

- `src/App.js` lines 14-16 use the react-router v5 `component=` prop inside v6 `<Routes>`. v6 expects `element={<Home />}`, so every route renders nothing.
- `react-scripts` was downgraded from 5.0.1 to `^3.0.1` in commit `731508d`, which pairs React 18 with a 2019 build toolchain.
- `src/pages/Home.js` renders `<Navbar />` twice (lines 11 and 16); the second one replaced a Footer. `Navbar` links to `/about`, which has no route.
- `src/components/Articles.js` and `MostViewed.js` "fetch" empty arrays after a timeout; there is no API or data source. `Articles.js` also has a missing `useEffect` dependency (line 24).
- `src/components/SignIn.js` line 23 and `Register.js` line 28 log the plaintext password to the console. There is no backend, validation or error handling.
- `ArticleForm`, `Common/Button` and `Common/Modal` aren't used anywhere.
- `src/pages/Home.css`: `flex: 2/3` and `flex: 1/3` aren't valid, and the `.Articles`/`.MostViewed` classes aren't on any element.
- `src/App.test.js` is the default CRA test and fails. The page title is still "React App".
- A `.history/` folder of editor snapshots was committed; it is untracked now but remains in the history.
- `npm audit` reports a couple of hundred advisories in this dependency tree.

## What I'd do differently now

- Keep the generated `react-scripts` version (or use Vite) instead of downgrading the toolchain to get past an error.
- Get one route rendering real data before outlining the rest.
- Never log credentials, even in placeholder handlers.
