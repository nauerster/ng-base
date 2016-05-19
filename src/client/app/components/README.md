# The `src/client/app/components/` Directory

The `components/` directory houses internal and third-party re-usable
components.

Each component resides in its own directory that may then be structured any way
the developer desires. The build system will read all `*.js` files that do not
end in `.spec.js` as source files to be included in the final build, all
`*.spec.js` files as unit tests to be executed, and all `*.tpl.html` files as
templates to compiled into the `$templateCache`. There is currently no way to
handle components that do not meet this pattern.

```
src/
  |- client/
  |  |- app/
  |  |  |- common/
  |  |  |   |- dropdown.js
```

- `dropdown` - a simple dropdown directive that consumes a list of items.

Every component contained here should be drag-and-drop reusable in any other
project; they should depend on no other components that aren't similarly
drag-and-drop reusable.
