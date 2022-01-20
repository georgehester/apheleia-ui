/*
    Class apheleia table
*/
class ApheleiaTable extends HTMLElement
{
    /*
        Class get attributes from html function
    */
    getAttributes(): void
    {
        this.setAttributes(
            this.innerHTML
        );
    };

    /*
        Class set attributes function
    */
    setAttributes(data?: string): void
    {
        this.tableData = undefined;

        if (data && data != '')
        {
            this.tableData = data;
        };
    };

    /*
        Class constructor function
    */
    construct(): void
    {
        this.innerHTML = '';

        if (this.tableData)
        {
            let data = this.tableData;
            data = data.replace(/<aph-table-header>/gi, '<thead>');
            data = data.replace(/<\/aph-table-header>/gi, '</thead>');
            data = data.replace(/<aph-table-body>/gi, '<tbody>');
            data = data.replace(/<\/aph-table-body>/gi, '</tbody>');
            data = data.replace(/<aph-table-row>/gi, '<tr>');
            data = data.replace(/<\/aph-table-row>/gi, '</tr>');
            data = data.replace(/<aph-table-header-data>/gi, '<th>');
            data = data.replace(/<\/aph-table-header-data>/gi, '</th>');
            data = data.replace(/<aph-table-data>/gi, '<td>');
            data = data.replace(/<\/aph-table-data>/gi, '</td>');

            this.table.innerHTML = data;
            this.appendChild(this.table);
        };
    };

    /*
        Class attributes
    */
    tableData?: string;

    /*
        Class elements
    */
    table: HTMLTableElement = document.createElement('table');

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
window.customElements.define('aph-table', ApheleiaTable);