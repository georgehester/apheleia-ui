/*
    Make sure Apheleia Icon is preloaded
*/
/// <reference path="../../icon/ts/icon.ts" />

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
        this.inputLabel = 'Email';
        this.inputHelper = 'Please enter an email with an @ and tld'
        this.inputTopHelper = 'Please enter an email with an @ and tld'

        /*

        */
        if (this.inputLabel)
        {
            this.label = document.createElement('label');
            if (this.inputId)
            {
                this.label.htmlFor = `${this.inputId}-input`;
            };
            this.label.innerText = this.inputLabel;
            this.appendChild(this.label);
        };

        /*

        */
        if (this.inputTopHelper)
        {
            this.topHelper = document.createElement('span');
            this.topHelper.innerText = this.inputTopHelper;
            this.appendChild(this.topHelper);
        };

        /*

        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-input');
        this.input.type = `${ApheleiaInputType[this.inputType]}`;
        this.input.id = `${this.inputId}-input`;
        this.appendChild(this.input);

        /*

        */
        if (this.inputHelper)
        {
            this.helper = document.createElement('span');
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
    inputTopHelper?: string;

    inputPlaceholder?: string;

    /*
        Class elements
    */
    input?: HTMLInputElement;
    icon?: ApheleiaIcon;
    label?: HTMLLabelElement;
    topHelper?: HTMLSpanElement;
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