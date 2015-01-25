====================
##Global Attributes
====================

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
    
#### `head` -- 
    * *values:*
    * *support:*
    * *example:*
    ```
    ```
#### `id` -- unique element identifier

    * *description:* defines a unique identifier .ID. which must be unique in the whole document. Its purpose is to identify the element when linking -using a fragment identifier, scripting, or styling -with CSS.
    * *values:* single letter character followed by any number of letters, digits, hyphens, underscores, colons or periods - div id='blog logo' - able to reference id tag in stylesheet with a hash tag ??followed by txt that specifies whcih id -- # blog info, ?symantics??
    * *support:* all browsers; Supported on all elements but <base>, <head>, <html>, <meta>, <script>, <style>, and <title>.
    * *Note:* Using characters except ASCII letters and digits, '_', '-' and '.' may cause compatibility problems, as they weren't allowed in HTML 4. Though this restriction has been lifted in HTML 5, an ID should start with a letter for compatibility.
    * *examples:*

    <!-- reference the unique identifier tag `id` in stylesheet with JUST a hashtag, .myHeader would be if within the div a class was given to myHeader vs. the `id` tag- Google difference of `id` vs class -->
    ```
    <h1 id="myHeader"> Surf&Paddle Co. </h1>
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
    ```

    ```

#### `meta`
    * _values:_ represents any metadata information that cannot be represented by one of the other meta-related elements -- .base, .link, .script, .style or .title -- According to the attributes set, the kind of metadata can be one of the following --
    --this is an empty element, it does not require an ending nor closing tag --.meta charset, .meta http-equiv, a .head element. If the .http-equiv is not an encoding declaration, it can also be inside a .noscript element, itself inside a .head element
    .meta name any element that accepts metadata content.
    .meta itemprop any element that accepts metadata content or parsing content.
    * _support:_
    * _attributes:_ This enumerated -- as in a list, to mention seperately as if in counting, to specify, to name one-by-one -- attribute defines the pragma -- also.pragmatic information. - A standardised form of comment which has meaning to the compiler or some other program. It may use a special syntax or a specific form within the normal comment syntax. A pragma usually conveys non-essential information, often intended to help the compiler to optimise the program or to generate formatted documentation -- that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following
    * _example:_
    ```
    dfgad
    ```

#### `title` --
    * _values:_metadata content; closing/ending tag are mandatory. no other title tag to be included within header
    * _support:_
    * _example:_
    ```
    <title>Surf&Paddle</title>
    ```
    <!--Must correct the number schema because it is thrown off when i add to the list. i believe it is possible to code a rule with java that would automatically correct the numers of each element as i add an element above or below-like how microsoft word automatically corrects a numbered list. -->

    ##1. <a> --HTML Anchor Element- defines a hyperlink, the named target destination for a hyperlink, or both
    * type: Block-element
    * content: Flow content, phrasing content, interactive content, palpable content. 
    * permitted content: Transparent, containing either flow content or phrasing content.
    * support: Chrome, Firefox 1.0, Gecko 1.7 or earlier, Internet Explorer 1.0, Opera 5.12, Safari 1.0
    * example:
    ```
    ```
<!-- 17 attributes for anchor tag -->

#### `download` _HTML5_
* _description:_ This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource so that when the user clicks on the link they will be prompted to save it as a local file ??what exactly does this mean and how is it beneficial??. 
* _values:_ If the attribute has a value, the value will be used as the pre-filled file name in the Save prompt that opens when the user clicks on the link --the user can change the name before actually saving the file of course. There are no restrictions on allowed values but forward and backward slashes will be converted to underscores, preventing specific path hintsshould
* _support:_ consider that most file systems have limitations with regard to what punctuation is supported in file names, and browsers are likely to adjust file names accordingly.
* _example:_
```
```

#### `href` 
* _description:_ This was the single required attribute for anchors defining a hypertext source link, but is no longer required in HTML5. Omitting this attribute creates a placeholder link. The href attribute indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. 
* _values:_
* _support:_ URLs are not restricted to Web .HTTP-based documents; URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
* _example:_ You can use the special fragment "top" to create a link back to the top of the page, as exemplified below
```
<a href="#top">Return to top</a>
```

#### `media` _HTML5_
* _description:_
* _values:_
* _support:_
* _example:_
```
```

#### `ping` _HTML5_ 
* _description:_
* _values:_
* _support:_
* _example:_
```
```

#### `rel`  
* _description:_
* _values:_
* _support:_
* _example:_
```
```

#### `target` 
* _description:_
* _values:_
* _support:_
* _example:_
```
```

=====================
Block-Level Elements
=====================

=============
##1. Address
=============

    * type: Block-element
    * content: Flow-content, palpable content, with no nesting -- exept perhaps in footer
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

=============
##2. Article
=============

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
    
===========
##3. Aside
===========

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
================
##4. Blockquote
================

    * type: Block-element
    * content: Flow Content
    * support: Firefox 1.0 and Gecko 1.7 or earlier, otherwise, All Browsers
    * exapmle:
    ```
    <blockquote cite="http://...">
        <p>Quote taken from the above website</p>
    </blockquote>
    ```
=====================================
##5. <div></div> --Document Division
=====================================
    * type: Block-element
    * content: Flow content, palpable content
    * support: All Browsers
    * exapmle:
    ```
    <div>
        <p>Any kind of content...</P.
    </div>
    ```

=======================================
##6. <footer> --Section or Page Footer
=======================================

    * type: Block-element
    * content: Flow content, palpable content
    * support: Chrome 5, Firefox 4.0, Gecko 2.0, Internet Explorer 9.0, Opera 11.10, Safari 4.1
    * exapmle: 
    ```
    <footer>
        some important info. appropriate for the bottom of a document, like copyright info
    </footer>
    ```
================
##7. <datetime> 
================

=====================
##8. Definition List
=====================

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

=======================
##9. <header> --Header
=======================

    * type: Block-leve element
    * content: Flow content, palpable content
    * support: Chrome 5, Firefox 4.0, Gecko 2.0, IE 9.0, Opera 11.10, Safari 4.0
    * exapmle: 
    ```
    <header>
      a logo
    </header>
    ```
======================
##10. Horizontal Rule
======================

    * type: Block-element
    * content: Flow content
    * support: Chrome 1.0, otherwise, All Browsers
    * exapmle:
    ```
    <p>Paragraph of text</p>
        <hr>
    <p>paragraph of text</p>
    ```

=============
##11. Figure
=============

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
==========================
##12. <form> --Input Form
==========================

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

    * attributes:
    * 

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

        * _values:_none: completely disables auto cap., sentences- auto cap.s first letter of sentences, words- atuo cap.s first letter of words, characters- auto cap.s all characters, on- depricated since iOS 5, off- depricated since iOS 5
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
        
======================
##11. <p> --Paragraph
======================

    * type: Block-element
    * content category: Flow content, palpable content
    * permitted content: Phrasing content
    * browser support: Chrome 1.0, Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
    * exapmle: 
    ```
    <p><strong>Speak No Evil</strong></p>
    ```
    *attributes:

==============================
##12. <time> --Time Signiture
==============================

    * description: Either a time on a 24-hour clock or a precise date in the Gregorian calendar with optional time and timezone information
    * type: Block-element
    * content: Flow content, phrasing content - no descendant time elements, palpable content
    * support: Chrome 33.0, Firefox 22.0, Gecko 22.0, IE 9.0, Opera 22.0, Safari 7.0
    * exapmle: 
    ```
    <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
    ```







#HTML Elements: Inline


============
##13. Image
============

* type: Inline-element
* content: Flow content, phrasing content, embedded content, palpable content. If has usermap attribute, it is interactive content
* support: All Browsers
* exapmle:
```
<a href="http://imagelink.com"><img src="photo description.jpg" alt "Photo"/></a>
```

=============
##14. Object
=============


* type: Inline-element
* content: Flow content, phrasing content, embedded content, interactive content
* support: Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
* exapmle: 
```
<!-- Embed a flash movie -->
<object data="move.swf" type="application/x-shockwave-flash"></object>
```


=======
##15. <span> --Span
=======
* type: Inline-element
* content: Flow content, phrasing content
* support: All Browsers
* exapmle:
```
<p><span>sometext</span></p>
```

=============
##16. Strong
=============

    * type: Inline-element
    * content: Flow content, phrasing content
    * support: Firefox, Gecko 1.9.2 or earlier
    * exapmle: 
    ```
    <p><strong>Speak No Evil</strong></p>
    ```

==========================
##17. <s> --Strikethrough
==========================
* type: ??Inline-element vs. Block-element??
* content: Flow content, phrasing content
* support: Firefox, Gecko 1.9.2 or earlier
* exapmle: 
```
<p><strong>Speak No Evil</strong></p>
```


===============
##17. Textarea
===============

    * type: Inline-element
    * content: Flow content, phrasing content, interactive content
    * support: Firefox 1.0, Gecko 1.7 or earlier, otherwise, All Browsers
    * exapmle: 
    ```
    <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
    ```
    
====================
##18. <meta> --Meta
====================

=======
##19.
=======

====================
##20. <menu> --Menu
====================

    * description: a group of commands that a user can perform or activate. This includes both toolbar menus, which might appear across the top of a screen, as well as popup menus, such as those that might appear underneath a button after it has been clicked.
    * type: Block-element
    * content: Flow content. Additionally, if in the toolbar menu state, palpable content. Toolbar menu is the default state, unless the parent element is a .menu in the popup menu state. permitted content - If the element is in the toolbar menu state-- flow content, or alternatively, zero or more occurrences of li, script, and template. If the element is in the popup menu state -- zero or more occurrences, in any order, of .menu -popup menu state only- .menuitem, .hr, .script, and .template.
    * support: Chrome, Firefox 1.0, Gecko 1.7 or earlier, Internet Explorer 1.0, Opera 5.12, Safari 1.0
    * example: A button, which displays a menu when clicked.
    ```
    <button type="menu" menu="dropdown-menu">
      Dropdown
    </button>

    <menu type="popup" id="dropdown-menu">
      <menuitem label="Action">
      <menuitem label="Another action">
      <hr>
      <menuitem label="Separated action">
    </menu>
    ```


=======
=======
##19.


In HTML, the relationship between two documents, in which one links to the other using an <a>, <area>, or <link> element, can be specified as one of these link types.

List of the defined link types and their significance in HTML
Link Type	Description	Allowed in these elements	Not allowed in these elements
alternate	
If the element is <link> and the rel attribute also contains the stylesheet type, the link defines an alternative style sheet; in that case the title attribute must be present and not be the empty string.
If the type is set to application/rss+xml or application/atom+xml, the link defines a syndication feed. The first defined on the page is the default one.
Else the link defines an alternative page:
either for another media, like a handheld device (if the media attribute is set),
or in another language (if the hreflang attribute is set),
or in another format, like in PDF (if the type attribute is set),
or a combination of those.
<a>, <area>, <link>	None.
archives
HTML5	Defines a hyperlink to a document archiving a link to this one. E.g. a blog entry would link to a monthly index page that way.

Note: Although recognized, the singular archive is incorrect and must be avoided.	<a>, <area>, <link>	None.
author
HTML5	Defines a hyperlink to a page describing the author or allowing to reach him.

Note: This may be a mailto: hyperlink, but this is not recommended on public pages as robot harvesters will quickly lead to a lot of spam sent to the address. In that case, it is better to lead to a page containing a contact form.

Although recognized, the rev attribute on <a>, <area> or<link> elements with a link type of made is incorrect and should be replaced by the rel attribute with this link type.	<a>, <area>, <link>	None.
bookmark	Indicates that the hyperlink is a permalink for the nearest ancestor <article> element. If none, it is a permalink for the section the element is most closely associated to.

This allows to bookmarks single article in a multi-articles page, like on a montly summary blog page, or a blog aggregator.	<a>, <area>	<link>
external
HTML5	Indicates that the hyperlink leads to a resource outside the site of the current page, i.e. that following the link will make the user leave the site.	<a>, <area>	<link>
first
HTML5	Indicates that the hyperlink leads to the first resource of the sequence the current page is in.

Note: Other link types related to linking resources in the same sequence are last, prev, next.

Although recognized, the synomyns begin and start are incorrect and must be avoided.	<a>, <area>, <link>	None.
help	
if the element is <a> or <area>, it indicates that the hyperlink leads to a resource giving further help about the parent of the element, and its descendants;
if the element is <link> it indicates that the hyperlink leads to a resource giving further help about the page as a whole.
<a>, <area>, <link>	None.
icon
HTML5	Defines a resource for representing the page in the user interface, usually an icon (auditory or visual one).

The media, type and sizes attributes allow the browser to select the most appropriate icon in its context. If several resources match, the browser will select the last one declared, in tree order. As these attributes are merely hints, and the resources may be non-appropriate upon further inspection, the browser will then select another one, if appropriate.

Note: Apple's iOS do not use this link type, nor the sizes attribute, like others mobile browsers do, to select a webpage icon for Web Clip or a start-up placeholder. Instead it uses the non-standard apple-touch-icon and apple-touch-startup-image respectively.

The shortcut link type is often seen before icon, but this link type is non-conforming, ignored and web authors must not use it anymore.	<link>	<a>, <area>
index	Indicates that the page is part of a hierarchical structure and that the hyperlink leads to the top level resource of that structure.

If one or several up link types are also present, the number of these up indicates the depth of the current page in the hierarchy.	<a>, <area>, <link>	None.
last
HTML5	Indicates that the hyperlink leads to the last resource of the sequence the current page is in.

Note: Other link types related to linking resources in the same sequence are first, prev, next.

Although recognized, the synomyn end is incorrect and must be avoided.	<a>, <area>, <link>	None.
license
HTML5	Indicates that the hyperlink leads to a document describing the licensing information. If not inside the <head> element, the standard doesn't distinguish between a hyperlink applying to a specific part of the document or to the document as a whole. Only the data on the page can indicate this.

Note: Although recognized, the synonym copyright is incorrect and must be avoided.	<a>, <area>, <link>	None.
next	Indicates that the hyperlink leads to the next resource of the sequence the current page is in.

Note: Other link types related to linking resources in the same sequence are first, prev, last.	<a>, <area>, <link>	None.
nofollow
HTML5	Indicates that the linked document is not endorsed by the author of this one, for example if it has no control over it, if it is a bad example or if there is commercial relationship between the two (sold link). This link type may be used by some search engines that use popularity ranking techniques.	<a>, <area>	<link>
noreferrer
HTML5	
Prevents the browser, when navigating to another page, to send this page name, or any other value, as referrer via the Referer: HTTP header.
(In Firefox, before Firefox 37, this worked only in links found in pages. Links clicked in the UI, like "Open in a new tab" via the contextual menu, doesn't abide for this value)

<a>, <area>	<link>
pingback
HTML5	Defines an external resource URI to call if one make a comment or a citation about the webpage. The protocol used to make such a call is defined in the Pingback 1.0 specification.

Note: if the X-Pingback: HTTP header is also present, this header has precedence over the <link> element with this link type	<link>	<a>, <area>
prefetch
HTML5	Hints the browser to fetch in advance the linked resource, as it will likely be requested by the user.

Note: the Link Prefetch FAQ has details on which links can be prefetched and on alternative method	<a> Unimplemented,
<area> Unimplemented,
<link>	None.
prev	Indicates that the hyperlink leads to the precedent resource of the sequence the current page is in.

Note: other link types related to linking resources in the same sequence are first, last, next.

Although recognized, the synomyn previous is incorrect and must be avoided.	<a>, <area>, <link>	None.
search	Indicates that the hyperlink reference a document whose interface is specially designing for searching in this document, or site, and its resources.

If the type attribute is set to application/opensearchdescription+xml the resource is an OpenSearch plugin that can be easily added to the interface of some browsers like Firefox or Internet Explorer.	<a>, <area>, <link>	None.
stylesheet
HTML5	Defines an external resource to be used as a stylesheet. If the type is not set, the browser should assume it is a text/css stylesheet until further inspection.

If used in combination with the alternate keyword, it defines an alternative style sheet; in that case the title attribute must be present and not be the empty string.	<link>	<a>, <area>
sidebar
HTML5	Indicates that the hyperlink leads to a resource that would be better suited for a secondary browsing context, like a sidebar. Browsers, that don't have such a context will ignore this keyword.	<a>, <area>, <link>	None.
tag
HTML5	Indicates that the hyperlink reference a document describing a tag that applies to this document.

Note: this link type should not be set on links member of a tag cloud as these one does not apply to a single document but to a set of pages.	<a>, <area>, <link>	None.
up
HTML5	Indicates that the page is part of a hierarchical structure and that the hyperlink leads to the higher level resource of that structure.

The number of up link types indicates the depth difference between the current page and the linked resource.	<a>, <area>, <link>	None.

