let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

function slider(id) {
    if(id === 1){
        one.style.height = "144px";
        two.style.height = "0";
        three.style.height = "0";

        one.style.height = (ifOpened(1))? '0px':'144px';
        document.getElementById("icon_1").style.transform = (ifOpened(1))? "rotate(0)" : "rotate(180deg)";
    }
    else if(id === 2){
        two.style.height = "192px";
        one.style.height = "0";
        three.style.height = "0";

        two.style.height = (ifOpened(2))? '0px':'192px';
        document.getElementById("icon_2").style.transform = (ifOpened(2))? "rotate(0)" : "rotate(180deg)";
    }
    else{
        three.style.height = "96px";
        one.style.height = "0";
        two.style.height = "0";

        three.style.height = (ifOpened(3))? '0px':'96px';
        document.getElementById("icon_3").style.transform = (ifOpened(3))? "rotate(0)" : "rotate(180deg)";
    }
}

function ifOpened(id){
    if(id === 1){
        let i = parseInt(getComputedStyle(one).getPropertyValue("height"));
        if(i > 0){
            return true;
        }
    }
    if(id === 2){
        let i = parseInt(getComputedStyle(two).getPropertyValue("height"));
        if(i > 0){
            return true;
        }
    }
    else{
        let i = parseInt(getComputedStyle(three).getPropertyValue("height"));
        if(i > 0){
            return true;
        }
    }
}

