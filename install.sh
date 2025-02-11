#!/bin/bash
mkdir -p ~/.bashful
git clone git@github.com:bashful-sh/bashful.git ~/.bashful/src

sudo mv ~/.bashful /opt/bashful
sudo rm ~/.bashrc
sudo cp /opt/bashful/src/.bashrc ~/.bashrc
sudo chown $USER:$USER ~/.bashrc
