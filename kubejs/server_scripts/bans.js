const bannedItems = [
    'relics:infinity_ham',
    'artifacts:everlasting_beef',
    'artifacts:eternal_steak',
    'reliquified_ars_nouveau:wing_of_the_wild_stalker',
    'artifacts:crystal_heart',
    'artifacts:power_glove'
];

PlayerEvents.loggedIn(event => {
    // remove banned items from players' inventories
    event.player.inventory.items.forEach((item, index) => {
        if (item && bannedItems.includes(item.id)) {
            event.player.inventory.removeItem(item)
            event.player.tell(`Removed banned item: ${item.id}`);
        }
    });
});

// PlayerEvents.inventoryChanged(event => {
//     if (bannedItems.includes(event.item.id)) {
//         event.player.inventory.removeItem(event.item);
//     }
// })
