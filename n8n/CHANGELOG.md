# Changelog

## 1.0.2

- Changed the official n8n image source to the verified Docker Hub publisher to work around repeated rate limits from `docker.n8n.io`.
- Kept n8n pinned to version 2.42.7.

## 1.0.1

- Fixed the `environment` configuration schema so Home Assistant Store recognizes the app correctly.

## 1.0.0

- Initial Home Assistant app based on the official n8n image.
- Configure environment variables from the Home Assistant app page.
- Persist n8n data in the app data directory.
- Instructions for installing a fork and keeping secrets out of GitHub.
- Made with assistance from ChatGPT.
