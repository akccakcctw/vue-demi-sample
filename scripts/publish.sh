#!/usr/bin/env bash

set -e

pnpm build
pnpm publish --access public
