StartupEvents.registry('block', event => {
    function casing(name, displayName, soundType) {
        event.create(name + '_casing')
            .displayName(displayName + ' Casing')
            .soundType(soundType)
            .hardness(1)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_wooden_tool')
            .tagBlock('create:wrench_pickup');
    }

    casing('ferricore', 'Ferricore', 'wood');
    casing('blazegold', 'Blazegold', 'wood');
    casing('celestigem', 'Celestigem', 'wood');
    casing('eclipsealloy', 'Eclipse Alloy', 'wood');
    casing('dielectric', 'Dielectric', 'stone');
    casing('fluix', 'Fluix', 'stone');

    function machine(name, displayName) {
        event.create(name + '_machine')
            .displayName(displayName + ' Machine Casing')
            .stoneSoundType()
            .hardness(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_wooden_tool')
            .tagBlock('create:wrench_pickup');
    }

    machine('train', 'Train');
    machine('ferricore', 'Ferricore');
    machine('blazegold', 'Blazegold');
    machine('celestigem', 'Celestigem');
    machine('eclipsealloy', 'Eclipse Alloy');
});

StartupEvents.registry('item', event => {
    function mechanism(name, displayName) {
        event.create(name + '_mechanism')
            .displayName(displayName + ' Mechanism');
        event.create('incomplete_' + name + '_mechanism', 'create:sequenced_assembly')
            .displayName('Incomplete ' + displayName + ' Mechanism');
    }

    mechanism('ferricore', 'Ferricore');
    mechanism('blazegold', 'Blazegold');
    mechanism('celestigem', 'Celestigem');
    mechanism('eclipsealloy', 'Eclipse Alloy');
    mechanism('gold', 'Gold');

    function machine(name, displayName, texture) {
        event.create('incomplete_' + name + '_machine')
            .displayName('Incomplete ' + displayName + ' Machine')
            .texture(texture);
    }

    machine('train', 'Train', 'create:block/railway_casing');
    machine('ferricore', 'Ferricore', 'kubejs:block/ferricore_casing');
    machine('blazegold', 'Blazegold', 'kubejs:block/blazegold_casing');
    machine('celestigem', 'Celestigem', 'kubejs:block/celestigem_casing');
    machine('eclipsealloy', 'Eclipse Alloy', 'kubejs:block/eclipsealloy_casing');
    machine('dielectric', 'Dielectric', 'kubejs:block/dielectric_casing');
    machine('fluix', 'Fluix', 'kubejs:block/fluix_casing');
    machine('steel', 'Steel', 'tfmg:block/steel_casing');
});