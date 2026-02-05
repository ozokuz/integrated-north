ServerEvents.recipes((event) => {
  const removals = [
    "createages:andesite_mechanism",
    "createages:andesite_machine",
    "createages:copper_mechanism",
    "createages:copper_machine",
    "createages:rubber",
    "create:railway_casing",
    "create:precision_mechanism",
    "createages:brass_machine",
    "createages:zinc_casing",
    "createages:zinc_mechanism",
    "createages:zinc_machine",
    "powah:aerial_pearl",
    "powah:dielectric_casing",
    "laserio:laser_connector",
    "laserio:laser_node",
    "createages:computing_mechanism",
    "ae2:controller",
    "tfmg:steel_mechanism",
    "mekanism:steel_casing",
  ];

  removals.forEach((toRemove) => {
    event.remove({ output: toRemove });
  });

  event.remove({ id: "productivemetalworks:alloying/molten_steel" });

  function casing(endProduct, baseBlock, appliedItem) {
    event.recipes.create.item_application(endProduct, [baseBlock, appliedItem]);
  }

  function mechanism(endProduct, input, transitionalItem, sequence) {
    event.recipes.create
      .sequenced_assembly(
        [endProduct],
        input,
        sequence.map((step) =>
          event.recipes.create.deploying(transitionalItem, [
            transitionalItem,
            step,
          ]),
        ),
      )
      .transitionalItem(transitionalItem);
  }

  function machine(endProduct, input, transitionalItem, sequence) {
    event.recipes.create
      .sequenced_assembly(
        [endProduct],
        input,
        sequence.map((step) =>
          step
            ? event.recipes.create.deploying(transitionalItem, [
                transitionalItem,
                step,
              ])
            : event.recipes.create.pressing(transitionalItem, transitionalItem),
        ),
      )
      .transitionalItem(transitionalItem);
  }

  event.recipes.create.mixing(
    ["createages:rubber"],
    [Item.of("minecraft:kelp", 8), Fluid.of("minecraft:water", 250)],
  );

  mechanism(
    "createages:andesite_mechanism",
    "#minecraft:wooden_slabs",
    "createages:incomplete_andesite_mechanism",
    ["create:andesite_alloy", "create:cogwheel", "create:large_cogwheel"],
  );

  machine(
    "createages:andesite_machine",
    "create:andesite_casing",
    "createages:incomplete_andesite_machine",
    ["createages:andesite_mechanism", "", "createages:andesite_mechanism"],
  );

  mechanism(
    "createages:copper_mechanism",
    "createages:andesite_mechanism",
    "createages:incomplete_copper_mechanism",
    ["minecraft:copper_ingot", "create:fluid_pipe", "create:fluid_tank"],
  );

  machine(
    "createages:copper_machine",
    "create:copper_casing",
    "createages:incomplete_copper_machine",
    ["createages:copper_mechanism", "", "createages:copper_mechanism"],
  );

  casing(
    "create:railway_casing",
    "minecraft:gold_block",
    "create:sturdy_sheet",
  );

  mechanism(
    "kubejs:gold_mechanism",
    "createages:andesite_mechanism",
    "kubejs:incomplete_gold_mechanism",
    [
      "minecraft:gold_ingot",
      "createdeco:andesite_sheet",
      "createdeco:industrial_iron_ingot",
    ],
  );

  machine(
    "kubejs:train_machine",
    "create:railway_casing",
    "kubejs:incomplete_train_machine",
    ["kubejs:gold_mechanism", "", "kubejs:gold_mechanism"],
  );

  casing(
    "kubejs:ferricore_casing",
    Ingredient.of("#c:stripped_logs"),
    "justdirethings:ferricore_ingot",
  );

  mechanism(
    "kubejs:ferricore_mechanism",
    "createages:andesite_mechanism",
    "kubejs:incomplete_ferricore_mechanism",
    [
      "justdirethings:ferricore_ingot",
      "create:iron_sheet",
      "createaddition:capacitor",
    ],
  );

  machine(
    "kubejs:ferricore_machine",
    "kubejs:ferricore_casing",
    "kubejs:incomplete_ferricore_machine",
    ["kubejs:ferricore_mechanism", "", "kubejs:ferricore_mechanism"],
  );

  mechanism(
    "create:precision_mechanism",
    "createages:andesite_mechanism",
    "create:incomplete_precision_mechanism",
    ["create:brass_ingot", "create:golden_sheet", "create:crafter_slot_cover"],
  );

  machine(
    "createages:brass_machine",
    "create:brass_casing",
    "createages:incomplete_brass_machine",
    [
      "create:precision_mechanism",
      "",
      "create:precision_mechanism",
      "create:electron_tube",
    ],
  );

  casing("createages:zinc_casing", "minecraft:stone", "create:zinc_ingot");

  mechanism(
    "createages:zinc_mechanism",
    "create:precision_mechanism",
    "createages:incomplete_zinc_mechanism",
    ["create:zinc_ingot", "createages:andesite_mechanism", "create:cogwheel"],
  );

  machine(
    "createages:zinc_machine",
    "createages:zinc_casing",
    "createages:incomplete_zinc_machine",
    ["createages:zinc_mechanism", "", "createages:zinc_mechanism"],
  );

  casing(
    "kubejs:blazegold_casing",
    "kubejs:ferricore_casing",
    "justdirethings:blazegold_ingot",
  );

  mechanism(
    "kubejs:blazegold_mechanism",
    "kubejs:ferricore_mechanism",
    "kubejs:incomplete_blazegold_mechanism",
    [
      "justdirethings:blazegold_ingot",
      "tfmg:cast_iron_sheet",
      "create:electron_tube",
    ],
  );

  machine(
    "kubejs:blazegold_machine",
    "kubejs:blazegold_casing",
    "kubejs:incomplete_blazegold_machine",
    ["kubejs:blazegold_mechanism", "", "kubejs:blazegold_mechanism"],
  );

  casing("kubejs:dielectric_casing", "minecraft:stone", "powah:dielectric_rod");

  event.shaped("powah:aerial_pearl", ["DQD", "QPQ", "DQD"], {
    D: "powah:dielectric_paste",
    Q: "minecraft:quartz",
    P: "minecraft:ender_pearl",
  });

  machine(
    "powah:dielectric_casing",
    "kubejs:dielectric_casing",
    "kubejs:incomplete_dielectric_machine",
    [
      "powah:aerial_pearl",
      "",
      "powah:aerial_pearl",
      "create_new_age:overcharged_diamond",
    ],
  );

  event.recipes.create.deploying("laserio:laser_connector", [
    "minecraft:iron_block",
    "create:electron_tube",
  ]);

  event.recipes.create.deploying("laserio:laser_node", [
    "laserio:laser_connector",
    "create_new_age:copper_circuit",
  ]);

  mechanism(
    "tfmg:steel_mechanism",
    "create:precision_mechanism",
    "tfmg:unfinished_steel_mechanism",
    ["tfmg:steel_ingot", "tfmg:lead_sheet", "tfmg:screw"],
  );

  machine(
    "mekanism:steel_casing",
    "tfmg:steel_casing",
    "kubejs:incomplete_steel_machine",
    ["tfmg:steel_mechanism", "", "tfmg:steel_mechanism"],
  );

  casing(
    "kubejs:fluix_casing",
    "ae2:fluix_block",
    "create_new_age:overcharged_iron_sheet",
  );

  mechanism(
    "createages:computing_mechanism",
    "tfmg:steel_mechanism",
    "createages:incomplete_computing_mechanism",
    ["ae2:silicon", "ae2:fluix_crystal", "create:electron_tube"],
  );

  machine(
    "ae2:controller",
    "kubejs:fluix_casing",
    "kubejs:incomplete_fluix_machine",
    ["createages:computing_mechanism", "", "createages:computing_mechanism"],
  );

  casing(
    "kubejs:celestigem_casing",
    "kubejs:blazegold_casing",
    "justdirethings:celestigem",
  );

  mechanism(
    "kubejs:celestigem_mechanism",
    "kubejs:blazegold_mechanism",
    "kubejs:incomplete_celestigem_mechanism",
    [
      "create:blaze_cake_base",
      "create:precision_mechanism",
      "justdirethings:celestigem",
    ],
  );

  machine(
    "kubejs:celestigem_machine",
    "kubejs:celestigem_casing",
    "kubejs:incomplete_celestigem_machine",
    ["kubejs:celestigem_mechanism", "", "kubejs:celestigem_mechanism"],
  );

  casing(
    "kubejs:eclipsealloy_casing",
    "kubejs:celestigem_casing",
    "justdirethings:eclipsealloy_ingot",
  );

  mechanism(
    "kubejs:eclipsealloy_mechanism",
    "kubejs:celestigem_mechanism",
    "kubejs:incomplete_eclipsealloy_mechanism",
    [
      "justdirethings:eclipsealloy_ingot",
      "create:sturdy_sheet",
      "minecraft:netherite_ingot",
    ],
  );

  machine(
    "kubejs:eclipsealloy_machine",
    "kubejs:eclipsealloy_casing",
    "kubejs:incomplete_eclipsealloy_machine",
    ["kubejs:eclipsealloy_mechanism", "", "kubejs:eclipsealloy_mechanism"],
  );
});
