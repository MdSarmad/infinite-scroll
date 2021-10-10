const container = document.getElementById('container');

var num = 1;

var i = 0;

function displayNext(){
    for(i=0;i<5;i++){

        const dataNext = `<div class="posts">
            <p class="post-id">${num++}</p>
            <h2 class="title">title</h2>
            <p class="post-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate reprehenderit suscipit incidunt, unde blanditiis assumenda facere fugiat dignissimos nemo corporis.</p>
        </div>`;

         container.insertAdjacentHTML('beforeend',dataNext);
    }
}
 


displayNext();
 
 
 
window.addEventListener('scroll',() =>{
    const {scrollHeight,scrollTop, clientHeight} = document.documentElement;
    let temp = scrollTop + clientHeight;
 
    if(temp >scrollHeight-5)
    {
        setTimeout(displayNext,300);
    }
});