<div align="center">

# Sync Branch

GitHub Action to keep a branch in sync with the current branch

</div>

## Usage

Here's an example workflow that syncs a `test` branch every time a commit is pushed to the `main` branch:

```yml
name: Sync branch

on:
  push:
    - main

jobs:
  sync-branch:
    name: Update test branch
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@master
      - uses: connor-baer/action-sync-branch@main
        with:
          branch: test
          token: ${{ secrets.GITHUB_TOKEN }}
          force: false
```

## Inputs

### `branch`

**Required** The name of the branch to sync with the current branch.

### `token`

**Required** A GitHub token with permission to push to the repo. [Generate a new token](https://github.com/settings/tokens/new?description=Sync%20Branch&scopes=repo).

### `force`

Whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work. Default: `false`.
