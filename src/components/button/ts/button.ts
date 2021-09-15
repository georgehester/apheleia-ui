/*
    Make sure Apheleia Icon is preloaded
*/
/// <reference path="../../icon/ts/icon.ts" />

/*
    Button states
*/
enum ApheleiaButtonState
{
    clicked,
    default,
    disabled
};

/*
    Button sizes
*/
enum ApheleiaButtonSize
{
    small,
    medium,
    large,
    extraLarge
};

/*
    Button types
*/
enum ApheleiaButtonType
{
    primary,
    secondary,
    tertiary,
    ghost,
    danger,
    gray,
    grayGlass
};

/*
    Class apheleia button
*/
class ApheleiaButton extends HTMLElement
{

    updateState(state: ApheleiaButtonState): void 
    {
        this.buttonState = state;
    };

    getAttributes(): void
    {

    };

    /*
    type 
    size
    hasloader
    autodisable
    isdisabled
    hasmargin
    icon 
    iconLeft
    iconRight
    text
    */


    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaButtonType, size?: ApheleiaButtonSize, text?: string, icon?: ApheleiaSupportedIcon, iconLeft?: ApheleiaSupportedIcon, iconRight?: ApheleiaSupportedIcon, hasLoader?: boolean, autoDisable?: boolean, hasmargin?: boolean)
    {
        if (!type || !ApheleiaButtonType[type])
        {
            this.buttonType = ApheleiaButtonType.primary;
        }
        else
        {
            this.buttonType = type;
        };

        if (!size || !ApheleiaButtonSize[size])
        {
            this.buttonSize = ApheleiaButtonSize.medium;
        }
        else
        {
            this.buttonSize = size;
        };

        /* 

        */
        if (text)
        {
            this.buttonText = text;
            this.buttonIcon = undefined;
            this.buttonIconLeft = undefined;
            this.buttonIconRight = undefined;
        }
        else if (icon)
        {
            this.buttonText = undefined;
            this.buttonIcon = icon;
            this.buttonIconLeft = undefined;
            this.buttonIconRight = undefined;
        }
        else if (iconLeft)
        {
            this.buttonText = undefined;
            this.buttonIcon = undefined;
            this.buttonIconLeft = iconLeft;
            this.buttonIconRight = undefined;
        }
        else if (iconRight)
        {
            this.buttonText = undefined;
            this.buttonIcon = undefined;
            this.buttonIconLeft = undefined;
            this.buttonIconRight = iconRight;
        }
        else 
        {
            this.buttonText = undefined;
            this.buttonIcon = undefined;
            this.buttonIconLeft = undefined;
            this.buttonIconRight = undefined;
        };

        if (hasLoader != undefined)
        {
            this.buttonHasLoader = hasLoader;
        }
        else 
        {
            this.buttonHasLoader = true;
        };

        if (autoDisable != undefined)
        {
            this.buttonAutoDisable = autoDisable;
        }
        else
        {
            this.buttonAutoDisable = true;
        };

        if(hasmargin)

        //!!ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('name')]









    };

    construct(): void
    {
        this.innerHTML = '';

        let x: ApheleiaIcon = new ApheleiaIcon();
        x.setAttributes(ApheleiaSupportedIcon.chevronRight, '16');
        x.construct();

        this.appendChild(x);
    };

    buttonState: ApheleiaButtonState = ApheleiaButtonState.default;


    /*
        Class attributes
    */
    buttonType: ApheleiaButtonType = ApheleiaButtonType.primary;
    buttonSize: ApheleiaButtonSize = ApheleiaButtonSize.medium;
    buttonText?: string;
    buttonIcon?: ApheleiaSupportedIcon;
    buttonIconLeft?: ApheleiaSupportedIcon;
    buttonIconRight?: ApheleiaSupportedIcon;
    buttonHasLoader: boolean = true;
    buttonAutoDisable: boolean = true;

    /*
        Class elements
    */
    button?: HTMLButtonElement;
    loader?: HTMLDivElement;
    text?: HTMLSpanElement;
    secondaryText?: HTMLSpanElement;
    icon?: ApheleiaIcon;
    iconLeft?: ApheleiaIcon;
    iconRight?: ApheleiaIcon;

    /*
        Class constructor
    */
    constructor()
    {
        super();
        this.getAttributes();
        this.construct();
    };
};

window.customElements.define('aph-button', ApheleiaButton);
