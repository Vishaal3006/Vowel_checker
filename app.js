function checkVowels() {
    // console.log(values.value);
    var values=document.getElementById("textarea").value;
    var result=document.getElementById("result");
    var count=0;
    values=values.toLowerCase();
    for(let i=0;i<values.length;i++){
        if(values.charAt(i)=='a' || values.charAt(i)=='e' || values.charAt(i)=='i' || values.charAt(i)=='o' || values.charAt(i)=='u'){
            count++;
        }
    }
    // console.log(result.value);
    result.textContent="Total Count "+count;
}


// document.getElementById("button").addEventListener("click",countVowels);