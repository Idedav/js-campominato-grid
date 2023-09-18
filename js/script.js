const container = document.querySelector('.dc-container');
const btnStart = document.getElementById('start')
reset();

btnStart.addEventListener('click', function(){
    start();
})

// --------FUNCTIONS----------
function start(){
    for(let i = 0; i < 100; i++){
        const square = createSquare();
        console.log(square);
        square.addEventListener('click', function(){
            square.classList.toggle('clicked')
        })
        container.append(square)
    }
}
function reset(){
    container.innerHTML= ''
    return container;
}

function createSquare(){
    const newSquare = document.createElement('div');
    newSquare.className = 'square'
    return newSquare;
}