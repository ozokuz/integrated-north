ServerEvents.recipes((event) => {
  const duplicates = [
    "createaddition:electric_motor",
    "createaddition:alternator",
    "createaddition:connector",
    "createaddition:small_light_connector",
    "createaddition:large_connector",
    "createaddition:redstone_relay",
    "createaddition:tesla_coil",
    "createaddition:spool",
    "createaddition:copper_spool",
    "createaddition:gold_spool",
    "createaddition:electrum_spool",
    "createaddition:festive_spool",
    "createaddition:electrum_amulet",
    "justdirethings:generatort1",
    "justdirethings:generatorfluidt1",
    "justdirethings:pocket_generator",
  ];

  duplicates.forEach((recipe) => {
    event.remove({ output: recipe });
  });
});
