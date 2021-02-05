#!/usr/bin/env bash

# Wowchemy Updater
# Helps update Hugo modules and the compatible Hugo version for Netlify.
# https://wowchemy.com/docs/update/
#
# Command: bash ./update_wowchemy.sh

# Check for prerequisites.
if [ ! -d content ]; then
  echo "ERROR: `cd` into your website folder before running this tool."
  exit 1;
fi

# Update the Wowchemy Hugo module
function update_wowchemy () {
  # Update Wowchemy to the latest main version
  echo -e "Updating Hugo Modules to their latest version...\n"
  hugo mod get -u ./...
  hugo mod tidy
}

# Update Netlify config
function update_netlify () {
  # - Update Netlify.toml with required Hugo version
  if [ -f ./netlify.toml ]; then
    echo "Attempting to get compatible Hugo version from https://raw.githubusercontent.com/wowchemy/wowchemy-hugo-modules/main/wowchemy/config.yaml ..."
    curl -o "tmp_get_version" https://raw.githubusercontent.com/wowchemy/wowchemy-hugo-modules/main/wowchemy/config.yaml
    version=$(sed -n 's/^[[:space:]]*min: //p' "tmp_get_version" | tr -d "'")
    version="${version}"
    echo "Set Netlify Hugo version to v${version}"
    sed -i.bak -e "s/HUGO_VERSION = .*/HUGO_VERSION = \"$version\"/g" ./netlify.toml && rm -f ./netlify.toml.bak
    rm tmp_get_version
  fi
}

# Perform update
update_wowchemy
update_netlify

echo
echo "Warning: review the changes made by this helper script before pushing them to your site."
echo
echo "If there are breaking changes, the site structure, config, and/or front matter of content" \
"may need upgrading by following the steps in the relevant consecutive release notes."
echo
echo "View the update guide at: https://wowchemy.com/docs/update/"
echo "View the latest release notes at: https://wowchemy.com/updates/"
