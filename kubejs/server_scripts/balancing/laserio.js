ServerEvents.recipes((event) => {
  const removals = [
    "laserio:logic_chip_raw",
    "laserio:logic_chip",
    "laserio:laser_connector_advanced",
    "laserio:overclocker_card",
    "laserio:overclocker_node",
  ];

  removals.forEach((recipe) => {
    event.remove({ output: recipe });
  });

  event.replaceInput(
    { input: "laserio:logic_chip" },
    "laserio:logic_chip",
    "create_new_age:copper_circuit",
  );

  event.shaped("laserio:laser_connector_advanced", ["DED", "CLC", "GGG"], {
    D: "create_new_age:overcharged_diamond",
    E: "minecraft:ender_eye",
    C: "kubejs:celestigem_mechanism",
    L: "laserio:laser_connector",
    G: "create_new_age:overcharged_golden_sheet",
  });

  event.shaped("laserio:overclocker_card", [" G ", "ECE", "GGG"], {
    G: "create_new_age:overcharged_golden_sheet",
    E: "create:electron_tube",
    C: "create_new_age:copper_circuit",
  });

  event.shaped("laserio:overclocker_node", [" D ", "COC", "DDD"], {
    D: "create_new_age:overcharged_diamond",
    C: "kubejs:celestigem_mechanism",
    O: "laserio:overclocker_card",
  });
});
