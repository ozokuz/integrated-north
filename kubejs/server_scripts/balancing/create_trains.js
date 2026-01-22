ServerEvents.recipes((event) => {
  event.remove({ output: "create:controls" });

  event.replaceInput(
    { input: "create:railway_casing", type: "minecraft:crafting_shapeless" },
    "create:railway_casing",
    "kubejs:train_machine",
  );

  event.shapeless("create:controls", [
    "kubejs:train_machine",
    "minecraft:lever",
  ]);
});
