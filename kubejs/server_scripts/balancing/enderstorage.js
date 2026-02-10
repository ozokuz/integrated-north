ServerEvents.recipes((event) => {
  const removals = [
    "enderstorage:ender_chest",
    "enderstorage:ender_tank",
    "enderstorage:ender_pouch",
  ];

  removals.forEach((toRemove) => {
    event.remove({ id: toRemove });
  });

  event.recipes.ars_nouveau
    .enchanting_apparatus(
      [
        "minecraft:popped_chorus_fruit",
        "minecraft:popped_chorus_fruit",
        "minecraft:obsidian",
        "minecraft:obsidian",
        "ars_nouveau:manipulation_essence",
        "ars_nouveau:conjuration_essence",
        "occultism:otherworld_essence",
        "waystones:warp_dust",
      ],
      "minecraft:chest",
      "enderstorage:ender_chest",
    )
    .sourceCost(1000);

  event.recipes.ars_nouveau
    .enchanting_apparatus(
      [
        "minecraft:popped_chorus_fruit",
        "minecraft:popped_chorus_fruit",
        "minecraft:obsidian",
        "minecraft:obsidian",
        "ars_nouveau:manipulation_essence",
        "ars_nouveau:conjuration_essence",
        "occultism:otherworld_essence",
        "waystones:warp_dust",
      ],
      "mekanism:basic_fluid_tank",
      "enderstorage:ender_tank",
    )
    .sourceCost(1000);

  event.recipes.ars_nouveau
    .enchanting_apparatus(
      [
        "minecraft:popped_chorus_fruit",
        "minecraft:popped_chorus_fruit",
        "minecraft:obsidian",
        "minecraft:obsidian",
        "ars_nouveau:manipulation_essence",
        "ars_nouveau:conjuration_essence",
        "occultism:otherworld_essence",
        "waystones:warp_dust",
      ],
      "toolbelt:pouch",
      "enderstorage:ender_pouch",
    )
    .sourceCost(1000);
});
