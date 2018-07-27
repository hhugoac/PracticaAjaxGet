alert('si jaló');
//Step 1. Create the asyncrone object
var xhr=new XMLHttpRequest();

window.onload=
()=>
{
    //Step 2. Put the listener to the buttom
    //alert("si jalo");
    var btnAccept=document.getElementById("btnAccept1");
    btnAccept.addEventListener("click",llamaServlet);
}

function llamaServlet()
{
    // Catch the textbos value
    var txtName=document.getElementById("txtName").value;
    //Step 3. send the asyncron process
    xhr.open("GET","BienvenidaServlet?txtName="+txtName,true);

    //Step 4. Check if the process ends successfuly
    xhr.onload=funcionCallBack;

    //Step 5. Send the process
    xhr.send();
}

function funcionCallBack()
{
    document.getElementById("Bienvenida").innerHTML=xhr.responseText;
}