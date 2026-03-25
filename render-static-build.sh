#!/usr/bin/env bash
set -euo pipefail
# Pubblica solo i file del sito statico (esclude backend e tooling).
rm -rf _site
mkdir -p _site
cp index.html _site/
cp -r css js images _site/
