/*
    Supported icons
*/
enum ApheleiaSupportedIcon
{
    null,
    chevronleft,
    chevronright,
    chevrondown,
    chevronup,
    error,
    add,
    remove,
    info,
    warning,
    success,
    hamburger,
    cross,
    search
};

/*
    Supported icons code
*/
enum ApheleiaSupportedIconCode 
{
    '',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'
};

/*
    Class apheleia icon
*/
class ApheleiaIcon extends HTMLElement
{
    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('name')] || undefined,
            Number(this.getAttribute('size')) || undefined
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(name?: ApheleiaSupportedIcon, size?: number): void
    {
        this.iconName = ApheleiaSupportedIcon.null;
        this.iconSize = 16;

        if (name && ApheleiaSupportedIcon[name])
        {
            this.iconName = name;
        };

        if (size && Number(size))
        {
            this.iconSize = size;
        };
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        this.innerHTML = ApheleiaSupportedIconCode[this.iconName];
        this.style.width = `${this.iconSize / 16}rem`;
        this.style.height = `${this.iconSize / 16}rem`;
    };

    /*
        Class attributes
    */
    iconName: ApheleiaSupportedIcon = ApheleiaSupportedIcon.null;
    iconSize: number = 16;

    /*
        Class elements
    */

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

window.customElements.define('aph-icon', ApheleiaIcon);