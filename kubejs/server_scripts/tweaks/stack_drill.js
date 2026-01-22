ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "create:mechanical_drill" },
    "minecraft:iron_pickaxe",
    "create:andesite_alloy_block",
  );
});
