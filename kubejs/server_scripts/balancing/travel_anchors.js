ServerEvents.recipes((event) => {
  const removals = [
    "travelanchors:travel_anchor",
    "travelanchors:travel_staff",
  ];

  removals.forEach((toRemove) => {
    event.remove({ output: toRemove });
  });

  event.shaped("travelanchors:travel_anchor", ["E", "Z"], {
    E: "#c:ender_pearls",
    Z: "createages:zinc_machine",
  });

  event.shaped("travelanchors:travel_staff", ["  C", " S ", "S  "], {
    C: "justdirethings:celestigem",
    S: "tfmg:rebar",
  });
});
