Msg.Flash = {
    view: null,

    /**
     * @private
     *
     * @param {String} message
     * @param {String} title
     * @param {String} type
     */
    message: function (message, title, type) {
        var me = this;

        if (this.view) {
            Blaze.remove(this.view);
        }

        this.view = Blaze.renderWithData(
            Template.invictus_flash,
            {message: message, title: title, type: type},
            document.getElementById('invictus_flash_messages')
        );

        var $error = $('#invictus_flash');

        $error.css({top: $(window).scrollTop() + 'px'});

        if ($error.css('display') === 'none') {
            $error.show();
            $error.animate({
                opacity: 1,
                top: "+=15"
            }, 500);
        }

        Meteor.setTimeout(function () {
            me.close(500);
        }, 5000);
    },

    /**
     * @param {String} message
     * @param {String} title
     */
    error: function (message, title) {
        this.message(message, title, 'alert-danger');
    },

    /**
     * @param {String} message
     * @param {String} title
     */
    warning: function (message, title) {
        this.message(message, title, 'alert-warning');
    },

    /**
     * @param {String} message
     * @param {String} title
     */
    info: function (message, title) {
        this.message(message, title, 'alert-info');
    },

    /**
     * @param {String} message
     * @param {String} title
     */
    success: function (message, title) {
        this.message(message, title, 'alert-success');
    },

    /**+
     * @param {Number} duration
     */
    close: function (duration) {
        var me = this;
        var $error = $('#invictus_flash');

        $error.fadeOut(duration, function () {
            Blaze.remove(me.view);
        });
    }
};

Template.invictus_flash.helpers({
    hasTitle: function () {
        return (this.title !== undefined);
    }
});
