const heading = 'Please meet our team';
let i = 0;
console.log(heading.length);
const typing = () => {
    if(i<heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 500);
    }
}

typing();