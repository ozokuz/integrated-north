ServerEvents.recipes((event) => {
  const removals = [
    "buildinggadgets2:gadget_building",
    "buildinggadgets2:gadget_exchanging",
    "buildinggadgets2:gadget_copy_paste",
    "buildinggadgets2:gadget_cut_paste",
    "buildinggadgets2:gadget_destruction",
    "mininggadgets:mininggadget_simple",
    "mininggadgets:mininggadget_fancy",
    "mininggadgets:mininggadget",
    "mininggadgets:upgrade_empty",
  ];

  removals.forEach((recipe) => {
    event.remove({ output: recipe });
  });

  function buildingGadget(gadget, special) {
    event.shaped(gadget, ["IDI", "ICI", "ISI"], {
      I: "create:iron_sheet",
      S: special,
      D: "create_new_age:overcharged_diamond",
      C: "create_new_age:copper_circuit",
    });
  }

  buildingGadget("buildinggadgets2:gadget_building", "minecraft:redstone");
  buildingGadget("buildinggadgets2:gadget_exchanging", "minecraft:ender_pearl");
  buildingGadget(
    "buildinggadgets2:gadget_copy_paste",
    "create:empty_schematic",
  );
  buildingGadget("buildinggadgets2:gadget_cut_paste", "minecraft:ender_eye");
  buildingGadget("buildinggadgets2:gadget_destruction", "minecraft:tnt");

  event.shaped("mininggadgets:upgrade_empty", ["ICI", "EBE", "III"], {
    I: "create:iron_sheet",
    C: "createaddition:capacitor",
    B: "create_new_age:copper_circuit",
    E: "createaddition:electrum_sheet",
  });

  function miningGadget(gadget, special) {
    event.shaped(gadget, ["DIS", "DEU", "DIS"], {
      D: "create_new_age:overcharged_diamond",
      I: "create:iron_sheet",
      S: special,
      E: "create:electron_tube",
      U: "mininggadgets:upgrade_empty",
    });
  }

  miningGadget("mininggadgets:mininggadget_simple", "create:iron_sheet");
  miningGadget("mininggadgets:mininggadget_fancy", "create:golden_sheet");
  miningGadget("mininggadgets:mininggadget", "createaddition:zinc_sheet");
});
