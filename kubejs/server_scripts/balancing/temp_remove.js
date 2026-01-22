ServerEvents.recipes((event) => {
  const removedMods = ["replication", "dysoncubeproject", "aeinfinitybooster"];

  removedMods.forEach((mod) => {
    event.remove({ mod: mod });
  });
});
