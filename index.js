let screen = document.getElementById('in1');
buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons)
{
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;

if(buttonText=='x')
{
    buttonText = '*';
    screenValue +=buttonText;
    screen.value = screenValue;
}
else if(buttonText=='C')
{
screen.value='';
screenValue='';

}

else if(buttonText=='=')
{
    screen.value = eval(screenValue);
    screenValue = screen.value
}
else if(buttonText == 'CE')
{
    str = screenValue;
    str = str.toString();
    var a = str.slice(0 , -1);
    screenValue = a;
    screen.value = a;
}
else if(buttonText =='R')
{
    screen.value = screenValue * screenValue;
    screenValue = screen.value;
}
else
{
    screenValue += buttonText;
    screen.value = screenValue;
}
    })
}