# basicons  
[basicons.xyz](https://dub.sh/basicons-2021)  
Originally by preciousm.co / Solomon Omojola  
The script embed on their site broke, so I wrote a backup one.

---

## HOW TO USE:
Paste this after `<head>`:
```html
<script src="https://glenthemes.github.io/basicons/init-icons.js"></script>
<link href="https://glenthemes.github.io/basicons/style.css" rel="stylesheet">
```
To set the general size and color of the icons, add this to your CSS:
```css
:root {
    --Basicons-Icon-Size:20px;
    --Basicons-Icon-Color:#beabea;
}
```
To use an icon, choose one from [the list]([https://basicons.xyz](//dub.sh/basicons-2021)).  
If you cannot see a section titled `Code` followed by a pale gray box at the bottom of the right sidebar, you need to **zoom out**.  
Once you've picked an icon, copy its code from said gray box.  
Paste it where you like in your HTML
`<i class="bsc-icon-name"></i>`  

There is a possibility that the icon name they provide on their site is inaccurate or outdated. If you copied the icon code correctly but the icon isn't showing up, go to [git.new/basicons-2021](https://git.new/basicons-2021) and try to find the correct name for the icon.  

If you want to use different styling for separate divs (e.g. `.header-div`), add this css:
```css
.header-div .basicons {
    --Basicons-Icon-Size:calc(var(--Post-Buttons-Size) + 5px); /* or whatever */
    --Basicons-Icon-Color:#666; /* or whatever */
}
```
