// When clicked on "Shuffle" button below function called
 shuffleNumber = () => { 
        //select the ul with querySelector.
        var ul = document.querySelector('ul');
        //Iterating all the ui childern element by for loop and and with the help of Math.random function generating idex and appended with ul.
        for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
        }  
    }

// When clicked on "SORT" button below function called
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