ServerEvents.recipes((event) => {
  const removals = [
    "hostilenetworks:sim_chamber",
    "hostilenetworks:blank_data_model",
    "hostilenetworks:loot_fabricator",
    "hostilenetworks:prediction_matrix",
  ];

  removals.forEach((recipe) => {
    event.remove({ output: recipe });
  });

  event.smithing(
    "hostilenetworks:sim_chamber",
    "justdirethings:template_celestigem",
    "kubejs:celestigem_machine",
    "minecraft:ender_pearl",
  );

  event.smithing(
    "hostilenetworks:loot_fabricator",
    "justdirethings:template_celestigem",
    "kubejs:celestigem_machine",
    "minecraft:netherite_ingot",
  );

  event.shaped("hostilenetworks:blank_data_model", ["IGI", "OCO", "IGI"], {
    I: "create:iron_sheet",
    G: "justdirethings:celestigem",
    O: "create_new_age:overcharged_golden_sheet",
    C: "create_new_age:copper_circuit",
  });

  event.shaped("16x hostilenetworks:prediction_matrix", ["IF ", "FGF", " FS"], {
    I: "create:iron_sheet",
    F: "justdirethings:ferricore_ingot",
    G: "#c:glass_blocks",
    S: "create:golden_sheet",
  });
});
