ServerEvents.recipes((event) => {
  event.remove({ mod: "waystones" });

  event.shapeless("waystones:warp_dust", [
    "ae2:ender_dust",
    "occultism:crushed_end_stone",
    "create:powdered_obsidian",
    "silentgear:azure_silver_dust",
  ]);
});
