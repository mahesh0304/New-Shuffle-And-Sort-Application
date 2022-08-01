# New-Shuffle-And-Sort-Application
# About the application:
The Page consists of 9 numbered cards which can be manipulated by using the shuffle and sort button.

# Steps for executing the application:
Download the zip file(Shuffle And Sort App) or clone it in your local,Once down loding is done unzip the folder and open it in any ID(VS code).
"Shuffle And Sort App" folder contain three files.
1. index.html
2. script.js
3. style.css
 for excute the application just right click on(index.html) and open with chrom.

# Functionality: 
1. This page is reponsive, you can open it in any device it will be auto adjust as per the device size.
2. When user click on the button "SHUFFLE" number will be shuffled or rearranged randomly.
3. When the click on the button "SORT" number will be sort in ascending order.
4. Check the header and footer part.

#Technical Note:
In the script.js file has two functions.
1. shuffleNumber function:
When user click on the "Shuffle" button below function will execute:
shuffleNumber = () => { 
        //select the ul with querySelector.
        var ul = document.querySelector('ul');
        //Iterating all the ui childern element by for loop and and with the help of Math.random function generating idex and appended with ul.
        for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
        }  
    }

2. sortNumber function:
When clicked on "SORT" button below function called
    sortNumber = () => {
        //select the ul with querySelector.
        const ul = document.querySelector('ul');
        //select the li’s with querySelectorAll.
        const lis = document.querySelectorAll('li');
        // spreading the lis into an array Then we call sort with a callback that sort the textContent of each entry converted to numbers with +.
        const sortedLis = [...lis].sort((a, b) => +a.textContent - +b.textContent);
        //here we replace the existing li entries in the ul with the sorted ones by calling ul.replaceChildren with the entries from sortedLis.
        // They’ll be inserted in the same order they’re listed in the arguments.
        // once we click on sort, will see expected result.
        ul.replaceChildren(...sortedLis);
        }
        
# Code structure
I have created seaprate files for html, js and css.
1. index.html
2. script.js
3. style.css
