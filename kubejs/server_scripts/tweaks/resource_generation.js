ServerEvents.recipes((event) => {
  event.remove({ id: "create:crushing/tuff" });
  event.remove({ id: "create:crushing/tuff_recycling" });
  event.remove({ id: "createaddition:crushing/tuff_recycling" });
  event.remove({ id: "advanced_ae:quartzcrystal" });

  event.recipes.create.compacting(
    ["minecraft:tuff"],
    [
      "minecraft:cobblestone",
      "minecraft:cobbled_deepslate",
      Fluid.of("minecraft:lava", 100),
    ],
  );

  event.recipes.create.compacting(
    ["create:asurine"],
    [
      Item.of("minecraft:lapis_lazuli", 2),
      "minecraft:gravel",
      Fluid.of("minecraft:lava", 100),
    ],
  );

  event.recipes.create.compacting(
    ["minecraft:coal_block"],
    [
      "justdirethings:coalblock_t1",
      Fluid.of("sauce:source_fluid", 250),
      Ingredient.of("#c:dusts/coal"),
    ],
  );
});
