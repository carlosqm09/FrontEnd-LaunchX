const content = document.querySelector("#content");

const getClientView = async()=>{
    const req = await fetch(`https://carlosqm09.github.io/Pasteleria/views/client.html`);
    const res = await req.text()
    console.log(res)

    content.innerHTML = res;
}

getClientView()