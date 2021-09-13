enum ApheleiaButtonState
{
    clicked,
    default
};

enum ApheleiaButtonSize
{
    small,
    medium,
    large,
    extraLarge
};

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


    };
};

window.customElements.define('aph-button', ApheleiaButton);
