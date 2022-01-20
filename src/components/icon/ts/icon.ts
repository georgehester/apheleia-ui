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
    remove
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
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>'
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
        this.style.width = `${this.iconSize}px`;
        this.style.height = `${this.iconSize}px`;
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