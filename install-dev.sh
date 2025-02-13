#!/bin/bash

# bashful-sh/bashful
cd "$HOME"
sudo rm -rf "$HOME/.bashful"
git clone git@github.com:bashful-sh/bashful.git "$HOME/.bashful"
cd "$HOME/.bashful"
git checkout DEV
sudo rm "$HOME/.bashrc"
sudo cp "$HOME/.bashful/.bashrc" "$HOME/.bashrc"
sudo chown $USER:$USER "$HOME/.bashrc"
source "$HOME/.bashrc"
clear

# bashful-sh/.github
git clone git@github.com:bashful-sh/.github.git ~/.bashful/.github

# bashful-sh/.github-private
git clone git@github.com:bashful-sh/.github-private.git ~/.bashful/.github-private

# bashful-sh/bashful-sh.github.io
git clone git@github.com:bashful-sh/bashful-sh.github.io ~/.bashful/.github.io
