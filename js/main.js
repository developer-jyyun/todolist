let inputText = document.getElementById('add_con')
let ulNode = document.getElementById('todo_ul') //Id 동작o


function clickBtn(){
    // let checkBoxNode = document.createElement('input');
    //     checkBoxNode.type = 'checkbox';          

    let liNode = document.createElement("li");
        liNode.className ='todo_li'

    let labelNode = document.createElement('label');
        labelNode.innerHTML = '<input type="checkbox">'
        // labelNode.classList.remove='off'
       
    let txtNode = document.createTextNode(inputText.value);

    ulNode.appendChild(liNode);
    liNode.appendChild(labelNode);
        // liNode.appendChild(checkBoxNode);

    labelNode.appendChild(txtNode);
    event.preventDefault(); 
    document.getElementById("add_con").value = '';


    labelNode.addEventListener('click', function(e){  //클릭이벤트
        // labelNode.classList.toggle('off')
        // this.classList.toggle 왜 안되는거지....ㅜㅜㅜㅜㅜ...

        // console.log(this.firstElementChild)
        if(this.firstElementChild.checked==true){//체크박스 표시
           this.classList.add('off') //밑줄
           liNode.classList.add('off')
        }else{
           this.classList.remove('off')
           liNode.classList.remove('off')
        }
    })

 
}           

