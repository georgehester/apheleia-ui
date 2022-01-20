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
    extralarge,
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
    dropdown,
    dropdownitem,
    dropdownitemdanger,
    inputnumber
};

/*
    Class apheleia button
*/
class ApheleiaButton extends HTMLElement
{

    updateState(state: ApheleiaButtonState): void 
    {
        if (!this.button)
        {
            return;
        };

        if (this.buttonAutoDisable)
        {
            if (state == ApheleiaButtonState.clicked || state == ApheleiaButtonState.disabled)
            {
                this.button.disabled = true;
            };
            if (state == ApheleiaButtonState.default)
            {
                this.button.disabled = false;
            };
        };

        if (this.buttonHasLoader)
        {
            if (state == ApheleiaButtonState.clicked)
            {
                this.loader?.classList.add('aph-button-loader-active');
            };
            if (state == ApheleiaButtonState.disabled || state == ApheleiaButtonState.default)
            {
                this.loader?.classList.remove('aph-button-loader-active');
            };
        };

        if (this.buttonText)
        {
            if (state == ApheleiaButtonState.clicked)
            {
                this.text?.classList.remove('aph-button-text-active');
            };
            if (state == ApheleiaButtonState.disabled || state == ApheleiaButtonState.default)
            {
                this.text?.classList.add('aph-button-text-active');
            };
        };

        if (this.buttonIcon)
        {
            if (state == ApheleiaButtonState.clicked)
            {
                this.icon?.classList.remove('aph-button-icon-active');
            };
            if (state == ApheleiaButtonState.disabled || state == ApheleiaButtonState.default)
            {
                this.icon?.classList.add('aph-button-icon-active');
            };
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
            this.hasAttribute('disabled'),
            this.getAttribute('borderradii') || undefined
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaButtonType, size?: ApheleiaButtonSize, text?: string, icon?: ApheleiaSupportedIcon, iconLeft?: ApheleiaSupportedIcon, iconRight?: ApheleiaSupportedIcon, hasLoader?: boolean, autoDisable?: boolean, hasMargin?: boolean, isFullWidth?: boolean, isDisabled?: boolean, borderRadii?: string): void
    {
        /*
            Set default attribute values
        */
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
        this.buttonBorderRadii = undefined;

        if (type != undefined && ApheleiaButtonType[type])
        {
            this.buttonType = type;
        };

        if (size != undefined && ApheleiaButtonSize[size])
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

        if (iconLeft && ApheleiaSupportedIcon[iconLeft])
        {
            this.buttonIconLeft = iconLeft;
        };

        if (iconRight && ApheleiaSupportedIcon[iconRight])
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

        if (borderRadii != undefined)
        {
            this.buttonBorderRadii = borderRadii;
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

        /*
            Create html button element 
        */
        this.button = document.createElement('button');

        /*
            Assign the button styling 
        */
        this.button.classList.add(`aph-button-type-${ApheleiaButtonType[this.buttonType]}`);

        /*
            Create html loader element if required 
        */
        if (this.buttonHasLoader)
        {
            this.loader = document.createElement('div');
            this.loader.classList.add('aph-button-loader');
            this.button.appendChild(this.loader);
        };

        /*
            Assign the button radius if provided 
        */
        if (this.buttonBorderRadii)
        {
            let borderRadii = this.buttonBorderRadii.split(',');
            this.button.style.borderRadius = `${borderRadii[0]}px ${borderRadii[1]}px ${borderRadii[2]}px ${borderRadii[3]}px`;
        };

        /*
            Assign the button size if provided
        */
        if (this.buttonSize != ApheleiaButtonSize.custom)
        {
            this.button.classList.add(`aph-button-size-${ApheleiaButtonSize[this.buttonSize]}`);
        };

        /*
            Assign the button width if required
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
            this.iconLeft.classList.add('aph-button-icon-left');
            this.iconLeft.setAttributes(this.buttonIconLeft, 24);
            this.iconLeft.construct();

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
            this.icon.classList.add('aph-button-icon');
            this.icon.setAttributes(this.buttonIcon, 24);
            this.icon.construct();

            this.button.appendChild(this.icon);
        };

        /*

        */
        if (this.buttonIconRight && !this.buttonIcon)
        {
            this.iconRight = new ApheleiaIcon();
            this.iconRight.classList.add('aph-button-icon-right');
            this.iconRight.setAttributes(this.buttonIconRight, 24);
            this.iconRight.construct();

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
                this.updateState(ApheleiaButtonState.clicked);
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
    buttonBorderRadii?: string;

    buttonAutoFocus: boolean = false;
    buttonDisabled: boolean = false;
    buttonForm?: string;

    /*
        Implement
    */
    buttonRightFlat?: boolean;
    buttonLeftFlat?: boolean;
    buttonTopFlat?: boolean;
    buttonBottomFlat?: boolean;

    /*
        Class elements
    */
    button?: HTMLButtonElement;
    loader?: HTMLDivElement;
    text?: HTMLSpanElement;
    //secondaryText?: HTMLSpanElement;
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

/*
    Define the class as a custom html element
*/
window.customElements.define('aph-button', ApheleiaButton);