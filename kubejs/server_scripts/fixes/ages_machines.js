ServerEvents.tags('block', event => {
    const machines = [
        'createages:andesite_machine',
        'createages:copper_machine',
        'createages:brass_machine'
    ];
    event.add('minecraft:mineable/pickaxe', machines);
    event.add('minecraft:needs_stone_tool', machines);
});

LootJS.modifiers((event) => {
    const machines = [
        'createages:andesite_machine',
        'createages:copper_machine',
        'createages:brass_machine'
    ];

    machines.forEach(block => {
        event.addBlockModifier(block).addLoot(block);
    });
});
