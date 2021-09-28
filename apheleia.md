# ApheleiaIcon

```html
<aph-icon></aph-icon>
```

## ApheleiaIcon Attributes

| Attribute | Values                                          | Default | Description                     |
| --------- | ----------------------------------------------- | ------- | ------------------------------- |
| name      | [ApheleiaSupportedIcon](#apheleiasupportedicon) | null    | The icon that is used.          |
| size      | integer                                         | 16      | The size of the icon in pixels. |

## ApheleiaIcon Functions

| Function        | Parameteres             | Types                                                         | Nullable | Description                                 |
| --------------- | ----------------------- | ------------------------------------------------------------- | -------- | ------------------------------------------- |
| getAttributes() |                         |                                                               |          |                                             |
| setAttributes() | iconName <br/> iconSize | [ApheleiaSupportedIcon](#apheleiasupportedicon)<br/>  integer |           :white_check_mark: <br/> :white_check_mark: ||
| construct()     |                         |                                                               |          |                                             |

# ApheleiaSupportedIcon

- null
- chevronLeft
- chevronRight

# ApheleiaButton

```html
<aph-button></aph-button>
```

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

## ApheleiaButton Attributes

| Attribute | Values                                          | Default | Description                                                                                                                    |
| --------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| type      | [ApheleiaButtonType](#apheleiabuttontype)       | primary | The styled type of the button.                                                                                                 |
| size      | [ApheleiaButtonSize](#apheleiabuttonsize)       | medium  | The height of the button, with custom set a height using the HTML style attribute or CSS and a class.                          |
| text      | string                                          | null    | The text shown on the button. This always has priority over icon.                                                              |
| icon      | [ApheleiaSupportedIcon](#apheleiasupportedicon) | null    | The icon shown on the button.                                                                                                  |
| iconleft  | [ApheleiaSupportedIcon](#apheleiasupportedicon) | null    | The icon shown to the left of the text or icon on the button.                                                                  |
| iconright | [ApheleiaSupportedIcon](#apheleiasupportedicon) | null    | The icon shown to the right of the text or icon on the button.                                                                 |
| noloader  | boolean                                         | false   | When true the button will have no spinning loader when clicked.                                                                |
| nodisable | boolean                                         | false   | When true the button will not go into a state where it cannot be clicked again once clicked and will instead remain clickable. |
| nomargin  | boolean                                         | false   | When true the text will have no extra margin to the right of the button.                                                       |
| fullwidth | boolean                                         | false   | When true the button will occupy 100% of the width of the parent element.                                                      |
| disabled  | boolean                                         | false   | When true the button will be disabled.                                                                                         |

## ApheleiaButton Functions

| Function        | Parameteres | Types | Nullable | Description |
| --------------- | ----------- | ----- | -------- | ----------- |
| updateState()   |             |       |          |             |
| getAttributes() |             |       |          |             |
| setAttributes() |             |       |          |             |
| construct()     |             |       |          |             |

## ApheleiaButton Class Elements

| Element   | Type                                                                                  | Nullable           | Description |
| --------- | ------------------------------------------------------------------------------------- | ------------------ | ----------- |
| button    | [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) | :white_check_mark: |             |
| loader    | [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)       | :white_check_mark: |             |
| text      | [HTMLSpanElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)     | :white_check_mark: |             |
| icon      | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |
| iconLeft  | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |
| iconRight | [ApheleiaIcon](#apheleiaicon)                                                         | :white_check_mark: |             |

# ApheleiaButtonType

- primary
- secondary
- tertiary
- ghost
- danger
- gray
- grayGlass

# ApheleiaButtonSize

- small
- medium
- large
- extraLarge
- custom
