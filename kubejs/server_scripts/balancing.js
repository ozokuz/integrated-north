ServerEvents.recipes((event) => {
  event.remove({ mod: "laserio" });
  event.remove({ mod: "mininggadgets" });
  event.remove({ mod: "buildinggadgets2" });
  event.remove({ mod: "chunkloaders" });
  event.remove({ mod: "waystones" });

  event.remove({ output: "powah:dielectric_paste" });
  event.remove({ id: "createaddition:liquid_burning/lava" });

  event.remove({ output: "ars_creo:starbuncle_wheel" });
  event.shapeless("ars_creo:starbuncle_wheel", [
    "create:water_wheel",
    "ars_nouveau:starbuncle_shards",
  ]);

  event.recipes.create
    .mixing(Item.of("powah:dielectric_paste", 16), [
      Fluid.of("minecraft:lava", 50),
      Ingredient.of("#minecraft:coals"),
      "minecraft:clay_ball",
      "minecraft:blaze_powder",
      "tfmg:cast_iron_ingot",
    ])
    .heated();

  event.custom({
    type: "justdirethings:goospread",
    craftingDuration: 600,
    id: "justdirethings:custom_andesite_alloy_block",
    input: {
      Name: "minecraft:polished_andesite",
    },
    output: {
      Name: "create:andesite_alloy_block",
    },
    tierRequirement: 1,
  });

  event.custom({
    type: "justdirethings:goospread",
    craftingDuration: 600,
    id: "justdirethings:custom_raw_ferricore_ore",
    input: {
      Name: "create:andesite_alloy_block",
    },
    output: {
      Name: "justdirethings:raw_ferricore_ore",
    },
    Properties: {
      facing: "north",
    },
    tierRequirement: 1,
  });
});

ServerEvents.tags("item", (event) => {
  // Just Dire Things Goo Revive Balancing
  event.removeAll("justdirethings:goo_revive_tier_1");
  event.add("justdirethings:goo_revive_tier_1", "minecraft:raw_iron");
  event.add("justdirethings:goo_revive_tier_1", "create:raw_zinc");
  event.removeAll("justdirethings:goo_revive_tier_2");
  event.add("justdirethings:goo_revive_tier_2", "minecraft:copper_block");
  event.removeAll("justdirethings:goo_revive_tier_3");
  event.add("justdirethings:goo_revive_tier_3", "#c:ingots/steel");
  event.removeAll("justdirethings:goo_revive_tier_4");
  event.add("justdirethings:goo_revive_tier_4", "minecraft:netherite_ingot");
});
