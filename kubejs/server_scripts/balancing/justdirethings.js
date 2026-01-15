ServerEvents.recipes((event) => {
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

