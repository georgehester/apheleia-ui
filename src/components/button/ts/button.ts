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

    setAttributes(buttonType: ApheleiaButtonType, buttonSize: ApheleiaButtonSize)
    {
        if (ApheleiaButtonType[buttonType] != undefined)
        {
            this.buttonType = buttonType;
        } else
        {
            this.buttonType = ApheleiaButtonType.primary;
        };

        if (ApheleiaButtonSize[buttonSize] != undefined)
        {
            this.buttonSize = buttonSize;
        } else
        {
            this.buttonSize = ApheleiaButtonSize.medium;
        };




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

        this.construct();
    };
};

window.customElements.define('aph-button', ApheleiaButton);
