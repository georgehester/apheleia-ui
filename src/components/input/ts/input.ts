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

    updateState(state: ApheleiaTextInputState, error?: string): void
    {
        if (!this.input)
        {
            return;
        };

        if (state == ApheleiaTextInputState.default)
        {
            // Remove error helper
            // Remove input styling
            // Remove icon / styling

            if (this.textInputIcon)
            {
                this.icon?.setAttributes(this.textInputIcon, 16);
                this.icon?.construct();
                this.icon?.classList.remove('aph-text-input-icon-error');
                this.input.style.paddingRight = '40px';
            }
            else 
            {
                this.input.style.paddingRight = '8px';
            };

            this.input.classList.remove('aph-text-input-error');

            
        }
        else if (state == ApheleiaTextInputState.error)
        {
            // Add error helper
            // Add input styling 
            // Add icon /styling

            if (!this.textInputIcon)
            {
                this.icon = new ApheleiaIcon();
                this.inputContainer?.appendChild(this.icon);
            };

            this.icon?.setAttributes(ApheleiaSupportedIcon.error, 16);
            this.icon?.construct();
            this.icon?.classList.add('aph-text-input-icon-error');
            this.input.style.paddingRight = '40px';

            this.input.classList.add('aph-text-input-error');

            if (error)
            {
                this.helper?.classList.add('aph-text-input-helper-error');
            };

            if (error && !this.textInputHelper)
            {
                this.helper = document.createElement('span');
                this.helper.innerText = error;
                this.appendChild(this.helper);
            };

            this.helper?.classList.add('aph-text-input-helper-error');

        }
        else if (state == ApheleiaTextInputState.disabled)
        {
            // Disable input
        };
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
    };

    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaTextInputType, size?: ApheleiaTextInputSize, id?: string, label?: string, requirement?: string, helper?: string, placeholder?: string): void
    {
        this.textInputType = ApheleiaTextInputType.text;
        this.textInputSize = ApheleiaTextInputSize.small;
        this.textInputId = undefined;
        this.textInputLabel = undefined;
        this.textInputRequirement = undefined;
        this.textInputHelper = undefined;
        this.textInputPlaceholder = undefined;

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
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        this.innerHTML = '';

        this.textInputId = 'test-aph-input';
        this.textInputLabel = 'Email';
        this.textInputPlaceholder = 'Email';
        //this.textInputHelper = 'Please include the @ symbol.';
        this.textInputRequirement = 'Enter the email linked to your admin account.';
        this.textInputType = ApheleiaTextInputType.email;
        this.textInputIcon = ApheleiaSupportedIcon.chevronright;

        /*

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

        */
        if (this.textInputRequirement)
        {
            this.requirement = document.createElement('span');
            this.requirement.classList.add('aph-text-input-requirement');
            this.requirement.innerText = this.textInputRequirement;
            this.appendChild(this.requirement);
        };

        this.inputContainer = document.createElement('div');
        this.inputContainer.classList.add('aph-text-input-container');

        /*

        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-text-input');
        this.input.type = `${ApheleiaTextInputType[this.textInputType]}`;
        this.input.id = `${this.textInputId}-input`;
        this.inputContainer.appendChild(this.input);

        if (this.textInputPlaceholder)
        {
            this.input.placeholder = this.textInputPlaceholder;
        };

        if (this.textInputSize != ApheleiaTextInputSize.custom)
        {
            this.input.classList.add(`aph-text-input-size-${ApheleiaTextInputSize[this.textInputSize]}`);
        };

        if (this.textInputIcon)
        {
            this.icon = new ApheleiaIcon();
            this.icon.setAttributes(this.textInputIcon, 16);
            this.icon.classList.add('aph-input-icon-error');
            this.icon.construct();
            this.input.style.paddingRight = '40px';

            this.inputContainer.appendChild(this.icon);
        };

        this.appendChild(this.inputContainer);


        /*

        */
        if (this.textInputHelper)
        {
            this.helper = document.createElement('span');
            this.helper.classList.add('aph-text-input-helper');
            this.helper.innerText = this.textInputHelper;
            this.appendChild(this.helper);
        };

        this.updateState(ApheleiaTextInputState.error, 'Test');
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

    /*
        Class elements
    */
    input?: HTMLInputElement;
    inputContainer?: HTMLDivElement;
    icon?: ApheleiaIcon;
    label?: HTMLLabelElement;
    requirement?: HTMLSpanElement;
    helper?: HTMLSpanElement;
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

window.customElements.define('aph-text-input', ApheleiaTextInput);