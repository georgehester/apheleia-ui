/*
    Make sure Apheleia Icon is preloaded
*/
/// <reference path="../../icon/ts/icon.ts" />

/*
    Input sizes
*/
enum ApheleiaInputSize
{
    small,
    medium,
    large,
    custom
};


/*
    Input states
*/
enum ApheleiaInputState
{
    error,
    default,
    disabled
};

/*
    Input types
*/
enum ApheleiaInputType
{
    email,
    number,
    password,
    search,
    tel,
    text,
    textarea,
    url
};

/*
    Class apheleia button
*/
class ApheleiaInput extends HTMLElement
{
    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
    };

    /*
        Class set attributes function
    */
    setAttributes(): void
    {
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        this.innerHTML = '';

        this.inputId = 'test-aph-input';
        this.inputLabel = 'Tincidunt';
        this.inputHelper = 'Lorem ipsum dolor sit amet.';
        this.inputRequirement = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        this.inputType = ApheleiaInputType.number;

        /*

        */
        if (this.inputLabel)
        {
            this.label = document.createElement('label');
            this.label.classList.add('aph-input-label');
            if (this.inputId)
            {
                this.label.htmlFor = `${this.inputId}-input`;
            };
            this.label.innerText = this.inputLabel;
            this.appendChild(this.label);
        };

        /*

        */
        if (this.inputRequirement)
        {
            this.requirement = document.createElement('span');
            this.requirement.classList.add('aph-input-top-helper');
            this.requirement.innerText = this.inputRequirement;
            this.appendChild(this.requirement);
        };

        /*

        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-input');
        this.input.type = `${ApheleiaInputType[this.inputType]}`;
        this.input.id = `${this.inputId}-input`;
        this.appendChild(this.input);

        if (this.inputSize != ApheleiaInputSize.custom)
        {
            this.input.classList.add(`aph-input-size-${ApheleiaInputSize[this.inputSize]}`);
        };

        //this.input.pattern = '[0-9]*';

        /*

        */
        if (this.inputHelper)
        {
            this.helper = document.createElement('span');
            this.helper.classList.add('aph-input-helper');
            this.helper.innerText = this.inputHelper;
            this.appendChild(this.helper);
        };
    };

    /*
        Class attributes
    */
    inputId?: string;
    inputType: ApheleiaInputType = ApheleiaInputType.text;
    inputLabel?: string;
    inputHelper?: string;
    inputRequirement?: string;
    inputSize: ApheleiaInputSize = ApheleiaInputSize.medium;

    inputPlaceholder?: string;

    /*
        Class elements
    */
    input?: HTMLInputElement;
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

window.customElements.define('aph-input', ApheleiaInput);