#/usr/bin/env bash

rm -r "$HOME/.local/share/PrismLauncher/instances/Integrated North Dev/minecraft/kubejs/server_scripts"
rm -r "$HOME/.local/share/PrismLauncher/instances/Integrated North Dev/minecraft/kubejs/client_scripts"
cp -r kubejs/server_scripts/ "$HOME/.local/share/PrismLauncher/instances/Integrated North Dev/minecraft/kubejs/"
cp -r kubejs/client_scripts/ "$HOME/.local/share/PrismLauncher/instances/Integrated North Dev/minecraft/kubejs/"

