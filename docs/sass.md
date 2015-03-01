Preprocessing

Sass lets you use features that dont yet exist in CSS like variables, nesting, mixins, inheritance and other nifty goodies that improve CSS



Variables

Variables allow you to store information so that you may then re-use the same style property throughout your stylsheet. You may store info such as colors, font stacks, or any CSS value you think you youll want to use. Sass uses the `$` symbol to make something a variable

    for example:
    
    ```
    Sass:
    
        $font-stack: Helvetica, sans-serif
        $primary-color: #333

        body
        font: 100% $font-stack
        color: $primary-color

    SCSS
    
        $font-stack:    Helvetica, sans-serif;
        $primary-color: #333;

        body {
          font: 100% $font-stack;
          color: $primary-color;

            }
            
            * when sass is processed, it takes the variables we define for the `$font-stack` and `$primary-color` and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

    
    body { 
        font: 100% Helvetica, sans-serif;
        color: #333;
        }
    ```
    
    
Nesting

Sass allows you to nest your CSS selectors in a way that follows the same visual hierarchy of you HTML. 
    
    * Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
    
the following is an example of some typical styles for a site's navigation:

```

    SASS
    
        nav
          ul
            margin: 0
            padding: 0
            list-style: none

          li
            display: inline-block

          a
            display: block
            padding: 6px 12px
            text-decoration: none

    SCSS

        nav {
              ul {
                margin: 0;
                padding: 0;
                list-style: none;
              }

              li { display: inline-block; }

              a {
                display: block;
                padding: 6px 12px;
                text-decoration: none;
              }
            }

            * you'll notice that the `ul` `li` and `a` selectors are nested inside the `nav` selector. This is a great way to organize your CSS and make it more readable. When you generate the CSS, youll get something like this:
            
                nav ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                }

                nav li {
                  display: inline-block;
                }

                nav a {
                  display: block;
                  padding: 6px 12px;
                  text-decoration: none;
                }
```



Partials

You may create partial Sass files that contain small snippets of CSS that you may include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A `partial` is simply a Sass file named with a leading underscore, such as `_partial.scss`. The underscore lets Sass know that the file is only a patial file and that it should not be generated into a CSS file. Sass partials are used with the `@import` directive.



Import



Mixins



Extend/Inheritance


Operators
