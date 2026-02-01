ServerEvents.recipes((event) => {
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
