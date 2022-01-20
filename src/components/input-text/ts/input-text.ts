/*
    Make sure Apheleia Icon is preloaded
*/
/// <reference path="../../icon/ts/icon.ts" />

/*
    Input sizes
*/
enum ApheleiaTextInputSize
{
    small,
    medium,
    large,
    custom
};

/*
    Input states
*/
enum ApheleiaTextInputState
{
    error,
    default,
    disabled
};

/*
    Input types
*/
enum ApheleiaTextInputType
{
    email,
    password,
    search,
    tel,
    text,
    url
};

//number,textarea,

/*
    Class apheleia button
*/
class ApheleiaTextInput extends HTMLElement
{
    /*
        Function which updates the current state of the input
    */
    updateState(state: ApheleiaTextInputState, error?: string): void
    {
        if (!this.input || !this.inputContainer)
        {
            return;
        };

        this.textInputCurrentState = state;

        if (state == ApheleiaTextInputState.default)
        {
            this.input.disabled = false;

            if (this.textInputIcon)
            {
                this.icon.setAttributes(this.textInputIcon, 16);
                this.icon.construct();
                this.icon.classList.remove('aph-text-input-icon-error');
                this.input.style.paddingRight = '40px';

                if (!this.inputContainer.contains(this.icon))
                {
                    this.inputContainer.appendChild(this.icon);
                };
            }
            else if (this.inputContainer.contains(this.icon))
            {
                this.input.style.paddingRight = '8px';
                this.inputContainer.removeChild(this.icon);
            };

            if (this.textInputHelper)
            {
                this.helper.innerText = this.textInputHelper;
                this.helper.classList.remove('aph-text-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-text-input-error');
        }
        else if (state == ApheleiaTextInputState.error)
        {
            this.input.disabled = false;

            if (!this.textInputIcon && !this.inputContainer.contains(this.icon))
            {
                this.inputContainer.appendChild(this.icon);
            };

            this.icon.setAttributes(ApheleiaSupportedIcon.error, 16);
            this.icon.construct();
            this.icon.classList.add('aph-text-input-icon-error');
            this.input.style.paddingRight = '40px';

            if (!this.textInputHelper && !this.contains(this.helper) && error)
            {
                this.append(this.helper);
            };

            if (error)
            {
                this.helper.innerText = error;
                this.helper.classList.add('aph-text-input-helper-error');
            };

            this.input.classList.add('aph-text-input-error');
        }
        else if (state == ApheleiaTextInputState.disabled)
        {
            this.input.value = '';
            this.input.disabled = true;

            if (this.inputContainer.contains(this.icon))
            {
                this.input.style.paddingRight = '8px';
                this.inputContainer.removeChild(this.icon);
            };

            if (this.textInputHelper)
            {
                this.helper.innerText = this.textInputHelper;
                this.helper.classList.remove('aph-text-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-text-input-error');
        };
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            ApheleiaTextInputType[<keyof typeof ApheleiaTextInputType>this.getAttribute('type')],
            ApheleiaTextInputSize[<keyof typeof ApheleiaTextInputSize>this.getAttribute('size')],
            this.getAttribute('id') || undefined,
            this.getAttribute('label') || undefined,
            this.getAttribute('requirement') || undefined,
            this.getAttribute('helper') || undefined,
            this.getAttribute('placeholder') || undefined,
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('icon')]
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaTextInputType, size?: ApheleiaTextInputSize, id?: string, label?: string, requirement?: string, helper?: string, placeholder?: string, icon?: ApheleiaSupportedIcon): void
    {
        this.textInputType = ApheleiaTextInputType.text;
        this.textInputSize = ApheleiaTextInputSize.small;
        this.textInputId = undefined;
        this.textInputLabel = undefined;
        this.textInputRequirement = undefined;
        this.textInputHelper = undefined;
        this.textInputPlaceholder = undefined;
        this.textInputIcon = undefined;

        if (type != undefined && ApheleiaTextInputType[type])
        {
            this.textInputType = type;
        };

        if (size != undefined && ApheleiaTextInputSize[size])
        {
            this.textInputSize = size;
        };

        if (id != undefined)
        {
            this.textInputId = id;
        };

        if (label != undefined)
        {
            this.textInputLabel = label;
        };

        if (requirement != undefined)
        {
            this.textInputRequirement = requirement;
        };

        if (helper != undefined)
        {
            this.textInputHelper = helper;
        };

        if (placeholder != undefined)
        {
            this.textInputPlaceholder = placeholder;
        };

        if (icon != undefined)
        {
            this.textInputIcon = icon;
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
            Create input label element if required 
        */
        if (this.textInputLabel)
        {
            this.label = document.createElement('label');
            this.label.classList.add('aph-text-input-label');
            if (this.textInputId)
            {
                this.label.htmlFor = `${this.textInputId}-input`;
            };
            this.label.innerText = this.textInputLabel;
            this.appendChild(this.label);
        };

        /*
            Create input requirement if required 
        */
        if (this.textInputRequirement)
        {
            this.requirement = document.createElement('span');
            this.requirement.classList.add('aph-text-input-requirement');
            this.requirement.innerText = this.textInputRequirement;
            this.appendChild(this.requirement);
        };

        /*
            Create input container
        */
        this.inputContainer = document.createElement('div');
        this.inputContainer.classList.add('aph-text-input-container');

        /*
            Create input
        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-text-input');
        this.input.type = `${ApheleiaTextInputType[this.textInputType]}`;
        this.input.id = `${this.textInputId}-input`;
        this.input.addEventListener('keyup', () =>
        {
            if (this.textInputCurrentState == ApheleiaTextInputState.error)
            {
                this.updateState(ApheleiaTextInputState.default);
            };
        });
        this.inputContainer.appendChild(this.input);

        /*
            Set placeholder attribute to input if required
        */
        if (this.textInputPlaceholder)
        {
            this.input.placeholder = this.textInputPlaceholder;
        };

        /*
            Set input size 
        */
        if (this.textInputSize != ApheleiaTextInputSize.custom)
        {
            this.input.classList.add(`aph-text-input-size-${ApheleiaTextInputSize[this.textInputSize]}`);
        };

        /*
            Create input icon if required
        */
        if (this.textInputIcon)
        {
            this.icon = new ApheleiaIcon();
            this.icon.setAttributes(this.textInputIcon, 16);
            this.icon.classList.add('aph-input-icon-error');
            this.icon.construct();
            this.input.style.paddingRight = '40px';

            this.inputContainer.appendChild(this.icon);
        };

        /*
            Append the input container
        */
        this.appendChild(this.inputContainer);

        /*
            Create input helper if required
        */
        if (this.textInputHelper)
        {
            this.helper = document.createElement('span');
            this.helper.classList.add('aph-text-input-helper');
            this.helper.innerText = this.textInputHelper;
            this.appendChild(this.helper);
        };
    };

    /*
        Class attributes
    */
    textInputType: ApheleiaTextInputType = ApheleiaTextInputType.text;
    textInputSize: ApheleiaTextInputSize = ApheleiaTextInputSize.small;
    textInputId?: string;
    textInputLabel?: string;
    textInputRequirement?: string;
    textInputHelper?: string;
    textInputPlaceholder?: string;
    textInputIcon?: ApheleiaSupportedIcon;
    textInputCurrentState: ApheleiaTextInputState = ApheleiaTextInputState.default;

    /*
        Class elements
    */
    input?: HTMLInputElement;
    inputContainer?: HTMLDivElement;
    icon: ApheleiaIcon = new ApheleiaIcon();
    label?: HTMLLabelElement;
    requirement?: HTMLSpanElement;
    helper: HTMLSpanElement = document.createElement('span');
    errorLabel?: HTMLSpanElement;

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
window.customElements.define('aph-text-input', ApheleiaTextInput);