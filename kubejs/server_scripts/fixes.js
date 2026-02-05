ServerEvents.recipes((event) => {
  const removals = [
    "mekanism:upgrade_chemical",
    "mekanism:upgrade_muffling",
    "mekanism:upgrade_filter",
  ];

  removals.forEach((toRemove) => {
    event.remove({ output: toRemove });
  });

  event.stonecutting("6x create:brass_tunnel", "createages:brass_machine");
  event.stonecutting(
    "2x create:portable_storage_interface",
    "createages:andesite_machine",
  );
  event.shaped("create:fluid_tank", ["C", "B", "C"], {
    C: "create:copper_sheet",
    B: "minecraft:barrel",
  });

  event.recipes.create
    .sequenced_assembly(
      ["mekanism:upgrade_gas"],
      Ingredient.of("#c:ingots/cast_iron"),
      [
        event.recipes.create.deploying(
          ["mekanism:upgrade_gas"],
          ["mekanism:upgrade_gas", Ingredient.of("#c:dusts/iron")],
        ),
        event.recipes.create.deploying(
          ["mekanism:upgrade_gas"],
          ["mekanism:upgrade_gas", "mekanism:alloy_reinforced"],
        ),
        event.recipes.create.pressing(
          ["mekanism:upgrade_gas"],
          ["mekanism:upgrade_gas"],
        ),
      ],
    )
    .transitionalItem("mekanism:upgrade_gas");

  event.recipes.create
    .sequenced_assembly(
      ["mekanism:upgrade_filter"],
      Ingredient.of("#c:ingots/cast_iron"),
      [
        event.recipes.create.deploying(
          ["mekanism:upgrade_filter"],
          ["mekanism:upgrade_filter", Ingredient.of("#c:dusts/tin")],
        ),
        event.recipes.create.deploying(
          ["mekanism:upgrade_filter"],
          ["mekanism:upgrade_filter", "mekanism:alloy_reinforced"],
        ),
        event.recipes.create.pressing(
          ["mekanism:upgrade_filter"],
          ["mekanism:upgrade_filter"],
        ),
      ],
    )
    .transitionalItem("mekanism:upgrade_filter");

  event.recipes.create
    .sequenced_assembly(
      ["mekanism:upgrade_muffling"],
      Ingredient.of("#c:ingots/cast_iron"),
      [
        event.recipes.create.deploying(
          ["mekanism:upgrade_muffling"],
          ["mekanism:upgrade_muffling", Ingredient.of("#c:dusts/steel")],
        ),
        event.recipes.create.deploying(
          ["mekanism:upgrade_muffling"],
          ["mekanism:upgrade_muffling", "mekanism:alloy_reinforced"],
        ),
        event.recipes.create.pressing(
          ["mekanism:upgrade_muffling"],
          ["mekanism:upgrade_muffling"],
        ),
      ],
    )
    .transitionalItem("mekanism:upgrade_muffling");
});
