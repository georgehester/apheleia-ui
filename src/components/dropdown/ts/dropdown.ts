/*
    Make sure Apheleia Icon and Button is preloaded
*/
/// <reference path="../../button/ts/button.ts" />

/*
    Dropdown item types
*/
enum ApheleiaDropdownType
{
    default,
    danger
};

/*
    Dropdown item types map
*/
const ApheleiaDropdownTypeButtonType: ApheleiaButtonType[] =
    [
        ApheleiaButtonType.dropdownitem,
        ApheleiaButtonType.dropdownitemdanger
    ];

/*
    Dropdown item
*/
interface ApheleiaDropdownItem
{
    type: ApheleiaDropdownType,
    text: string,
    data: string
};

/*
    Dropdown default item
*/
interface ApheleiaDropdownDefaultItem
{
    text: string,
    data: string
};

/*
    Class apheleia dropdown
*/
class ApheleiaDropdown extends HTMLElement
{
    /*
        Function to handle dropdown button being clicked 
    */
    private dropdownButtonClicked(): void
    {
        /*
            Check the current state of the dropdown
        */
        switch (this.dropdownIsOpen)
        {
            case true:
                /*
                    Close the dropdown
                */
                this.dropdown.style.display = 'none';
                this.dropdownIsOpen = !this.dropdownIsOpen;
                break;
            case false:
                /*
                    Open the dropdown
                */
                this.dropdown.style.display = 'block';
                this.dropdownIsOpen = !this.dropdownIsOpen;

                /*
                    Check if dropdown will overflow window
                */
                if (this.button.getBoundingClientRect().left + this.dropdown.clientWidth > window.innerWidth)
                {
                    this.dropdown.style.right = '0px';
                }
                else
                {
                    this.dropdown.style.left = '0px';
                };

                /*
                    Check if dropdown will overflow window
                */
                if (this.button.getBoundingClientRect().top + this.button.getBoundingClientRect().height + 8 + this.dropdown.clientHeight > window.innerHeight)
                {
                    this.dropdown.style.marginTop = `-${this.dropdown.clientHeight + this.button.getBoundingClientRect().height + 8}px`;
                }
                else
                {
                    this.dropdown.style.marginTop = '8px';
                };
                break;
        };
    };

    /*
        Function to handle dropdown item being clicked 
    */
    private dropdownItemClicked(item: ApheleiaDropdownDefaultItem): void
    {
        /*
            Create custom event 
        */
        let itemSelectedEvent = new CustomEvent('itemselected',
            {
                detail: {
                    text: item.text,
                    data: item.data
                }
            });

        /*
            Dispatch event
        */
        this.dispatchEvent(itemSelectedEvent);

        /*
            Update current item
        */
        this.dropdownCurrentItem = item;

        /*
            Update text in dropdown if required
        */
        if (!this.dropdownIconOnly)
        {
            this.button.setAttributes(ApheleiaButtonType.dropdown, ApheleiaButtonSize.small, item.text, undefined, undefined, this.dropdownIcon, false, false, true, false, false);
            this.button.construct();
        };

        /*
            Close dropdown menu
        */
        this.dropdownButtonClicked();
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            <Array<Array<ApheleiaDropdownItem>>>JSON.parse(this.getAttribute('items') || ''),
            <ApheleiaDropdownDefaultItem>JSON.parse(this.getAttribute('default') || ''),
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('icon')] || undefined,
            this.hasAttribute('icononly')
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(items?: Array<Array<ApheleiaDropdownItem>>, defaultItem?: ApheleiaDropdownDefaultItem, icon?: ApheleiaSupportedIcon, iconOnly?: boolean): void
    {
        /*
            Set default attribute values
        */
        this.dropdownItems = [];
        this.dropdownDefaultItem = undefined;
        this.dropdownIcon = ApheleiaSupportedIcon.chevrondown;
        this.dropdownIconOnly = false;

        if (items != undefined)
        {
            this.dropdownItems = items;
        };

        this.dropdownDefaultItem = defaultItem;

        if (icon)
        {
            this.dropdownIcon = icon;
        };

        if (iconOnly)
        {
            this.dropdownIconOnly = iconOnly;
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
            Generate dropdown button
        */
        this.button = new ApheleiaButton();

        /*
            Apply button attributes
        */
        if (this.dropdownIconOnly && this.dropdownIcon != undefined)
        {
            this.button.setAttributes(ApheleiaButtonType.dropdown, ApheleiaButtonSize.small, undefined, this.dropdownIcon, undefined, undefined, false, false, true, false, false);
        }
        else
        {
            if (this.dropdownDefaultItem)
            {
                this.dropdownCurrentItem = this.dropdownDefaultItem;
                this.button.setAttributes(ApheleiaButtonType.dropdown, ApheleiaButtonSize.small, this.dropdownDefaultItem.text, undefined, undefined, this.dropdownIcon, false, false, true, false, false);
            }
            else 
            {
                this.dropdownCurrentItem = undefined;
                this.button.setAttributes(ApheleiaButtonType.dropdown, ApheleiaButtonSize.small, 'Select', undefined, undefined, this.dropdownIcon, false, false, true, false, false);
            };
        };
        this.button.construct();

        /*
            Add event listener to button 
        */
        this.button.addEventListener('click', () => this.dropdownButtonClicked());
        this.appendChild(this.button);
        //this.style.height = '32px';

        /*
            Generate dropdown div
        */
        this.dropdown = document.createElement('div');
        this.dropdown.classList.add('aph-dropdown-dropdown');

        /*
            Add item groups to dropdown
        */
        for (let i = 0; i < this.dropdownItems.length; i++)
        {
            /*
                Add seperator
            */
            if (i != 0)
            {
                let seperator = document.createElement('div');
                seperator.classList.add('aph-dropdown-dropdown-seperator');
                this.dropdown.appendChild(seperator);
            };

            /*
                Add item to dropdown
            */
            for (let j = 0; j < this.dropdownItems[i].length; j++)
            {
                /*
                    Generate button
                */
                let button = new ApheleiaButton();
                button.setAttributes(ApheleiaDropdownTypeButtonType[Number(ApheleiaDropdownType[this.dropdownItems[i][j].type])], ApheleiaButtonSize.small, this.dropdownItems[i][j].text, undefined, undefined, undefined, false, false, false, true, false);
                button.construct();
                button.addEventListener('click', () => this.dropdownItemClicked({ "data": this.dropdownItems[i][j].data, "text": this.dropdownItems[i][j].text }));
                button.style.width = '100%';
                this.dropdown.appendChild(button);
            };
        };

        /*
            Add dropdown and apply styling
        */
        this.appendChild(this.dropdown);
        this.dropdown.style.display = 'none';
        this.dropdownIsOpen = false;
    };

    /*
        Class attributes
    */
    dropdownItems: Array<Array<ApheleiaDropdownItem>> = [];
    dropdownIcon: ApheleiaSupportedIcon = ApheleiaSupportedIcon.chevrondown;
    dropdownDefaultItem?: ApheleiaDropdownDefaultItem;
    dropdownIconOnly: boolean = false;
    dropdownCurrentItem?: ApheleiaDropdownDefaultItem;
    dropdownIsOpen: boolean = false;

    /*
        Class elements
    */
    button: ApheleiaButton = new ApheleiaButton();
    dropdown: HTMLDivElement = document.createElement('div');

    /*
        Class constructor
    */
    constructor()
    {
        super();
        this.getAttributes();
        this.construct();

        /*
            Check if user has clicked away from dropdown
        */
        window.addEventListener('click', (event) =>
        {
            if (this.dropdownIsOpen)
            {
                if (this.getBoundingClientRect().left < event.x && this.getBoundingClientRect().right > event.x && this.getBoundingClientRect().top < event.y && this.getBoundingClientRect().bottom > event.y)
                {
                    return;
                };

                if (this.dropdown.getBoundingClientRect().left < event.x && this.dropdown.getBoundingClientRect().right > event.x && this.dropdown.getBoundingClientRect().top < event.y && this.dropdown.getBoundingClientRect().bottom > event.y)
                {
                    return;
                };

                this.dropdownButtonClicked();
            };
        });
    };
};

/*
    Define the class as a custom html element
*/
window.customElements.define('aph-dropdown', ApheleiaDropdown);