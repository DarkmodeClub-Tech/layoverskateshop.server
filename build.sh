#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn typeorm migration:run -d dist/src/data-source