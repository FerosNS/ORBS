#!/bin/bash

set -o pipefail

# --- This file installs all the dependencies for this project, excluding MySQL. ---

# Check os and set APT variable
case "$OSTYPE" in
  darwin*)  APT='brew' ;;
  linux*)   APT="apt-get" ;;
  *)        echo "unknown: $OSTYPE" ;;
esac

# Check if APT is set and install correct dependencies
if [[ -z ${APT} ]];
then
    echo "Cannot download packages."
else
    echo "Checking Dependencies..."
    if [ -s /usr/bin/python ]
    then
        echo 'Python already installed. Skipping...'
    else
        sudo $APT install python || exit 10
        sudo $APT install python3 || exit 11
    fi
    if [ -s /usr/local/bin/pip ]
    then
        echo "Pip already installed. Skipping..."
    else
        sudo $APT install pip || exit 12
        sudo $APT install pip3 || exit 12
    fi
    pip3 install django || exit 14
    if [ -s ./ORBS/_settings.example.py ]
    then
        mv ./ORBS/_settings.example.py ./ORBS/settings.py
    else
        if [ -s ./ORBS/settings.py ]
        then
            echo 'settings.py already installed.'
        else
            echo 'You need settings.py to begin development.'
        fi
    fi
fi
