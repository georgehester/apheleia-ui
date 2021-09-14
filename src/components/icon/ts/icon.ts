/*
    Supported icons
*/
enum ApheleiaSupportedIcon
{
    null,
    chevronLeft,
    chevronRight
};

/*
    Supported icons code
*/
enum ApheleiaSupportedIconCode 
{
    '',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>',
    '<svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>'
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
        if (!!ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('name')])
        {
            this.setAttributes(ApheleiaSupportedIcon[<keyof typeof ApheleiaSupportedIcon>this.getAttribute('name')], this.getAttribute('size'));
        }
        else
        {
            this.setAttributes(ApheleiaSupportedIcon.null, this.getAttribute('size'));
        };
    };

    /*
        Class set attributes function
    */
    setAttributes(iconName: ApheleiaSupportedIcon | null, iconSize: string | null): void
    {
        console.log({"iconName": iconName, "iconSize": iconSize});

        if (!iconSize || !Number(iconSize))
        {
            this.iconSize = '16px';
        }
        else
        {
            this.iconSize = `${iconSize}px`;
        };

        if (!iconName)
        {
            this.iconName = ApheleiaSupportedIcon.null;
        }
        else
        {
            this.iconName = iconName;
        };
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        if (this.iconName != null)
        {
            this.innerHTML = ApheleiaSupportedIconCode[this.iconName];
            this.style.width = this.iconSize;
            this.style.height = this.iconSize;
        };
    };

    /*
        Class attributes
    */
    iconName: ApheleiaSupportedIcon = ApheleiaSupportedIcon.null;
    iconSize: string = '16px';

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