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
    extraLarge,
    custom
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
        if (state == ApheleiaButtonState.clicked)
        {
            if (this.state != ApheleiaButtonState.disabled)
            {

            };
        }
        else if (state == ApheleiaButtonState.default)
        {

        }
        else if (state == ApheleiaButtonState.disabled)
        {

        };

        this.state = state;
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

        /*

        */
        this.button = document.createElement('button');
        this.button.classList.add('aph-button');

        /*

        */
        this.button.classList.add(`aph-button-type-${ApheleiaButtonType[this.buttonType]}`);

        /*

        */
        if (this.buttonHasLoader)
        {
            this.loader = document.createElement('div');
            this.loader.classList.add('aph-button-loader');
            this.button.appendChild(this.loader);
        };

        /*

        */
        if (this.buttonSize != ApheleiaButtonSize.custom)
        {
            this.button.classList.add(`aph-button-size-${ApheleiaButtonSize[this.buttonSize]}`);
        };

        /*

        */
        if (this.buttonIsFullWidth)
        {
            this.button.style.width = '100%';
        };

        /*

        */
        if (this.buttonIconLeft && !this.buttonIcon)
        {
            this.iconLeft = new ApheleiaIcon();
            this.iconLeft.setAttributes(this.buttonIconLeft, '24');
            this.iconLeft.construct();
            this.iconLeft.style.marginRight = '6px';
            this.iconLeft.style.marginLeft = '8px';

            this.button.appendChild(this.iconLeft);
        };

        /*

        */
        if (this.buttonText && !this.buttonIcon)
        {
            this.text = document.createElement('span');
            this.text.classList.add('aph-button-text');
            this.text.innerHTML = this.buttonText;

            this.button.appendChild(this.text);

            /*
            */
            this.text.style.opacity = '1';

            if (this.buttonHasMargin)
            {
                this.text.style.marginLeft = '16px';
                this.text.style.marginRight = '80px';
            }
            else
            {
                if (this.buttonIconLeft && this.buttonIconRight)
                {
                    this.text.style.marginLeft = '0px';
                    this.text.style.marginRight = '0px';
                }
                else if (this.buttonIconLeft)
                {
                    this.text.style.marginLeft = '0px';
                    this.text.style.marginRight = '16px';
                }
                else if (this.buttonIconRight)
                {
                    this.text.style.marginLeft = '16px';
                    this.text.style.marginRight = '16px';
                }
                else
                {
                    this.text.style.marginLeft = '16px';
                    this.text.style.marginRight = '16px';
                };
            };
        }

        if (this.buttonIcon && !this.buttonText)
        {
            this.icon = new ApheleiaIcon();
            this.icon.setAttributes(this.buttonIcon, '24');
            this.icon.construct();
            this.icon.style.marginRight = '3px';
            this.icon.style.marginLeft = '3px';

            this.button.appendChild(this.icon);
        };

        /*

        */
        if (this.buttonIconRight && !this.buttonIcon)
        {
            this.iconRight = new ApheleiaIcon();
            this.iconRight.setAttributes(this.buttonIconRight, '24');
            this.iconRight.construct();
            this.iconRight.style.marginRight = '6px';
            this.iconRight.style.marginLeft = '8px';

            this.button.appendChild(this.iconRight);
        };

        /*

        */
        if (this.buttonIsDisabled)
        {
            this.button.disabled = true;
            this.state = ApheleiaButtonState.disabled;
        };

        /*

        */
        if (this.buttonAutoDisable || this.buttonHasLoader)
        {
            this.button.addEventListener('click', () =>
            {

            });
        };

        /*

        */
        this.appendChild(this.button);

        if (!this.buttonIsDisabled)
        {
            this.updateState(ApheleiaButtonState.default);
        };
    };

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
    state: ApheleiaButtonState = ApheleiaButtonState.default;

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