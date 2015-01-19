CSS Properties - Exhaustive

A
:active
::after (:after)
align-content
align-items
align-self
all
<angle>
animation
animation-delay
animation-direction
animation-duration
animation-fill-mode
animation-iteration-count
animation-name
animation-play-state
animation-timing-function
@annotation
annotation()
attr()

#B
::backdrop
backface-visibility
background
background-attachment
background-blend-mode
background-clip
background-color
background-image
background-origin
background-position
background-repeat

###background-size: 
The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.

Note: If the value of this property is not set in a background shorthand property that is applied to the element after the background-size CSS property, the value of this property is then reset to its initial value by the shorthand property.
Initial valueauto auto
Applies to all elements
Inherited no
Percentages relative to the background positioning area
Mediavisual
Computed value as specified, with lengths made absolute
Animatable yes, as a repeatable list of a simple list of a length, percentage or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. . This means keyword values are not animatable.
Canonical order the unique non-ambiguous order defined by the formal grammar
Syntax
How to read CSS syntax.
Formal syntax: <bg-size>#
/* Keywords syntax */
background-size: cover
background-size: contain

/* One-value syntax: the value defines the width of the image, the height is implicitly set to 'auto' */
background-size: 50%
background-size: 3em
background-size: 12px
background-size: auto

/* Two-value syntax: the first value defines the width of the image, the second its height */
background-size: 50% auto
background-size: 3em 25%
background-size: auto 6px
background-size: auto auto

/* Values for the multiple backgrounds, defined by background-image, may be listed separated by commas */
background-size: auto, auto     /* Do not confuse this with background-size: auto auto */
background-size: 50%, 25%, 25%
background-size: 6px, auto, contain

background-size: inherit
Values

<length>
A <length> value that scales the background image to the specified length in the corresponding dimension. Negative lengths are not allowed.
<percentage>
A <percentage> value that scales the background image in the corresponding dimension to the specified percentage of the background positioning area, which is determined by the value of background-origin. The background positioning area is, by default, the area containing the content of the box and its padding; the area may also be changed to just the content or to the area containing borders, padding, and content. If the background's attachment is fixed, the background positioning area is instead the entire area of the browser window, not including the area covered by scrollbars if they are present. Negative percentages are not allowed.
auto
The auto keyword that scales the background image in the corresponding direction such that its intrinsic proportion is maintained.
cover
This keyword specifies that the background image should be scaled to be as small as possible while ensuring both its dimensions are greater than or equal to the corresponding dimensions of the background positioning area.
contain
This keyword specifies that the background image should be scaled to be as large as possible while ensuring both its dimensions are less than or equal to the corresponding dimensions of the background positioning area.
The interpretation of possible values depends on the image's intrinsic dimensions (width and height) and intrinsic proportion (ratio of width and height).  A bitmap image always has intrinsic dimensions and an intrinsic proportion.  A vector image may have both intrinsic dimensions (and thus must have an intrinsic proportion).  It also may have one or no intrinsic dimensions, and in either case it might or might not have an intrinsic proportion.  Gradients are treated as images with no intrinsic dimensions or intrinsic proportion.

Note: This behavior changed in Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5). Before this, gradients were treated as images with no intrinsic dimensions, with an intrinsic proportion identical to that of the background positioning area.
Background images generated from elements using -moz-element (which actually match an element) are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion.

Note: This is not the currently-specified behavior, which is that the intrinsic dimensions and proportion should be those of the element in all cases.
The rendered size of the background image is then computed as follows:

If both components of background-size are specified and are not auto:
The background image renders at the specified size.
If the background-size is contain or cover:
The image is rendered, preserving its intrinsic proportion, at the largest size contained within, or covering, the background positioning area.  If the image has no intrinsic proportion, then it is rendered at the size of the background positioning area.
If the background-size is auto or auto auto:
If the image has both intrinsic dimensions, it is rendered at that size.  If it has no intrinsic dimensions and no intrinsic proportion, it is rendered at the size of the background positioning area.  If it has no dimensions but has a proportion, it's rendered as if contain had been specified instead.  If the image has one intrinsic dimension and a proportion, it's rendered at the size determined by that one dimension and the proportion.  If the image has one intrinsic dimension but no proportion, it's rendered using the intrinsic dimension and the corresponding dimension of the background positioning area.
If the background-size has one auto component and one non-auto component:
If the image has an intrinsic proportion, then render it using the specified dimension, and compute the other dimension from the specified dimension and the intrinsic proportion.  If the image has no intrinsic proportion, use the specified dimension for that dimension.  For the other dimension, use the image's corresponding intrinsic dimension if there is one.  If there is no such intrinsic dimension, use the corresponding dimension of the background positioning area.
Note that background sizing for vector images that lack intrinsic dimensions or proportion is not yet fully implemented in all browsers.  Be careful about relying on the behavior described above, and test in multiple browsers (specifically including versions of Firefox 7 or earlier and Firefox 8 or greater) to be sure different renderings are acceptable.

Examples
This demonstration of background-size: cover and this demonstration of background-size: contain are meant to be opened in new windows so that you can see how contain and cover behave when the background positioning area's dimensions vary. This series of demos of how background-size works and interacts with other background-* properties should pretty much cover the remaining ground in how to use background-size alone and in conjunction with other properties.

Notes
If you are specifying a gradient as background and have specified a background-size to go with it, it's best not to specify a size that uses a single auto component, or is specified using only a width value (for example, background-size: 50%).  Rendering of gradients in such cases changed in Firefox 8, and at present it is generally inconsistent across browsers, which do not all implement rendering in full accordance with the CSS3 background-size specification and with the CSS3 Image Values gradient specification.

.bar {
       width: 50px; height: 100px;
       background-image: gradient(...);

       /* NOT RECOMMENDED */
       background-size: 25px;
       background-size: 50%;
       background-size: auto 50px;
       background-size: auto 50%;

       /* OKAY */
       background-size: 25px 50px;
       background-size: 50% 50%;
}
Note that it's particularly not recommended to use a pixel dimension and an auto dimension with a gradient, because it's impossible to replicate rendering in versions of Firefox prior to 8, and in browsers not implementing Firefox 8's rendering, without knowing the exact size of the element whose background is being specified.

<basic-shape>
::before (:before)
<blend-mode>
blur()
border
border-bottom
border-bottom-color
border-bottom-left-radius
border-bottom-right-radius
border-bottom-style
border-bottom-width
border-collapse
border-color
border-image
border-image-outset
border-image-repeat
border-image-slice
border-image-source
border-image-width
border-left
border-left-color
border-left-style
border-left-width
border-radius
border-right
border-right-color
border-right-style
border-right-width
border-spacing
border-style
border-top
border-top-color
border-top-left-radius
border-top-right-radius
border-top-style
border-top-width
border-width
bottom
box-decoration-break
box-shadow
box-sizing
break-after
break-before
break-inside
brightness()

C
calc()
caption-side
ch
@character-variant
character-variant()
@charset
:checked
circle()
clear
clip
clip-path
cm
color
<color>
columns
column-count
column-fill
column-gap
column-rule
column-rule-color
column-rule-style
column-rule-width
column-span
column-width
content
contrast()
<counter>
counter-increment
counter-reset
@counter-style
cubic-bezier()
cursor
<custom-ident>

D
:default
deg
:dir()
direction
:disabled


###display

####Values:

display: none
display: inline
display: block
display: contents
display: list-item
display: inline-block
display: inline-table
display: table
display: table-cell
display: table-column
display: table-column-group
display: table-footer-group
display: table-header-group
display: table-row
display: table-row-group
display: flex
display: inline-flex
display: grid
display: inline-grid
display: ruby
display: ruby-base
display: ruby-text
display: ruby-base-container
display: ruby-text-container 
display: run-in
display: inherit
display: initial
display: unset



@document
dpcm
dpi
dppx
drop-shadow()

E
element()
ellipse()
em
:empty
empty-cells
:enabled
ex

F
filter
:first
:first-child
::first-letter (:first-letter)
::first-line (:first-line)
:first-of-type
flex
flex-basis
flex-direction
flex-flow
flex-grow
flex-shrink
flex-wrap
float
:focus
font
@font-face
font-family
font-feature-settings
@font-feature-values
font-kerning
font-language-override
font-size
font-size-adjust
font-stretch
font-style
font-synthesis
font-variant
font-variant-alternates
font-variant-caps
font-variant-east-asian
font-variant-ligatures
font-variant-numeric
font-variant-position
font-weight
<frequency>
:fullscreen

G
grad
<gradient>
grayscale()
grid
grid-area
grid-auto-columns
grid-auto-flow
grid-auto-position
grid-auto-rows
grid-column
grid-column-start
grid-column-end
grid-row
grid-row-start
grid-row-end
grid-template
grid-template-areas
grid-template-rows
grid-template-columns

H
height
:hover
hsl()
hsla()
hue-rotate()
hyphens
hz

I
<image>
image()
image-rendering
image-resolution
image-orientation
ime-mode
@import
in
:indeterminate
inherit
initial
:in-range
inset()
<integer>
:invalid
invert()
isolation

J
justify-content

K
@keyframes
khz

L
:lang()
:last-child
:last-of-type
left
:left
<length>
letter-spacing
linear-gradient()
line-break
line-height
:link
list-style
list-style-image
list-style-position
list-style-type

M
margin
margin-bottom
margin-left
margin-right
margin-top
marks
mask
mask-type
matrix()
matrix3d()
max-height
max-width
@media
min-height
minmax()
min-width
mix-blend-mode
mm
ms

N
@namespace
:not()
:nth-child()
:nth-last-child()
:nth-last-of-type()
:nth-of-type()
<number>

O
object-fit
object-position
:only-child
:only-of-type
opacity
opacity()
:optional
order
@ornaments
ornaments()
orphans
outline
outline-color
outline-offset
outline-style
outline-width
:out-of-range
overflow
overflow-wrap
overflow-x
overflow-y

P
padding
padding-bottom
padding-left
padding-right
padding-top
@page
page-break-after
page-break-before
page-break-inside
pc
<percentage>
perspective
perspective()
perspective-origin
pointer-events
polygon()
position
<position>
pt
px

Q
quotes

R
rad
radial-gradient()
<ratio>
:read-only
:read-write
rect()
rem
repeat()
::repeat-index
::repeat-item
repeating-linear-gradient()
repeating-radial-gradient()
:required
resize
<resolution>
rgb()
rgba()
right
:right
:root
rotate()
rotatex()
rotatey()
rotatez()
rotate3d()
ruby-align
ruby-merge
ruby-position

S
s
saturate()
scale()
scalex()
scaley()
scalez()
scale3d()
:scope
scroll-behavior
::selection
sepia()
<shape>
shape-image-threshold
shape-margin
shape-outside
skew()
skewx()
skewy()
steps()
<string>
@styleset
styleset()
@stylistic
stylistic()
@supports
@swash
swash()
symbol()

T
table-layout
tab-size
:target
text-align
text-align-last
text-combine-upright
text-decoration
text-decoration-color
text-decoration-line
text-decoration-style
text-indent
text-orientation
text-overflow
text-rendering
text-shadow


text-transform: The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.


text-underline-position
<time>
<timing-function>
top
touch-action
transform
transform-origin
transform-style
transition
transition-delay
transition-duration
transition-property
transition-timing-function
translate()
translatex()
translatey()
translatez()
translate3d()
turn

U
unicode-bidi
unicode-range
unset
<uri>
url()
<user-ident>

V
:valid
::value
var()
vertical-align
vh
@viewport
visibility
:visited
vmax
vmin
vw

#W

##white-space
##widows
##width
##will-change
##word-break
##word-spacing
##word-wrap
##writing-mode

#X,Y,Z

##z-index:

Positioning schemes for the layout of boxes: normal document flow, floats, and absolute positiong. You give it top, left, bottom, and right values to position the element in two-dimensional space, but CSS also allows you to place it in the third dimension using the z-index property. 
I'm sure you're familiar with three-dimensional coordinate space. We have an x-axis which is typically used to represent the horizontal, a y-axis to represent the vertical, and a z-axis used to represent what happens into and out of the page, or the screen in our case.


3-Dimensional Coordinate Space
We don't literally see the z-axis, as the screen is a two-dimensional plane. We see it in the form of perspective and of some elements appearing in front of or behind other elements when they share the same two-dimensional space.

To determine where along this third axis an element is located, CSS allows us to setthree values on the z-index property.

auto (the default)
(integer)
inherit
For the moment let's focus on the integer value. This can be positive, negative, or 0. The greater the value, the closer to the viewer the element appears. The lower the value, the further away it appears.

If two elements are positioned so they both occupy a shared area of two-dimensional space, the element with the greater z-index will obscure or occlude the element with the lower z-index in the areas where they share the space.





### 1. `width`
* _elements:_all elements but non-replaced inline elements, table rows, and row groups
* _inherited:_no

#### Values
* `<length>` --
* `<percentage>` --
* `border-box` --
* `etc...`

### 2. `auto`
* _elements:_all elements but non-replaced inline elements, table rows, and row groups
* _inherited:_no

#### Values
* `<length>` --
* `<percentage>` --
* `border-box` --
* `etc...`

### 3. `margin`
* _elements:_all elements except elements with table display types other than table-caption, table and inline-table. It also applies to ::first-letter.
* _inherited:_no

#### Values
* `<length>` --
* `<percentage>` --
* `auto` --

### 4. `margin-top`
* _elements:_all elements except elements with table display types other than table-caption, table and inline-table
* _inherited:_nono

#### Values
* `<length>` --
* `<percentage>` --
* `auto` --

### 5. `margin-right`
* _elements:_all elements except elements with table display types other than table-caption, table and inline-table
* _inherited:_no

#### Values
* `<length>` --
* `<percentage>` --
* `auto` --
* `etc...`


