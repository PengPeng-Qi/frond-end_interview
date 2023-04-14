# flex

## flex container

- `flex-direction`: `row` | `row-reverse` | `column` | `column-reverse`
- `flex-wrap`: `nowrap` | `wrap` | `wrap-reverse`(from bottom to top)
- `justify-content`:
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`: **evenly distributed in the line**, first item is on the start line, last item on the end line
  - `space-around`: width - all item width, remain width evenly layout item **both sides**
  - `space-evenly`: width - all item width, remain width evenly layout item **nearly**
- `align-items`:
  - `flex-start`
  - `flex-end`
  - `center`
  - `streth`
  - `baseline`
- `align-content`: such as justify-content
- `gap`: controls the space between flex items
  - `gap: 10px 20px`: `gap: row-gap column-gap`

## flex items

- `order`: default is 0
- `flex-grow`: define the ability for a flex item to grow. **default is 0**
  - `flex-grow: 1`
- `flex-shrink`: define the ability for a flex item to shrink. **default is 1**
- `flex-basis`: defines the default size of an element before the remaining space is distributed. **default auto**
- `flex`: is the shorthand for `flex-grow, [flex-shrink, flex-basis]`
- `align-self`:
  - `flex-start`
  - `flex-end`
