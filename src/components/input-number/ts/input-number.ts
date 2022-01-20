/*
    Make sure Apheleia Button is preloaded
*/
/// <reference path="../../button/ts/button.ts" />

/*
    Input sizes
*/
enum ApheleiaNumberInputSize
{
    small,
    medium,
    large,
    custom
};

/*
    Input states
*/
enum ApheleiaNumberInputState
{
    error,
    default,
    disabled
};

/*
    Class apheleia button
*/
class ApheleiaNumberInput extends HTMLElement
{
    /*
        Function which updates the current state of the input
    */
    updateState(state: ApheleiaNumberInputState, error?: string): void
    {
        if (!this.input || !this.inputContainer)
        {
            return;
        };

        this.numberInputCurrentState = state;

        if (state == ApheleiaNumberInputState.default)
        {
            this.input.disabled = false;

            if (this.numberInputHelper)
            {
                this.helper.innerText = this.numberInputHelper;
                this.helper.classList.remove('aph-number-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-number-input-error');
        }
        else if (state == ApheleiaNumberInputState.error)
        {
            this.input.disabled = false;

            if (!this.numberInputHelper && !this.contains(this.helper) && error)
            {
                this.append(this.helper);
            };

            if (error)
            {
                this.helper.innerText = error;
                this.helper.classList.add('aph-number-input-helper-error');
            };

            this.input.classList.add('aph-number-input-error');
        }
        else if (state == ApheleiaNumberInputState.disabled)
        {
            this.input.value = '';
            this.input.disabled = true;

            if (this.numberInputHelper)
            {
                this.helper.innerText = this.numberInputHelper;
                this.helper.classList.remove('aph-number-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-number-input-error');
        };
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            ApheleiaNumberInputSize[<keyof typeof ApheleiaNumberInputSize>this.getAttribute('size')],
            this.getAttribute('id') || undefined,
            this.getAttribute('label') || undefined,
            this.getAttribute('requirement') || undefined,
            this.getAttribute('helper') || undefined,
            this.getAttribute('placeholder') || undefined,
            this.getAttribute('minimum') ? Number(this.getAttribute('minimum')) : undefined,
            this.getAttribute('maximum') ? Number(this.getAttribute('maximum')) : undefined,
            this.getAttribute('step') ? Number(this.getAttribute('step')) : undefined,
            this.hasAttribute('readonly')
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(size?: ApheleiaNumberInputSize, id?: string, label?: string, requirement?: string, helper?: string, placeholder?: string, minimum?: number, maximum?: number, step?: number, readOnly?: boolean): void
    {
        this.numberInputSize = ApheleiaNumberInputSize.small;
        this.numberInputId = undefined;
        this.numberInputLabel = undefined;
        this.numberInputRequirement = undefined;
        this.numberInputPlaceholder = undefined;
        this.numberInputHelper = undefined;
        this.numberInputMinimum = undefined;
        this.numberInputMaximum = undefined;
        this.numberInputStep = 1;
        this.numberInputReadOnly = false;

        if (size != undefined && ApheleiaNumberInputSize[size])
        {
            this.numberInputSize = size;
        };

        if (id != undefined)
        {
            this.numberInputId = id;
        };

        if (label != undefined)
        {
            this.numberInputLabel = label;
        };

        if (requirement != undefined)
        {
            this.numberInputRequirement = requirement;
        };

        if (helper != undefined)
        {
            this.numberInputHelper = helper;
        };

        if (placeholder != undefined)
        {
            this.numberInputPlaceholder = placeholder;
        };

        if (minimum != undefined)
        {
            this.numberInputMinimum = minimum;
        };

        if (maximum != undefined)
        {
            this.numberInputMaximum = maximum;
        };

        if (step != undefined)
        {
            this.numberInputStep = step;
        };

        if (readOnly != undefined)
        {
            this.numberInputReadOnly = readOnly;
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
        if (this.numberInputLabel)
        {
            this.label = document.createElement('label');
            this.label.classList.add('aph-number-input-label');
            if (this.numberInputId)
            {
                this.label.htmlFor = `${this.numberInputId}-input`;
            };
            this.label.innerText = this.numberInputLabel;
            this.appendChild(this.label);
        };

        /*
            Create input requirement if required 
        */
        if (this.numberInputRequirement)
        {
            this.requirement = document.createElement('span');
            this.requirement.classList.add('aph-number-input-requirement');
            this.requirement.innerText = this.numberInputRequirement;
            this.appendChild(this.requirement);
        };

        /*
            Create input container
        */
        this.inputContainer = document.createElement('div');
        this.inputContainer.classList.add('aph-number-input-container');

        /*
            Create input
        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-number-input');
        this.input.type = 'number';
        this.input.id = `${this.numberInputId}-input`;
        this.input.readOnly = this.numberInputReadOnly;
        this.input.disabled = this.numberInputReadOnly;
        this.input.addEventListener('keyup', () =>
        {
            if (this.numberInputCurrentState == ApheleiaNumberInputState.error)
            {
                this.updateState(ApheleiaNumberInputState.default);
            };
        });

        /*
            Add max attribute if required
        */
        if (this.numberInputMinimum)
        {
            this.input.min = String(this.numberInputMinimum);
        };

        /*
            Add min attribute if required
        */
        if (this.numberInputMaximum)
        {
            this.input.max = String(this.numberInputMaximum);
        };

        /*
            Append to the input container
        */
        this.inputContainer.appendChild(this.input);

        /*
            Create the remove button 
        */
        this.buttonRemove = new ApheleiaButton();
        this.buttonRemove.setAttributes(ApheleiaButtonType.inputnumber, ApheleiaButtonSize.small, undefined, ApheleiaSupportedIcon.remove, undefined, undefined, false, false, false, false, this.numberInputReadOnly, '0,0,0,0');
        this.buttonRemove.construct();
        this.inputContainer.appendChild(this.buttonRemove);
        this.buttonRemove.addEventListener('click', () =>
        {
            this.input.value = String(Number(this.input.value) - this.numberInputStep);

            if (this.numberInputCurrentState == ApheleiaNumberInputState.error)
            {
                this.updateState(ApheleiaNumberInputState.default);
            };
        });

        /*
            Create the add button 
        */
        this.buttonAdd = new ApheleiaButton();
        this.buttonAdd.setAttributes(ApheleiaButtonType.inputnumber, ApheleiaButtonSize.small, undefined, ApheleiaSupportedIcon.add, undefined, undefined, false, false, false, false, this.numberInputReadOnly, '0,4,4,0');
        this.buttonAdd.construct();
        this.inputContainer.appendChild(this.buttonAdd);
        this.buttonAdd.addEventListener('click', () =>
        {
            this.input.value = String(Number(this.input.value) + this.numberInputStep);

            if (this.numberInputCurrentState == ApheleiaNumberInputState.error)
            {
                this.updateState(ApheleiaNumberInputState.default);
            };
        });

        /*
            Set placeholder attribute to input if required
        */
        if (this.numberInputPlaceholder)
        {
            this.input.placeholder = this.numberInputPlaceholder;
        };

        /*
            Set input size 
        */
        if (this.numberInputSize != ApheleiaNumberInputSize.custom)
        {
            this.input.classList.add(`aph-number-input-size-${ApheleiaNumberInputSize[this.numberInputSize]}`);
        };

        /*
            Append the input container
        */
        this.append(this.inputContainer);

        /*
            Create input helper if required
        */
        if (this.numberInputHelper)
        {
            this.helper = document.createElement('span');
            this.helper.classList.add('aph-number-input-helper');
            this.helper.innerText = this.numberInputHelper;
            this.appendChild(this.helper);
        };
    };

    /*
        Class attributes
    */
    numberInputSize: ApheleiaNumberInputSize = ApheleiaNumberInputSize.small;
    numberInputId?: string;
    numberInputLabel?: string;
    numberInputRequirement?: string;
    numberInputPlaceholder?: string;
    numberInputHelper?: string;
    numberInputMinimum?: number;
    numberInputMaximum?: number;
    numberInputStep: number = 1;
    numberInputReadOnly: boolean = false;
    numberInputCurrentState: ApheleiaNumberInputState = ApheleiaNumberInputState.default;

    /*
        Class elements
    */
    input: HTMLInputElement = document.createElement('input');
    inputContainer?: HTMLDivElement;
    label?: HTMLLabelElement;
    requirement?: HTMLSpanElement;
    helper: HTMLSpanElement = document.createElement('span');
    buttonRemove?: ApheleiaButton;
    buttonAdd?: ApheleiaButton;

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
window.customElements.define('aph-number-input', ApheleiaNumberInput);