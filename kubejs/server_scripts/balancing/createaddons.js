ServerEvents.recipes((event) => {
  event.remove({ id: "createaddition:liquid_burning/lava" });

  event.remove({ output: "ars_creo:starbuncle_wheel" });
  event.shapeless("ars_creo:starbuncle_wheel", [
    "create:water_wheel",
    "ars_nouveau:starbuncle_shards",
  ]);
});