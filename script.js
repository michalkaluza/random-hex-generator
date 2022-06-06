

const generateColor = () => {
    const color = "#" + Math.random().toString(16).substring(2,8)
    document.querySelector(".hex").innerHTML = color
    document.body.style.backgroundColor = color
}

document.querySelector(".generate").addEventListener("click", generateColor)