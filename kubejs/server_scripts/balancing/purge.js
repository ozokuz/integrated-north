const purgedMods = [
    'artifacts',
    'relics',
    'reliquified_ars_nouveau',
    'reliquified_lenders_cataclysm'
];

const purgedTags = [
    'simplyswords:uniques'
];

// const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.getInt('purge_done') === 1) {
        return;
    }

    // $CuriosApi.getCuriosInventory(event.player).ifPresent(curiosInv => {
    //     /**
    //      * @type {import('top.theillusivec4.curios.api.type.capability.ICuriosItemHandler').$ICuriosItemHandler}
    //      */
    //     const chandler = curiosInv;
    //     chandler.getCurios().forEach((slotType, stackHandler) => {
    //         const stacks = stackHandler.getStacks();
    //         const slots = stackHandler.getSlots();
    //         let istack;
    //         let item;
    //         for (let i = 0; i < slots; i++) {
    //             istack = stackHandler.getStackInSlot(i);
    //             if (!istack || istack == null || istack.isEmpty()) {
    //                 continue;
    //             }
    //             item = istack.getItem();
    //             if (purgedMods.some(mod => item.id.startsWith(mod + ':')) || purgedTags.some(tag => item.hasTag(tag))) {
    //                 stacks.setStackInSlot(i, Item.of('minecraft:air'));
    //                 event.player.tell(`Removed purged curio item: ${item.id}`);
    //             }
    //         }
    //     })
    // });

    event.player.inventory.items.forEach((item, index) => {
        if (item && (purgedMods.some(mod => item.id.startsWith(mod + ':')) || purgedTags.some(tag => item.hasTag(tag)))) {
            event.player.inventory.removeItem(item)
            event.player.tell(`Removed purged item: ${item.id}`);
        }
    });

    event.player.persistentData.putInt('purge_done', 1);
});

