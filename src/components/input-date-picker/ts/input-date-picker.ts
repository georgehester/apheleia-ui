/*
    Make sure Apheleia Button is preloaded
*/
/// <reference path="../../button/ts/button.ts" />

/*
    Input sizes
*/
enum ApheleiaDateInputSize
{
    small,
    medium,
    large,
    custom
};

/*
    Input states
*/
enum ApheleiaDateInputState
{
    error,
    default,
    disabled
};

/*
    Input types
*/
enum ApheleiaDateInputType
{
    date,
    datetime
};

/*
    Class apheleia date input
*/
class ApheleiaDateInput extends HTMLElement
{
    /*
        Function which updates the current state of the input
    */
    updateState(state: ApheleiaDateInputState, error?: string): void
    {
        if (!this.input || !this.inputContainer)
        {
            return;
        };

        this.dateInputCurrentState = state;

        if (state == ApheleiaDateInputState.default)
        {
            this.input.disabled = false;

            if (this.dateInputHelper)
            {
                this.helper.innerText = this.dateInputHelper;
                this.helper.classList.remove('aph-date-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-date-input-error');
        }
        else if (state == ApheleiaDateInputState.error)
        {
            this.input.disabled = false;

            if (!this.dateInputHelper && !this.contains(this.helper) && error)
            {
                this.append(this.helper);
            };

            if (error)
            {
                this.helper.innerText = error;
                this.helper.classList.add('aph-date-input-helper-error');
            };

            this.input.classList.add('aph-date-input-error');
        }
        else if (state == ApheleiaDateInputState.disabled)
        {
            this.input.value = '';
            this.input.disabled = true;

            if (this.dateInputHelper)
            {
                this.helper.innerText = this.dateInputHelper;
                this.helper.classList.remove('aph-date-input-helper-error');
            }
            else if (this.contains(this.helper))
            {
                this.removeChild(this.helper);
            };

            this.input.classList.remove('aph-date-input-error');
        };
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            ApheleiaDateInputType[<keyof typeof ApheleiaDateInputType>this.getAttribute('type')],
            ApheleiaDateInputSize[<keyof typeof ApheleiaDateInputSize>this.getAttribute('size')],
            this.getAttribute('id') || undefined,
            this.getAttribute('label') || undefined,
            this.getAttribute('requirement') || undefined,
            this.getAttribute('helper') || undefined,
            this.getAttribute('placeholder') || undefined,
            this.getAttribute('default') || undefined,
            this.getAttribute('minimum') ? Number(this.getAttribute('minimum')) : undefined,
            this.getAttribute('maximum') ? Number(this.getAttribute('maximum')) : undefined,
            this.getAttribute('step') ? Number(this.getAttribute('step')) : undefined,
            this.hasAttribute('readonly')
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(type?: ApheleiaDateInputType, size?: ApheleiaDateInputSize, id?: string, label?: string, requirement?: string, helper?: string, placeholder?: string, defaultValue?: string, minimum?: number, maximum?: number, step?: number, readOnly?: boolean): void
    {
        this.dateInputType = ApheleiaDateInputType.date;
        this.dateInputSize = ApheleiaDateInputSize.small;
        this.dateInputId = undefined;
        this.dateInputLabel = undefined;
        this.dateInputRequirement = undefined;
        this.dateInputPlaceholder = undefined;
        this.dateInputDefault = undefined;
        this.dateInputHelper = undefined;
        this.dateInputMaximum = undefined;
        this.dateInputMinimum = undefined;
        this.dateInputStep = 1;
        this.dateInputReadOnly = false;

        if (type != undefined && ApheleiaDateInputType[type])
        {
            this.dateInputType = type;
        };

        if (size != undefined && ApheleiaDateInputSize[size])
        {
            this.dateInputSize = size;
        };

        if (id != undefined)
        {
            this.dateInputId = id;
        };

        if (label != undefined)
        {
            this.dateInputLabel = label;
        };

        if (requirement != undefined)
        {
            this.dateInputRequirement = requirement;
        };

        if (helper != undefined)
        {
            this.dateInputHelper = helper;
        };

        if (placeholder != undefined)
        {
            this.dateInputPlaceholder = placeholder;
        };

        if (defaultValue != undefined)
        {
            this.dateInputDefault = defaultValue;
        };

        if (minimum != undefined)
        {
            this.dateInputMinimum = minimum;
        };

        if (maximum != undefined)
        {
            this.dateInputMaximum = maximum;
        };

        if (step != undefined)
        {
            this.dateInputStep = step;
        };

        if (readOnly != undefined)
        {
            this.dateInputReadOnly = readOnly;
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
        if (this.dateInputLabel)
        {
            this.label = document.createElement('label');
            this.label.classList.add('aph-date-input-label');
            if (this.dateInputId)
            {
                this.label.htmlFor = `${this.dateInputId}-input`;
            };
            this.label.innerText = this.dateInputLabel;
            this.appendChild(this.label);
        };

        /*
            Create input requirement if required 
        */
        if (this.dateInputRequirement)
        {
            this.requirement = document.createElement('span');
            this.requirement.classList.add('aph-date-input-requirement');
            this.requirement.innerText = this.dateInputRequirement;
            this.appendChild(this.requirement);
        };

        /*
            Create input container
        */
        this.inputContainer = document.createElement('div');
        this.inputContainer.classList.add('aph-date-input-container');

        /*
            Create input
        */
        this.input = document.createElement('input');
        this.input.classList.add('aph-date-input');
        this.input.id = `${this.dateInputId}-input`;
        this.input.readOnly = this.dateInputReadOnly;
        this.input.disabled = this.dateInputReadOnly;
        this.input.addEventListener('input', () =>
        {
            console.log('test')
            if (this.dateInputCurrentState == ApheleiaDateInputState.error)
            {
                this.updateState(ApheleiaDateInputState.default);
            };
        });

        /*
            Add input type 
        */
        if (this.dateInputType == ApheleiaDateInputType.date)
        {
            this.input.type = 'date';
        }
        else if (this.dateInputType == ApheleiaDateInputType.datetime) 
        {
            this.input.type = 'datetime-local';
        };

        /*
            Add max attribute if required
        */
        if (this.dateInputMinimum)
        {
            this.input.min = String(this.dateInputMinimum);
        };

        /*
            Add min attribute if required
        */
        if (this.dateInputMaximum)
        {
            this.input.max = String(this.dateInputMaximum);
        };

        /*
            Add step attribute if required
        */
        if (this.dateInputStep)
        {
            this.input.step = String(this.dateInputStep);
        };

        /*
            Append to the input container
        */
        this.inputContainer.appendChild(this.input);

        /*
            Set placeholder attribute to input if required
        */
        if (this.dateInputPlaceholder)
        {
            this.input.placeholder = this.dateInputPlaceholder;
        };

        /*
            Set input size 
        */
        if (this.dateInputSize != ApheleiaDateInputSize.custom)
        {
            this.input.classList.add(`aph-date-input-size-${ApheleiaDateInputSize[this.dateInputSize]}`);
        };

        /*
            Append the input container
        */
        this.append(this.inputContainer);

        /*
            Create input helper if required
        */
        if (this.dateInputHelper)
        {
            this.helper = document.createElement('span');
            this.helper.classList.add('aph-date-input-helper');
            this.helper.innerText = this.dateInputHelper;
            this.appendChild(this.helper);
        };
    };

    /*
        Class attributes
    */
    dateInputSize: ApheleiaDateInputSize = ApheleiaDateInputSize.small;
    dateInputType: ApheleiaDateInputType = ApheleiaDateInputType.date;
    dateInputId?: string;
    dateInputLabel?: string;
    dateInputRequirement?: string;
    dateInputPlaceholder?: string;
    dateInputDefault?: string;
    dateInputHelper?: string;
    dateInputMinimum?: number;
    dateInputMaximum?: number;
    dateInputStep: number = 1;
    dateInputReadOnly: boolean = false;
    dateInputCurrentState: ApheleiaDateInputState = ApheleiaDateInputState.default;

    /*
        Class elements
    */
    input: HTMLInputElement = document.createElement('input');
    inputContainer?: HTMLDivElement;
    label?: HTMLLabelElement;
    requirement?: HTMLSpanElement;
    helper: HTMLSpanElement = document.createElement('span');

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
window.customElements.define('aph-date-input', ApheleiaDateInput);