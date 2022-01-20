# Apheleia Elements

- [ApheleiaIcon](#apheleiaicon)
- [ApheleiaButton](#apheleiabutton)
- [ApheleiaTextInput](#apheleiatextinput) 
- [ApheleiaNumberInput](#apheleianumberinput)

# Supported Html Input Types

| Type              | Supported            | [ApheleiaButton](#apheleiaicon) | [ApheleiaTextInput](#apheleiaicon) | [ApheleiaNumberInput](#apheleiaicon) |
| ----------------- | -------------------- | ------------------------------- | ---------------------------------- | ------------------------------------ |
| button            | :white_check_mark:   | :white_check_mark:              | :white_large_square:               | :white_large_square:                 |
| :clock3: checkbox | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| :clock3: color    | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| date              | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| datetime-local    | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| email             | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| :clock3: file     | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| ~~hidden~~        | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| ~~image~~         | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| :x: ~~month~~     | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| number            | :white_check_mark:   | :white_large_square:            | :white_large_square:               | :white_check_mark:                   |
| password          | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| :clock3: radio    | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| :clock3: range    | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| ~~reset~~         | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| search            | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| ~~submit~~        | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| tel               | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| text              | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| time              | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |
| url               | :white_check_mark:   | :white_large_square:            | :white_check_mark:                 | :white_large_square:                 |
| :x: ~~week~~      | :white_large_square: | :white_large_square:            | :white_large_square:               | :white_large_square:                 |

> Key: <br>
> ~~type~~ - No support <br> 
> :clock3: - Support coming later <br>
> :x: - Bad browser support

## Supported Html Button Attributes

| Attribute      | Supported            |
| -------------- | -------------------- |
| autofocus      | :white_large_square: |
| autocomplete   | :white_large_square: |
| disabled       | :white_check_mark:   |
| form           | :white_large_square: |
| formaction     | :white_large_square: |
| formenctype    | :white_large_square: |
| formmethod     | :white_large_square: |
| formnovalidate | :white_large_square: |
| formtarget     | :white_large_square: |
| name           | :white_check_mark:   |
| type           | :white_check_mark:   |
| value          | :white_check_mark:   |

## Supported Html Input Attributes

| Attribute      | Supported            | Type                             |
| -------------- | -------------------- | -------------------------------- |
| accept         | :white_large_square: | file                             |
| alt            | :white_large_square: | image                            |
| autofocus      | :white_large_square: |                                  |
| autocomplete   | :white_check_mark:   |                                  |
| checked        | :white_large_square: | radio, checkbox                  |
| dirname        | :white_large_square: | text, search                     |
| disabled       | :white_check_mark:   |                                  |
| form           | :white_large_square: |                                  |
| formaction     | :white_large_square: | image, submit                    |
| formenctype    | :white_large_square: | image, submit                    |
| formmethod     | :white_large_square: | image, submit                    |
| formnovalidate | :white_large_square: | image, submit                    |
| formtarget     | :white_large_square: | image, submit                    |
| formtarget     | :white_large_square: | image, submit                    |
| height         | :white_large_square: | image                            |
| list           | :white_large_square: |                                  |
| max            | :white_large_square: | number                           |
| maxlength      | :white_large_square: | password, search, tel, text, url |
| min            | :white_large_square: | number                           |
| minlength      | :white_large_square: | password, search, tel, text, url |
| multiple       | :white_large_square: | email, file                      |
| name           | :white_large_square: |                                  |
| pattern        | :white_large_square: | password, text, tel              |
| placeholder    | :white_large_square: | password, search, tel ,text, url |
| readonly       | :white_large_square: |                                  |
| required       | :white_large_square: |                                  |
| size           | :white_large_square: | email, password, tel, text, url  |
| src            | :white_large_square: | image                            |
| step           | :white_large_square: | number                           |
| type           | :white_large_square: |                                  |
| value          | :white_large_square: |                                  |
| width          | :white_large_square: |                                  |

- Use this.input.pattern = '[0-9]*'; with number type on input to make sure invalid data is picked up by css.

# ApheleiaIcon

```html
<aph-icon></aph-icon>
```

## ApheleiaIcon Class Attributes

| Attribute | Values                                          | Html          | Default                    | Description                    |
| --------- | ----------------------------------------------- | ------------- | -------------------------- | ------------------------------ |
| name      | [ApheleiaSupportedIcon](#apheleiasupportedicon) | ```name=""``` | ApheleiaSupportedIcon.null | The icon svg that is used      |
| size      | number                                          | ```size=""``` | 16                         | The size of the icon in pixels |

## ApheleiaIcon Class Elements

## ApheleiaIcon Class Functions

| Function        | Parameteres     | Types                                                        | Nullable                                    | Description |
| --------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------- | ----------- |
| getAttributes() |                 |                                                              |                                             |             |
| setAttributes() | name <br/> size | [ApheleiaSupportedIcon](#apheleiasupportedicon)<br/>  number | :white_check_mark: <br/> :white_check_mark: |             |
| construct()     |                 |                                                              |                                             |             |

## ApheleiaSupportedIcon

- null
- chevronleft
- chevronright
- chevrondown
- chevronup
- error
- add
- remove

# ApheleiaButton

```html
<aph-button></aph-button>
```

## ApheleiaButton Class Attributes

| Attribute   | Values                                          | Html                 | Default                    | Description |
| ----------- | ----------------------------------------------- | -------------------- | -------------------------- | ----------- |
| type        | [ApheleiaButtonType](#apheleiabuttontype)       | ```type=""```        | ApheleiaButtonType.primary |             |
| size        | [ApheleiaButtonSize](#apheleiabuttonsize)       | ```size=""```        | ApheleiaButtonSize.medium  |             |
| text        | string                                          | ```text=""```        | undefined                  |             |
| icon        | [ApheleiaSupportedIcon](#apheleiasupportedicon) | ```icon=""```        | undefined                  |             |
| iconLeft    | [ApheleiaSupportedIcon](#apheleiasupportedicon) | ```iconleft=""```    | undefined                  |             |
| iconRight   | [ApheleiaSupportedIcon](#apheleiasupportedicon) | ```iconright=""```   | undefined                  |             |
| hasLoader   | boolean                                         | ```noloader```       | true                       |             |
| autoDisable | boolean                                         | ```nodisable```      | true                       |             |
| hasMargin   | boolean                                         | ```nomargin```       | true                       |             |
| isFullWidth | boolean                                         | ```fullwidth```      | false                      |             |
| isDisabled  | boolean                                         | ```disabled```       | false                      |             |
| borderRadii | string                                          | ```borderradii=""``` | undefined                  |             |

## ApheleiaButton Class Elements

| Element   | Type                                                                                  | Nullable           | Description |
| --------- | ------------------------------------------------------------------------------------- | ------------------ | ----------- |
| button    | [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) | :white_check_mark: |             |
| loader    | [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)       | :white_check_mark: |             |
| text      | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)     | :white_check_mark: |             |
| icon      | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |
| iconLeft  | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |
| iconRight | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |

## ApheleiaButton Class Functions

| Function        | Parameteres | Types | Nullable | Description |
| --------------- | ----------- | ----- | -------- | ----------- |
| updateState()   |             |       |          |             |
| getAttributes() |             |       |          |             |
| setAttributes() |             |       |          |             |
| construct()     |             |       |          |             |

## ApheleiaButtonType

- primary
- secondary
- tertiary
- ghost
- danger
- dropdown
- dropdownitem
- dropdownitemdanger
- inputnumber

## ApheleiaButtonSize

- small
- medium
- large
- extraLarge
- custom

# ApheleiaTextInput

```html
<aph-text-input></aph-text-input>
```

## ApheleiaTextInput Class Attributes

| Attribute   | Values                                          | Html                 | Default   | Description                                                                                         |
| ----------- | ----------------------------------------------- | -------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| type        | [ApheleiaTextInputType](#apheleiatextinputtype) | ```type=""```        | primary   | The input type of the text input                                                                    |
| size        | [ApheleiaTextInputSize](#apheleiatextinputsize) | ```size=""```        | medium    | The height of the input, with custom set a height using the HTML style attribute or CSS and a class |
| id          | string                                          | ```id=""```          | undefined |                                                                                                     |
| label       | string                                          | ```label=""```       | undefined |                                                                                                     |
| requirement | string                                          | ```requirement=""``` | undefined |                                                                                                     |
| helper      | string                                          | ```helper=""```      | undefined |                                                                                                     |
| placeholder | string                                          | ```placeholder=""``` | undefined |                                                                                                     |
| icon        | [ApheleiaSupportedIcon](#apheleiasupportedicon) | ```icon=""```        | undefined |                                                                                                     |

## ApheleiaTextInput Class Elements

| Element        | Type                                                                                | Nullable           | Description |
| -------------- | ----------------------------------------------------------------------------------- | ------------------ | ----------- |
| input          | [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | :white_check_mark: |             |
| inputContainer | [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)     | :white_check_mark: |             |
| icon           | [ApheleiaIcon](#apheleiaicon)                                                       | :white_check_mark: |             |
| label          | [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) | :white_check_mark: |             |
| requirement    | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)   | :white_check_mark: |             |
| helper         | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)   | :white_check_mark: |             |

## ApheleiaTextInput Class Functions

| Function        | Parameteres | Types | Nullable | Description |
| --------------- | ----------- | ----- | -------- | ----------- |
| updateState()   |             |       |          |             |
| getAttributes() |             |       |          |             |
| setAttributes() |             |       |          |             |
| construct()     |             |       |          |             |

## ApheleiaTextInputType

- email
- password
- search
- tel
- text
- url

## ApheleiaTextInputSize

- small
- medium
- large
- custom

# ApheleiaNumberInput

```html
<aph-number-input></aph-number-input>
```

## ApheleiaNumberInput Class Attributes

| Attribute   | Values                                              | Html                 | Default                        | Description                                                                                         |
| ----------- | --------------------------------------------------- | -------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------- |
| size        | [ApheleiaNumberInputSize](#apheleianumberinputsize) | ```size=""```        | ApheleiaNumberInputSize.medium | The height of the input, with custom set a height using the HTML style attribute or CSS and a class |
| id          | string                                              | ```id=""```          | undefined                      |                                                                                                     |
| label       | string                                              | ```label=""```       | undefined                      |                                                                                                     |
| requirement | string                                              | ```requirement=""``` | undefined                      |                                                                                                     |
| helper      | string                                              | ```helper=""```      | undefined                      |                                                                                                     |
| placeholder | string                                              | ```placeholder=""``` | undefined                      |                                                                                                     |
| minimum     | number                                              | ```minimum=""```     | undefined                      |                                                                                                     |
| maximum     | number                                              | ```maximum=""```     | undefined                      |                                                                                                     |
| step        | number                                              | ```step=""```        | 1                              |                                                                                                     |
| readOnly    | boolean                                             | ```readonly```       | false                          |                                                                                                     |

## ApheleiaNumberInput Class Elements

| Element        | Type                                                                                | Nullable           | Description |
| -------------- | ----------------------------------------------------------------------------------- | ------------------ | ----------- |
| input          | [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | :white_check_mark: |             |
| inputContainer | [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)     | :white_check_mark: |             |
| label          | [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) | :white_check_mark: |             |
| requirement    | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)   | :white_check_mark: |             |
| helper         | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)   | :white_check_mark: |             |
| buttonRemove   | [ApheleiaButton](#apheleiabutton)                                                   | :white_check_mark: |             |
| buttonAdd      | [ApheleiaButton](#apheleiabutton)                                                   | :white_check_mark: |             |

## ApheleiaNumberInput Class Functions

| Function        | Parameteres | Types | Nullable | Description |
| --------------- | ----------- | ----- | -------- | ----------- |
| updateState()   |             |       |          |             |
| getAttributes() |             |       |          |             |
| setAttributes() |             |       |          |             |
| construct()     |             |       |          |             |

## ApheleiaNumberInputSize

- small
- medium
- large
- custom