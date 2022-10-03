document.getElementsByClassName("sub-menu")[0].getElementsByTagName("li")
// HTMLCollection(18) [li#menu-item-25.menu-item-25, li#menu-item-12.menu-item-12, li.menu-item-8, li#menu-item-16.menu-item-16, li#menu-item-14.menu-item-14, li#menu-item-11.menu-item-11, li#menu-item-21.menu-item-21, li#menu-item-29.menu-item-29, li#menu-item-9.menu-item-9, li#menu-item-22.menu-item-22, li#menu-item-18.menu-item-18, li#menu-item-10.menu-item-10, li#menu-item-13.menu-item-13, li#menu-item-24.menu-item-24, li#menu-item-15.menu-item-15, li#menu-item-17.menu-item-17, li#menu-item-20.menu-item-20, li#menu-item-19.menu-item-19, menu-item-25: li#menu-item-25.menu-item-25, menu-item-12: li#menu-item-12.menu-item-12, menu-item-16: li#menu-item-16.menu-item-16, menu-item-14: li#menu-item-14.menu-item-14, menu-item-11: li#menu-item-11.menu-item-11, …]

for (let element of document.getElementsByClassName("sub-menu")[0].getElementsByTagName("li")) 
{
    console.log(element.innerHTML)
}
// VM1982:3 <a href="https://www.michelthomas.com/learn-arabic/">Arabic (Egyptian)</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-dutch/">Dutch</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-french/">French</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-greek/">Greek</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-german/">German</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-hindi/">Hindi</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-italian/">Italian</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-irish/">Irish</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-japanese/">Japanese</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-korean/">Korean</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-modern-standard-arabic/">Modern Standard Arabic</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-mandarin-chinese/">Mandarin Chinese</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-norwegian/">Norwegian</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-polish/">Polish</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-portuguese/">Portuguese</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-russian/">Russian</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-spanish/">Spanish</a>
// VM1982:3 <a href="https://www.michelthomas.com/learn-swedish/">Swedish</a>
