/*
    Supported icons
*/
enum ApheleiaSupportedIcon
{
    null,
    chevronleft,
    chevronright,
    error
};

/*
    Supported icons code
*/
enum ApheleiaSupportedIconCode 
{
    '',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/></svg>'
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
    setAttributes(iconName?: ApheleiaSupportedIcon, iconSize?: number): void
    {
        this.iconName = ApheleiaSupportedIcon.null;
        this.iconSize = 16;

        if (iconName && ApheleiaSupportedIcon[iconName])
        {
            this.iconName = iconName;
        };

        if (iconSize && Number(iconSize))
        {
            this.iconSize = iconSize;
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