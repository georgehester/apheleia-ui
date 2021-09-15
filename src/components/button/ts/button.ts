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

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            ApheleiaButtonType[<keyof typeof ApheleiaButtonType>this.getAttribute('type')],
            ApheleiaButtonSize[<keyof typeof ApheleiaButtonSize>this.getAttribute('size')],
            this.getAttribute('text') || undefined,
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('icon')] || undefined,
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('iconleft')] || undefined,
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('iconright')] || undefined,
            this.hasAttribute('noloader') ? false : true,
            this.hasAttribute('nodisable') ? false : true,
            this.hasAttribute('nomargin') ? false : true,
            this.hasAttribute('fullwidth'),
            this.hasAttribute('disabled')
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaButtonType, size?: ApheleiaButtonSize, text?: string, icon?: ApheleiaSupportedIcon, iconLeft?: ApheleiaSupportedIcon, iconRight?: ApheleiaSupportedIcon, hasLoader?: boolean, autoDisable?: boolean, hasMargin?: boolean, isFullWidth?: boolean, isDisabled?: boolean): void
    {
        this.buttonType = ApheleiaButtonType.primary;
        this.buttonSize = ApheleiaButtonSize.medium;
        this.buttonText = undefined;
        this.buttonIcon = undefined;
        this.buttonIconLeft = undefined;
        this.buttonIconRight = undefined;
        this.buttonHasLoader = true;
        this.buttonAutoDisable = true;
        this.buttonHasMargin = true;
        this.buttonIsFullWidth = false;
        this.buttonIsDisabled = false;

        if (type && ApheleiaButtonType[type])
        {
            this.buttonType = type;
        };

        if (size && ApheleiaButtonSize[size])
        {
            this.buttonSize = size;
        };

        if (text)
        {
            this.buttonText = text;
        }
        else if (icon && ApheleiaSupportedIcon[icon])
        {
            this.buttonIcon = icon;
        }
        else if (iconLeft && ApheleiaSupportedIcon[iconLeft])
        {
            this.buttonIconLeft = iconLeft;
        }
        else if (iconRight && ApheleiaSupportedIcon[iconRight])
        {
            this.buttonIconRight = iconRight;
        };

        if (hasLoader != undefined)
        {
            this.buttonHasLoader = hasLoader;
        };

        if (autoDisable != undefined)
        {
            this.buttonAutoDisable = autoDisable;
        };

        if (hasMargin != undefined)
        {
            this.buttonHasMargin = hasMargin;
        };

        if (isFullWidth != undefined)
        {
            this.buttonIsFullWidth = isFullWidth;
        };

        if (isDisabled != undefined)
        {
            this.buttonIsDisabled = isDisabled;
        };
    };

    /*
        Class constructor function
    */
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
    buttonHasMargin: boolean = true;
    buttonIsFullWidth: boolean = false;
    buttonIsDisabled: boolean = false;

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
