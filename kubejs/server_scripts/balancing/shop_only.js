ServerEvents.recipes((event) => {
  event.remove({ mod: "chunkloaders" });

  const removals = [
    "torchmaster:megatorch",
    "tiab:time_in_a_bottle",
    "mininggadgets:upgrade_fortune_3",
    "mininggadgets:upgrade_fortune_2",
    "mininggadgets:upgrade_fortune_1",
    "sophisticatedbackpacks:advanced_feeding_upgrade",
    "sophisticatedbackpacks:feeding_upgrade",
  ];

  removals.forEach((removal) => {
    event.remove({ output: removal });
  });
});
