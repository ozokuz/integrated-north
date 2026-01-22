ServerEvents.recipes((event) => {
  event.remove({ id: "ars_nouveau:novice_spell_book" });
  event.remove({ id: "ars_nouveau:novice_spellbook_alt" });
  event.remove({ id: "ars_nouveau:apprentice_book_upgrade" });
  event.remove({ id: "ars_nouveau:archmage_book_upgrade" });

  event.shapeless("ars_nouveau:novice_spell_book", [
    "minecraft:writable_book",
    "ars_nouveau:source_gem",
    "ars_nouveau:starbuncle_shards",
    "minecraft:gold_ingot",
    "justdirethings:ferricore_sword",
    "justdirethings:ferricore_pickaxe",
    "justdirethings:ferricore_axe",
    "justdirethings:ferricore_shovel",
    "justdirethings:ferricore_hoe",
  ]);

  event.custom({
    type: "ars_nouveau:book_upgrade",
    category: "misc",
    ingredients: [
      Ingredient.of("ars_nouveau:novice_spell_book").toJson(),
      Ingredient.of("ars_nouveau:magebloom_fiber").toJson(),
      Ingredient.of("ars_nouveau:magebloom_fiber").toJson(),
      Ingredient.of("minecraft:wither_skeleton_skull").toJson(),
      Ingredient.of("minecraft:blaze_rod").toJson(),
      Ingredient.of("minecraft:blaze_rod").toJson(),
      Ingredient.of("ars_nouveau:manipulation_essence").toJson(),
      Ingredient.of("ars_nouveau:conjuration_essence").toJson(),
      Ingredient.of("minecraft:diamond").toJson(),
    ],
    result: Item.of("ars_nouveau:apprentice_spell_book", 1).toJson(),
  });

  event.custom({
    type: "ars_nouveau:book_upgrade",
    category: "misc",
    ingredients: [
      "ars_nouveau:apprentice_spell_book",
      "occultism:otherworld_essence",
      "ars_elemancy:elemancer_essence",
      "minecraft:nether_star",
      "ars_nouveau:wilden_tribute",
      "minecraft:totem_of_undying",
      "minecraft:dragon_breath",
      "irons_spellbooks:blood_vial",
      "irons_spellbooks:lightning_bottle",
    ].map((item) => Ingredient.of(item).toJson()),
    result: Item.of("ars_nouveau:archmage_spell_book", 1).toJson(),
  });
});
