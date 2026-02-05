ServerEvents.recipes((event) => {
  const removals = [
    "mekanismgenerators:advanced_solar_generator",
    "mekanismgenerators:solar_generator",
    "mekanismgenerators:solar_panel",
  ];

  removals.forEach((toRemove) => {
    event.remove({ output: toRemove });
  });

  event.recipes.create.mechanical_crafting(
    "mekanismgenerators:solar_panel",
    ["GGGG", "LLLL", "RIIR", "OOOO"],
    {
      G: "#c:glass_panes",
      L: "minecraft:lapis_lazuli",
      R: "minecraft:redstone",
      I: "mekanism:alloy_infused",
      O: "#c:ingots/osmium",
    },
  );

  event.shaped("mekanismgenerators:solar_generator", ["SSS", "IPI", "HEH"], {
    S: "mekanismgenerators:solar_panel",
    I: "mekanism:alloy_infused",
    P: "#c:plates/steel",
    E: "mekanism:energy_tablet",
  });

  event.recipes.create.mechanical_crafting(
    "mekanismgenerators:advanced_solar_generator",
    ["SHS", "SAS", "SIS", " R ", " M "],
    {
      S: "mekanismgenerators:solar_generator",
      H: "mekanism:hdpe_sheet",
      A: "#c:plates/aluminum",
      I: "mekanism:alloy_infused",
      R: "tfmg:rebar",
      M: "mekanism:steel_casing",
    },
  );
});
