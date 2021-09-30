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
    text,
    email,
    tel,
    url,
    search,
    password,
    number
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

        /*

        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-input');
        this.input.type = `${ApheleiaInputType[this.inputType]}`;


    };

    /*
        Class attributes
    */
    inputType: ApheleiaInputType = ApheleiaInputType.text;

    /*
        Class elements
    */
    input?: HTMLInputElement;
    icon?: ApheleiaIcon;
    label?: HTMLLabelElement;
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