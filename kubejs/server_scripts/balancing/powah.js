ServerEvents.recipes((event) => {
  event.remove({ output: "powah:dielectric_paste" });
  event.recipes.create
    .mixing(Item.of("powah:dielectric_paste", 16), [
      Fluid.of("minecraft:lava", 50),
      Ingredient.of("#minecraft:coals"),
      "minecraft:clay_ball",
      "minecraft:blaze_powder",
      "tfmg:cast_iron_ingot",
    ])
    .heated();
});