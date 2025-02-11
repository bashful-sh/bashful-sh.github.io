#!/bin/bash

# Download
mkdir -p ~/.bashful
git clone git@github.com:bashful-sh/bashful.git ~/.bashful/src

# Prepare
sudo rm -rf /opt/bashful/
sudo mv ~/.bashful /opt/bashful
sudo rm -rf /opt/bashful/.git
sudo rm -rf /opt/bashful/.gitignore
sudo rm -rf /opt/bashful/.README.md

# Install
sudo rm ~/.bashrc
sudo cp /opt/bashful/src/.bashrc ~/.bashrc
sudo chown $USER:$USER ~/.bashrc

# Start
source ~/.bashrc
clear
