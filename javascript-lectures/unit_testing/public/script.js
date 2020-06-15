$(function (){
    let kmbox=$('#km')
    let minbox=$('#min')
    let calcbtn=$('#calcfare')
    let farediv=$('#fare')

    calcbtn.click(function(){
        $.post('/calcfare',function(data){
            farediv.innerText=data.fare
        })
    })
})