#/usr/bin/env bash

INSTANCE_FOLDER="$HOME/.local/share/PrismLauncher/instances/Integrated North Dev/minecraft"

for folder in server_scripts client_scripts startup_scripts; do
  rm -r "./kubejs/$folder"
  cp -r "$INSTANCE_FOLDER/kubejs/$folder" ./kubejs/
done

