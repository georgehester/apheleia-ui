/*
    Make sure Apheleia Button is preloaded
*/
/// <reference path="../../button/ts/button.ts" />

/*
    Modal states
*/
enum ApheleiaModalState
{
    open,
    closed
};

/*
    Class apheleia modal
*/
class ApheleiaModal extends HTMLElement
{
    /*
        Function to update modal state
    */
    updateState(state: ApheleiaModalState): void
    {
        let bodies: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName('body');

        switch (state)
        {
            case ApheleiaModalState.open:
                /*
                    Make body unscrollable
                */
                for (let i = 0; i < bodies.length; i++)
                {
                    bodies[i].style.overflow = 'hidden';
                };

                this.style.display = 'block';
                break;
            case ApheleiaModalState.closed:
                /*
                    Make body scrollable
                */
                for (let i = 0; i < bodies.length; i++)
                {
                    bodies[i].style.overflow = 'auto';
                };

                this.style.display = 'none';
                break;
        };
    };

    /*
        Function to reset modal content
    */
    private resetModal(): void 
    {
        /*
            Reset inner html
        */
        this.innerHTML = '';
    };

    /*
        Function to handle sumbit button being clicked
    */
    private submitButtonClicked(): void 
    {
        let eventData = {};

        if (this.modalSubmitButtonData)
        {
            eventData = this.modalSubmitButtonData;
        };

        /*
            Create custom event
        */
        let submitButtonClickedEvent = new CustomEvent('sumbitclicked', eventData);

        /*
            Dispatch event
        */
        this.dispatchEvent(submitButtonClickedEvent);
    };

    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            this.getAttribute('headertext') || undefined,
            this.hasAttribute('noclose') ? false : true,
            this.hasAttribute('noactions') ? false : true,
            ApheleiaButtonType[<keyof typeof ApheleiaButtonType>this.getAttribute('submittype')] || undefined,
            this.getAttribute('submittext') || undefined,
            this.innerHTML,
            this.hasAttribute('noautoopen') ? false : true
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(headerText?: string, hasCloseButton?: boolean, hasActionButtons?: boolean, submitButtonType?: ApheleiaButtonType, submitButtonText?: string, content?: string, autoOpen?: boolean): void
    {
        this.modalHeaderText = undefined;
        this.modalHasCloseButton = true;
        this.modalHasActionButtons = true;
        this.modalSubmitButtonType = ApheleiaButtonType.primary;
        this.modalSubmitButtonText = 'Submit';
        this.modalContent = undefined;
        this.modalAutoOpen = true;

        if (headerText)
        {
            this.modalHeaderText = headerText;
        };

        if (hasCloseButton != undefined)
        {
            this.modalHasCloseButton = hasCloseButton;
        };

        if (hasActionButtons != undefined)
        {
            this.modalHasActionButtons = hasActionButtons;
        };

        if (submitButtonType)
        {
            this.modalSubmitButtonType = submitButtonType;
        };

        if (submitButtonText)
        {
            this.modalSubmitButtonText = submitButtonText;
        };

        if (content != '')
        {
            this.modalContent = content;
        };

        if (autoOpen != undefined)
        {
            this.modalAutoOpen = autoOpen;
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
            Generate modal element
        */
        this.modalModal = document.createElement('div');
        this.modalModal.classList.add('aph-modal');
        this.appendChild(this.modalModal);

        /*
            Create header container
        */
        this.modalHeaderContainer = document.createElement('div');
        this.modalHeaderContainer.classList.add('aph-modal-header-container');
        this.modalModal.appendChild(this.modalHeaderContainer);

        /*
            Create header container
        */
        if (this.modalHeaderText)
        {
            let test = document.createElement('a');
            test.innerHTML = this.modalHeaderText;
            this.modalHeaderContainer.appendChild(test);
        };

        /*
            Create close button if required
        */
        if (this.modalHasCloseButton)
        {
            this.modalCloseButton = new ApheleiaButton();
            this.modalCloseButton.setAttributes(ApheleiaButtonType.dropdownitem, ApheleiaButtonSize.small, undefined, ApheleiaSupportedIcon.cross, undefined, undefined, false, false, false, false, false, undefined);
            this.modalCloseButton.construct();
            this.modalCloseButton.onclick = () => this.resetModal();
            this.modalHeaderContainer.appendChild(this.modalCloseButton);
        };

        /*
            Create content container
        */
        this.modalContentContainer = document.createElement('div');
        this.modalContentContainer.classList.add('aph-modal-content-container');
        this.modalModal.appendChild(this.modalContentContainer);

        /*
            Add content to container if required
        */
        if (this.modalContent)
        {
            this.modalContentContainer.insertAdjacentHTML('afterbegin', this.modalContent);
        };

        /*
            Create action buttons if required
        */
        if (this.modalHasActionButtons)
        {
            /*
                Create action buttons container
            */
            this.modalActionButtonsContainer = document.createElement('div');
            this.modalActionButtonsContainer.classList.add('aph-modal-action-buttons-container');
            this.modalModal.appendChild(this.modalActionButtonsContainer);

            /*
                Create cancel button
            */
            this.modalCancelButton = new ApheleiaButton();
            this.modalCancelButton.setAttributes(ApheleiaButtonType.secondary, ApheleiaButtonSize.extralarge, 'Cancel', undefined, undefined, undefined, false, false, false, true, false, '0,0,0,0');
            this.modalCancelButton.construct();
            this.modalCancelButton.onclick = () => this.resetModal();
            this.modalActionButtonsContainer.appendChild(this.modalCancelButton);

            /*
                Create submit button
            */
            this.modalSubmitButton = new ApheleiaButton();
            this.modalSubmitButton.setAttributes(this.modalSubmitButtonType, ApheleiaButtonSize.extralarge, this.modalSubmitButtonText, undefined, undefined, undefined, false, false, false, true, false, '0,0,0,0');
            this.modalSubmitButton.construct();
            this.modalSubmitButton.onclick = () => this.submitButtonClicked();
            this.modalActionButtonsContainer.appendChild(this.modalSubmitButton);
        };

        /*
            Set modal to be open if required
        */
        if (this.modalAutoOpen)
        {
            this.updateState(ApheleiaModalState.open);
        };
    };

    /*
        Class attributes
    */
    modalHeaderText?: string;
    modalHasCloseButton: boolean = true;
    modalHasActionButtons: boolean = true;
    modalSubmitButtonType: ApheleiaButtonType = ApheleiaButtonType.primary;
    modalSubmitButtonText: string = 'Submit';
    modalContent?: string;
    modalSubmitButtonData?: Object;
    modalAutoOpen: boolean = true;

    /*
        Class elements
    */
    modalModal: HTMLDivElement = document.createElement('div');
    modalHeaderContainer: HTMLDivElement = document.createElement('div');
    modalContentContainer: HTMLDivElement = document.createElement('div');
    modalActionButtonsContainer: HTMLDivElement = document.createElement('div');
    modalCloseButton: ApheleiaButton = new ApheleiaButton();
    modalSubmitButton: ApheleiaButton = new ApheleiaButton();
    modalCancelButton: ApheleiaButton = new ApheleiaButton();

    /*
        Class constructor
    */
    constructor()
    {
        super();
        this.getAttributes();
        this.construct();

        /*
            Add event listener for modal surround clicked
        */
        window.addEventListener('click', (event) =>
        {
            if (this.modalModal.getBoundingClientRect().left < event.x && this.modalModal.getBoundingClientRect().right > event.x && this.modalModal.getBoundingClientRect().top < event.y && this.modalModal.getBoundingClientRect().bottom > event.y)
            {
                return;
            };

            this.updateState(ApheleiaModalState.closed);
        });
    };
};

/*
    Define the class as a custom html element
*/
window.customElements.define('aph-modal', ApheleiaModal);