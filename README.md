[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4df5cd4afb494f10af520f2581d402aa)](https://app.codacy.com/gh/caracal-dev/caracal-static-website/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## Overview
This repo contains the source code for the [Caracal OS website](https://caracal-os.org)

## Cloudflare Pages
Use `hugo` as the Pages build command and `public` as the build output directory.

If the project is configured with `npx hugo`, keep `package.json` committed so Pages can install `hugo-bin` and resolve the local `hugo` executable during the build.
