##Common Attributes

#### `class` -- element class names
* *values:* space-separated list of class names
* *support:* all browsers
* *examples:*
```html
<aside class="page--column">
  <!-- . . . -->
</aside> <!-- .page--column -->
<section class="page--column">
  <!-- . . . -->
</section> <!-- .page--column -->
```
#### `id` -- unique element identifier
* *values:* single letter character followed by any number of letters, digits, hyphens, underscores, colons or periods
* *support:* all browsers
* *examples:*
```html
<form class="search" id="site-search">
  <!-- . . . -->
</form> <!-- .search#site-search -->
```
#### `itemprop`
* _values:_
* _support:_
* _example:_
```
asdrsdf
```
#### `lang` --
* _values:_
* _support:_
* _example:_
```
asdfa
```
#### `spellcheck` -- 
* _values:_
* _support:_
* _example:_
```
dfgad
```
#### `style` -- 
* _values:_
* _support:_
* _example:_

##1. Address
* type: Block-element
* content: Flow-content, palpable content, with no nesting (exept perhaps in footer)
* support: Chrome, Firefox 1.0, Gecko 1.7 or earlier, Internet Explorer 1.0, Opera 5.12, Safari 1.0
* example:
```
<address> 
    If you need assistance, please email me at: <a href "ganderson7197@icloud.com"Garrett Anderson</a>.<br>
    Or you may write to:<br>
    1234 Cognition Dr.<br>
    Longwood, Florida 32750<br>
    USA
</address>
```
##2. Article
* type: Block-element
* content: Flow content, sectioning content, palpable content
* support: Chrome 5, Firefox 4.0, Gecko 2.0, Internet Explorer 9.0, Opera 11.10, Safari 4.1
* exapmle:
```
<article>
    <h4>This Article</h4>
    <p>text</P
</article>
```
##3. Aside
* type: Block-element
* content: Flow content, sectioning content, palpable content
* support: Chrome 5, Firefox 4.0, Gecko 2.0, Internet Explorer 9.0, Opera 11.10, Safari 4.1
* exapmle:
```
<article>
    <p>Some Hit Record</p>
    <aside>
    This record made a ton of money when it was first released.
    </aside>
    <p>more info about band and record company</p>
</article>
```
##4. Blockquote
* type: Block-element
* content: Flow Content
* support: Firefox 1.0 and Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle:
```
<blockquote cite="http://...">
    <p>Quote taken from the above website</p>
</blockquote>
```
##5. Document Division
* type: Block-element
* content: Flow content, palpable content
* support: All Browsers
* exapmle:
```
<div>
    <p>Any kind of content...</P.
</div>
```
##6. Section or Page Footer
* type: Block-element
* content: Flow content, palpable content
* support: Chrome 5, Firefox 4.0, Gecko 2.0, Internet Explorer 9.0, Opera 11.10, Safari 4.1
* exapmle: 
```
<footer>
    some important info. appropriate for the bottom of a document, like copyright info
</footer>
```
##7. Definition List
* type: Block-element
* content: Flow content, palpable content 
* support: Chrome 1.0, otherwise, All Browsers
* exapmle:
```
<dl>
    <dt>Name</>
    <dd>Garrett</dd>
    <dt>Born</dt>
    <dd>Orlando, FL</dd>
    <dt>Favorite Color</dt>
    <dd>Green</dd>
</dl>
```
##8. <header> --Header
* type: Block-leve element
* content: Flow content, palpable content
* support: Chrome 5, Firefox 4.0, Gecko 2.0, IE 9.0, Opera 11.10, Safari 4.0
* exapmle: 
```
<header>
  a logo
</header>
```
##9. Horizontal Rule
* type: Block-element
* content: Flow content
* support: Chrome 1.0, otherwise, All Browsers
* exapmle:
```
<p>Paragraph of text</p>
    <hr>
<p>paragraph of text</p>
```
##10. Figure
* type: Block-element
* content: Flow content, sectioning root, palpable content
* support: Chrome 8, Firefox 4.0, Gecko 2.0, Internet Explorer 9.0, Opera 11.10, Safari 5.1
* exapmle:
```
<figure>
    <img src "http://www.tavarua.com/sites/default/files/tavarua-resort-photos/tavarua-island-resort_0.jpg" alt="an island">
    <figcaption>Caption for photo</figcaption>
</figure>
<p></p>
```
##11. Input Form
* type: Block-element
* content: Flow content, palpable content
* support: Chrome 1.0, Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle:
```
<!-- Simple for which will send a POST request -->
<form action="" method="post">
    <label for= "POST-name">Name:</label>
    <input id="POST-name" type="text" name="name">
    <input type="Submit" value="Save">
</form>
```
#### `action` -- form submission URL
* _values:_ URL of a program that processes a form submission
* _support:_ All Browsers
* _examples:_
```
<form action="https://github.com/GarrettGraham">
    <input name="Garrett's GitHub">
</form>
```
```
<form action="form-to-email.php" method="post"
    accept-charset="windows-1252">
  <div>
    <label for="txtname">Name:</label>
    <input type="text" name="txtname" id="txtname"/>
  </div>
</form>
```
#### `autocpitalizaion`
* _values:_none: completely disables auto cap., sentences: auto cap.s first letter of sentences, words: atuo cap.s first letter of words, characters: auto cap.s all characters, on: depricated since iOS 5, off: depricated since iOS 5
* _support:_iOS Safari Mobile, on and off values deprecated since iOS 5
* _example:_
```
    <form>
        <p>
            Normal Input:<br />
            <input type="text" style="width: 180px ;" />
        </p>
        <p>
            No-Auto Input:<br />
            <input
                type="text"
                autocapitalize="off"
                autocorrect="off"
                style="width: 180px ;"
                />
        </p>
    </form>
```
##12. Image
* type: Inline-element
* content: Flow content, phrasing content, embedded content, palpable content. If has usermap attribute, it is interactive content
* support: All Browsers
* exapmle:
```
<a href="http://imagelink.com"><img src="photo description.jpg" alt "Photo"/></a>
```
##13. Object
* type: Inline-element
* content: Flow content, phrasing content, embedded content, interactive content
* support: Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle: 
```
<!-- Embed a flash movie -->
<object data="move.swf" type="application/x-shockwave-flash"></object>
```
##14. Span
* type: Inline-element
* content: Flow content, phrasing content
* support: All Browsers
* exapmle:
```
<p><span>sometext</span></p>
```
##15. Strong
* type: Inline-element
* content: Flow content, phrasing content
* support: Firefox, Gecko 1.9.2 or earlier
* exapmle: 
```
<p><strong>Speak No Evil</strong></p>
```
##16. Textarea
* type: Inline-element
* content: Flow content, phrasing content, interactive content
* support: Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle: 
```
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```
## 17. <meta> --Meta
* type: Inline-element
* content: Flow content, phrasing content, interactive content
* support: Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle: 
```
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```