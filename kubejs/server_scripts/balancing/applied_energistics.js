ServerEvents.recipes((event) => {
  event.remove({ output: "ae2:inscriber" });

  function inscriberPress(output, input, press) {
    event.recipes.create.deploying(output, [input, press]).keepHeldItem();
  }

  inscriberPress("ae2:printed_silicon", "ae2:silicon", "ae2:silicon_press");
  inscriberPress(
    "ae2:printed_logic_processor",
    "minecraft:gold_ingot",
    "ae2:logic_processor_press",
  );
  inscriberPress(
    "ae2:printed_engineering_processor",
    "minecraft:diamond",
    "ae2:engineering_processor_press",
  );
  inscriberPress(
    "ae2:printed_calculation_processor",
    Ingredient.of("#c:gems/certus_quartz"),
    "ae2:calculation_processor_press",
  );

  function inscriberProcessor(output, input, extra, incomplete) {
    event.recipes.create
      .sequenced_assembly([output], input, [
        event.recipes.create.deploying(incomplete, [
          incomplete,
          "ae2:printed_silicon",
        ]),
        event.recipes.create.deploying(incomplete, [incomplete, input]),
        event.recipes.create.deploying(incomplete, [
          incomplete,
          "create_new_age:copper_circuit",
        ]),
        event.recipes.create.filling(incomplete, [
          incomplete,
          Fluid.of("productivemetalworks:molten_redstone", 400),
        ]),
        event.recipes.create.deploying(incomplete, [incomplete, extra]),
        event.recipes.create.filling(incomplete, [
          incomplete,
          Fluid.of("minecraft:water", 200),
        ]),
      ])
      .transitionalItem(incomplete);
  }

  inscriberProcessor(
    "ae2:logic_processor",
    "ae2:printed_logic_processor",
    "create_new_age:overcharged_golden_sheet",
    "kubejs:incomplete_logic_processor",
  );

  inscriberProcessor(
    "ae2:engineering_processor",
    "ae2:printed_engineering_processor",
    "create_new_age:overcharged_diamond",
    "kubejs:incomplete_engineering_processor",
  );

  inscriberProcessor(
    "ae2:calculation_processor",
    "ae2:printed_calculation_processor",
    "ae2:charged_certus_quartz_crystal",
    "kubejs:incomplete_calculation_processor",
  );

  event.shaped("ae2:inscriber", ["ILI", "MCM", "ILI"], {
    I: "create:iron_sheet",
    L: "ae2:logic_processor",
    M: "createages:computing_mechanism",
    C: "kubejs:fluix_casing",
  });
});
