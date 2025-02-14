# Next.js 15 App Router Bug: fetch and getServerSideProps Conflict

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using both `fetch` in a component and `getServerSideProps` in the same component.  The issue arises due to a conflict in how data fetching is handled. While `getServerSideProps` is designed to fetch data on the server, the `fetch` call may not integrate smoothly, causing unpredictable behavior.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the inconsistent behavior related to data fetching between server-side and client-side calls.

## Solution

A solution is provided in the `bugSolution.js` file. This file implements a more robust data fetching strategy that aligns with Next.js 15's App Router guidelines, avoiding conflicts and leading to expected behavior.