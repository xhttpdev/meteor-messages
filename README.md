# invictus:messages #

Alerts and Flash Messages.
Based on Twitter Boostrap Theme.

## Quick Start ##

    $ meteor add invictus:messages
    
# Usage #

Add Template to `body`

    <body>
        {{> invictus_message}}
    </body>

## Alerts ##

    Msg.alert({
        title: 'My Title',
        message: 'My Message',
        buttons: Msg.YESNO,
        icon: Msg.QUESTION,
        closeable: true,
        callback: function (btn) {
            if (btn === Msg.YES) {
                // do something
            }
        }
    });
    
### Default Values ###

| Key       | Value         |
| --------- | ------------- |
| title     | ''            |
| message   | ''            |
| buttons   | 0             |
| icon      | Msg.Question  |
| closeable | false         |


### Buttons ###

- Msg.OK
- Msg.YES
- Msg.NO
- Msg.CANCEL

###### Button Combinations ######

- Msg.YESNO
- Msg.YESNOCANCEL

### Icons ###

- Msg.QUESTION
- Msg.WARNING
- Msg.ERROR

### Predefined Methods ###

#### Info ####

OK Buttons and Question Icon

    Msg.info(message, title, callback);

###### Example ######

    Msg.info('My Message', 'My Title', function (btn) {});

#### Warning ####

OK Buttons and Warning Icon

    Msg.warning(message, title, callback);

###### Example ######

    Msg.warning('My Message', 'My Title', function (btn) {});

#### Error ####

OK Buttons and Error Icon

    Msg.error(message, title, callback);

###### Example ######

    Msg.error('My Message', 'My Title', function (btn) {});

#### Dialog ####

YESNO Button and Warning Icon

    Msg.dialog(message, title, callback);

###### Example ######

    Msg.dialog('My Message', 'My Title', function (btn) {});

## Flash Messages ##

Flash Messages are shown in the upper right corner and disapear after 5 seconds.

#### Info ####

    Msg.Flash.info(message, title);

###### Example ######

    Msg.Flash.info('My Message', 'My Title');

#### Warning ####

    Msg.Flash.warning(message, title);

###### Example ######

    Msg.Flash.warning('My Message', 'My Title');

#### Error ####

    Msg.Flash.error(message, title);

###### Example ######

    Msg.Flash.error('My Message', 'My Title');
    
#### Success ####

    Msg.Flash.success(message, title);

###### Example ######

    Msg.Flash.success('My Message', 'My Title');
