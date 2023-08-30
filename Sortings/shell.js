async function shell(){
    console.log('In shell()');
    const ele = document.querySelectorAll(".bar");
    // color
    var increment = ele.length/2;
    while(increment > 0){
        for(i=increment; i<ele.length; i++){
            console.log('In ith loop');
            var j = i;
            var temp = ele[i].style.height;
            ele[i].style.background = 'blue';
            
            await waitforme(delay);
            

            while(j>= parseInt(increment) && (parseInt(ele[j-increment].style.height) > parseInt(temp))){
                console.log('In while loop');
                ele[j].style.background = 'green';
                ele[j].style.height = ele[j-increment].style.height;
                j=j-increment;


                
            }
            ele[j].style.height=temp;



            //color
            ele[j].style.background =' green'
        }
        if(increment == 2){
            increment = 1;
        }
        else{
            increment = parseInt(increment*5/11);
        }
        
    }
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function(){
    console.log(shell);
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shell();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});