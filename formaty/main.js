function red(){
    document.getElementById('par').style.color = "red"
}

function green(){
    document.getElementById('par').style.color = "green"
}

function blue(){
    document.getElementById('par').style.color = "blue"
}

function wielkosc(){
    let font = document.getElementById('inpsize').value
    document.getElementById('par').style.fontSize = font.value
}

function wyglad(){
    let lista = document.getElementById('lista')
    const italic = document.getElementById('italic')
    const prosty = document.getElementById('prosty')
    if(italic){
        document.getElementById('par').style.fontStyle = "italic"
    }
}