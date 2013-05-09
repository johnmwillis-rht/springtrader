Ext.define('SpringTrader.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    requires: ['Ext.dataview.List'],
    config: {
        title: 'Settings',
        items: [
            {
                xtype: 'list',
                margin: '20 0 0 0',
                height: 3 * 47 + 1,         // Ext.List#itemHeight = 47 (touch/src/dataview/List.js:261)
                itemTpl: '{text}',
                scrollable: false,
                onItemDisclosure: true,
                disableSelection: true,
                data: [
                    { text: 'Profile' },
                    { text: 'Help' },
                    { text: 'User Statistics' }
                ]
            },
            {
                xtype: 'button',
                ui: 'action',
                text: 'Logout',
                itemId: 'logoutButton',
                margin: '20 20 20 20'
            }
        ]
    }
});