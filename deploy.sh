#!/bin/bash
# Receive args.
if [$1 = "push"]; then
    if [$# -eq 1]; then
        TIME_NOW=$(date +%T\ %F)
        MSG="Change something nobody knows at ${TIME_NOW}..."
        EDITED_FILE="."

    elif [$# -eq 2]; then
        MSG="$2"
        EDITED_FILE="."

    elif [$# -gt 2]; then
        MSG="$2"
        shift 2
        EDITED_FILE="$*"

    else
        echo "WTF?"

    fi

    echo "\033[0;32m
    ---------------------------
    Deploying to GitHub Page...
    ---------------------------
    \033[0m"

    # Build the project.
    hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

    # Go To Public folder
    cd public

    # Add changes to git.
    git add .

    # Commit changes.
    git commit -m "$MSG"

    # Push source and build repos.
    git push origin master

    # Come Back up to the Project Root
    cd ..

    echo "\033[0;32m
    -----------------------------
    Updating content to GitHub...
    -----------------------------
    \033[0m"

    # Add changes to git.
    git add $EDITED_FILE

    # Commit changes.
    git commit -m "$MSG"

    # Push source and build repos.
    git push origin master

elif [$1 = "pull"]; then

    # Update main repo.
    git pull

    # Update submodule.
    git submodule update

    echo "Synchronize finish."

else
    echo "Determine What you wanna do."

fi
