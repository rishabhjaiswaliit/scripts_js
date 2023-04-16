// USE FIREFOX
/*
Paste this code in the console.

With: new jsPDF() you get a 297 x 210 (mm) page size.

To get a higher quality PDF, you have to zoom in the document in Google Drive. You can click zoom in button ONE time.
Now you get a bigger image, so you have to increase 297 x 210 (mm) to (2975) x (2105) (mm) (for example): new jsPDF('p', 'mm', [297*5, 210*5]);
You can try with *4, *6, *10, etc...

To download a landscape PDF file, basically you have to change line 3 in the code to:
let pdf = new jsPDF('l');

Credits to: https://codingcat.codes/2019/01/09/download-view-protected-pdf-google-drive-js-code/
*/
let jspdf = document.createElement("script");
jspdf.onload = function () {
    let pdf = new jsPDF();
//     let pdf = new jsPDF('p', 'mm', [297*5, 210*5]);
    let elements = document.getElementsByTagName("img");
    for (let i in elements) {
        let img = elements[i];
        console.log("add img ", img);
        if (!/^blob:/.test(img.src)) {
            console.log("invalid src");
            continue;
        }
        let can = document.createElement('canvas');
        let con = can.getContext("2d");
        can.width = img.width;
        can.height = img.height;
        con.drawImage(img, 0, 0, img.width, img.height);
        let imgData = can.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
    }
    pdf.save("Exported_File.pdf");
};
jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
document.body.appendChild(jspdf);

