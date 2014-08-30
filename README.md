NodeBB Custom Header
===
This plugin allows you to set a list of images that will be displayed randomly with a nice crossfade effect on your forum as backgrounds. The first purpose is to create custom header banners but you can target anything and do as you want.

Installation & Setup
===
Get the latest version of the plugin with

    npm install nodebb-plugin-custom-header
Then go to the ACP > Plugins > Custom Header
There will be some examples of how to use the plugin.

First you need to define a jQuery selector, it can be anything you want in order to catch NodeBB themes or your own.
Then it's obvious you just gives the links to the images you want to use.

Example & Tips
===
Let's say you want to change the background of the NodeBB navbar.
Youd need to target `#header-menu`
Then create the list of images you want to use.

>Tips : 
- The plugin uses the background-color of the element to create the fade effect when you come on the forum, then captures the ajax events to change the background during navigation with a crossfade effect.
- Change the default css to have something that suits your needings (obviously white icons are better on images than grey ones).

Here's an example of a custom navbar
![](http://i.imgur.com/U5av604.png)


Here's the result on a custom theme to give you an overview of what that plugin is able to do.

First image
![](http://i.imgur.com/m7eRNqR.png)

And another one
![](http://i.imgur.com/HBfv99x.png)