# Reading List: Git Workflow Lab Starter

This is the starter project for the Day 5 lab, **Git Workflow**. It is a small reading list tracker in plain HTML, CSS, and JavaScript. You use it to practice a complete Git and GitHub workflow: branching, a pull request with a review, a merge conflict, and reverting a bad commit.

This folder is already a Git repository. It has two branches:

- `main`: the reading list app.
- `feature/dark-mode`: a teammate's dark mode work, ready to merge. One of its commits has a bug.

## Part 1: Put it on GitHub

1. Unzip this folder and open `reading-list` in Claude Code.
2. Ask Claude: *"Show me the branches in this repository and the last few commits on each."*
3. On github.com, create a new **empty** repository named `reading-list` (no README, .gitignore, or license).
4. Ask Claude: *"Here is my new GitHub repository: [paste the URL]. Add it as origin and push both main and feature/dark-mode."*
5. Open `index.html` in your browser to confirm the app works.

## Part 2: Add books on a feature branch

1. Create a branch named `feature/my-books`.
2. Ask Claude to add three books to the `books` array in `app.js`, keeping the same object shape.
3. Commit, push the branch, and open a pull request into `main`. Have Claude draft the description, then edit it.
4. Review your own pull request: on the **Files changed** tab, leave one comment asking for a change (for example, a different category for one of the books). Apply it, push, and reply to the comment with the commit hash.
5. Merge the pull request on GitHub, delete the branch, and pull `main`.

## Part 3: Merge the dark mode branch

Merge `feature/dark-mode` into `main`. **You will get a merge conflict**: both branches added books to the same place in the `books` array.

Ask Claude to show you what each side was trying to do before it resolves anything. Keep the books from both sides, and make sure every `id` is unique. Commit the resolution, then test in your browser: the dark mode toggle should appear.

## Part 4: Find and revert the bad commit

Switch to dark mode. All the text disappears.

1. Ask Claude to list the commits that came from `feature/dark-mode` and show what each one changed.
2. Find the commit that broke the text color.
3. Revert it with `git revert`, which adds a new commit that undoes the bad one without rewriting history.
4. Test again: dark mode text should be readable.

## Part 5: Push and clean up

Push `main` to GitHub and delete the `feature/dark-mode` branch locally and on GitHub.

## Stretch goals

- Add a filter button that filters by category instead of status.
- Write a `CLAUDE.md` for this project describing its structure and what kinds of changes are acceptable.
- Try `git bisect` to find the bad commit more systematically.
