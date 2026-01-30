ServerEvents.recipes((event) => {
  event.stonecutting("6x create:brass_tunnel", "createages:brass_machine");
  event.stonecutting("2x create:portable_storage_interface", "createages:andesite_machine");
  event.shaped("create:fluid_tank", ["C", "B", "C"], {
    C: "create:copper_sheet",
    B: "minecraft:barrel",
  });
});
