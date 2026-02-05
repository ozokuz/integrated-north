ServerEvents.recipes((event) => {
  const removals = [
    "enderstorage:ender_chest",
    "enderstorage:ender_tank",
    "enderstorage:ender_pouch",
  ];

  removals.forEach((toRemove) => {
    event.remove({ id: toRemove });
  });
});
