/*
    Make sure Apheleia Icon is preloaded
*/
/// <reference path="../../icon/ts/icon.ts" />

/*
    Notification types
*/
enum ApheleiaNotificationType
{
    error,
    success,
    warning,
    info
};

/*
    Class apheleia notification
*/
class ApheleiaNotification extends HTMLElement
{
    /*
        Function which deletes an old notification
    */
    removeNotification(element: HTMLDivElement): void 
    {
        element.remove();
    };

    /*
        Function which creates a new notification
    */
    createNotification(type?: ApheleiaNotificationType, text?: string, timeout?: number): void
    {
        /*
            Get the correct notification type
        */
        switch (type)
        {
            case ApheleiaNotificationType.info:
                this.notificationIcon = ApheleiaSupportedIcon.info;
                break;
            case ApheleiaNotificationType.success:
                this.notificationIcon = ApheleiaSupportedIcon.success;
                break;
            case ApheleiaNotificationType.warning:
                this.notificationIcon = ApheleiaSupportedIcon.warning;
                break;
            case ApheleiaNotificationType.error:
                this.notificationIcon = ApheleiaSupportedIcon.error;
                break;
            default:
                type = ApheleiaNotificationType.info;
                this.notificationIcon = ApheleiaSupportedIcon.info;
                break;
        };

        /*
            Create notificaiton elment
        */
        this.notification = document.createElement('div');
        this.notification.className = `aph-notification aph-notification-${ApheleiaNotificationType[type]}`;

        /*
            Create notification icon
        */
        this.icon = new ApheleiaIcon();
        this.icon.setAttributes(this.notificationIcon, 16);
        this.icon.construct();

        /*
            Create notification text
        */
        this.text = document.createElement('span');

        /*
            Add text if required
        */
        if (text)
        {
            this.text.innerHTML = text;
        };

        this.notification.appendChild(this.icon);
        this.notification.appendChild(this.text);
        this.appendChild(this.notification);

        /*
            Delete after timeout if required
        */
        if (timeout)
        {
            setTimeout(this.removeNotification, timeout, this.notification);
        };
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        /*
            Reset inner html
        */
        this.innerHTML = '';
    };

    /*
        Class attributes
    */
    notificationIcon?: ApheleiaSupportedIcon;
    notifications?: HTMLDivElement[];

    /*
        Class elements
    */
    notification?: HTMLDivElement;
    icon?: ApheleiaIcon;
    text?: HTMLSpanElement;

    /*
        Class constructor
    */
    constructor()
    {
        super();
        this.construct();
    };
};

/*
    Define the class as a custom html element
*/
window.customElements.define('aph-notification', ApheleiaNotification);