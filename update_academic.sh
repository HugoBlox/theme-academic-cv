#!/usr/bin/env bash

# Source Themes Academic: Theme updater
# Checks for available updates and then asks to install any updates.
# https://sourcethemes.com/academic/
#
# Command: bash ./update_academic.sh

# Check for prerequisites.
if [ ! -d .git ]; then
  echo "ERROR: This tool is for Git repositories only."
  exit 1;
fi

# Function to update Academic
function install_update () {
  # Apply any updates
  git submodule update --remote --merge

  # - Update Netlify.toml with required Hugo version
  if [ -f ./netlify.toml ]; then
    version=$(sed -n 's/^min_version = //p' themes/academic/theme.toml)
    sed -i '' -e "s/HUGO_VERSION = .*/HUGO_VERSION = $version/g" ./netlify.toml
  fi

  echo
  echo "View the release notes at: https://sourcethemes.com/academic/updates"
  echo "If there are breaking changes, the config and/or front matter of content" \
  "may need upgrading by following the steps in the release notes."
}

# Display currently installed version (although could be between versions if updated to master rather than tag)
version=$(sed -n 's/^version = "//p' themes/academic/data/academic.toml)
echo -e "Source Themes Academic v$version\n"

# Display available updates
echo -e "Checking for updates...\n"
cd themes/academic
git fetch
git log --pretty=oneline --abbrev-commit --decorate HEAD..origin/master
cd ../../

title="Do you wish to install the above updates?"
prompt="Choose an option and press Enter:"
options=("Yes" "No")

echo "$title"
PS3="$prompt "
select opt in "${options[@]}"; do
    case $opt in
        Yes ) install_update; break;;
        No ) break;;
        * ) break;;
    esac
done
