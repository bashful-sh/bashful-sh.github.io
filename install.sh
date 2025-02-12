#!/bin/bash

# Download
sudo rm -rf ~/.bashful
git clone git@github.com:bashful-sh/bashful.git ~/.bashful

# Prepare
sudo rm -rf ~/.bashful/.git
sudo rm -rf ~/.bashful/.gitignore
sudo rm -rf ~/.bashful/.README.md

# Install
sudo rm ~/.bashrc
sudo mv ~/.bashful/.bashrc ~/.bashrc
sudo chown $USER:$USER ~/.bashrc

# Start
source ~/.bashrc
clear
