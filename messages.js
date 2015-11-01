Msg = {};

Msg = {
    view: null,

    OK: 1,
    YES: 2,
    NO: 4,
    YESNO: 6,
    CANCEL: 8,
    YESNOCANCEL: 14,

    QUESTION: 'alert-info',
    WARNING: 'alert-warning',
    ERROR: 'alert-danger',

    alert: function (options) {
        var me = this;

        var defaults = {
            title: '',
            message: '',
            buttons: 0,
            icon: Msg.QUESTION,
            closeable: false,
            callback: function () {
            }
        };

        options = _.extend(defaults, options);

        if (me.view) {
            Blaze.remove(me.view);
        }

        me.view = Blaze.renderWithData(
            Template.invictus_alert,
            options,
            document.getElementById('invictus_messages')
        );

        var $dialog = $('#invictus_alert');

        $('button', $dialog).bind("click", function () {
            if ($(this).hasClass('btn-ok')) {
                options.callback(Msg.OK);
            } else if ($(this).hasClass('btn-yes')) {
                options.callback(Msg.YES);
            } else if ($(this).hasClass('btn-no')) {
                options.callback(Msg.NO);
            } else if ($(this).hasClass('btn-cancel')) {
                options.callback(Msg.CANCEL);
            }

            me.close();
        });

        $('#invictus_messages').show();
    },

    dialog: function (message, title, callback) {
        this.alert({
            title: title,
            message: message,
            callback: callback,
            buttons: Msg.YESNO,
            icon: Msg.WARNING
        });
    },

    close: function () {
        Blaze.remove(this.view);
        $('#invictus_messages').hide();
    }
};

Template.invictus_alert.events({
    "click .close": function () {
        Msg.close();
    }
});

Template.invictus_alert.helpers({
    getButtons: function (button) {
        var i;
        var bit = 1;
        var buttons = [];

        for (i = 1; i < 5; i++) {

            if ((button & bit) !== 0) {
                buttons.push({'button_template': 'invictus_buttons_' + bit});
            }

            bit = 1 << i;
        }

        return buttons;
    }
});


