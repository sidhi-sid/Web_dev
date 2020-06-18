$(function (){
    let kmbox=$('#km')
    let minbox=$('#min')
    let calcbtn=$('#calcfare')
    let farediv=$('#fare')
    let ratediv=$('#rates')
    let ratebtn=$('#getrates')

    calcbtn.click(function(){
        $.post('/calcfare',{
            km:kmbox.val(),
            min:minbox.val()
        },
            function(data){
            farediv.text(`Fare : `+data.fare)
        })
    })
    ratebtn.click(function(){
        $.get('/rate',function(data){
            let prettyratedata=`
            <br>
            Fixed Fare = Rs. ${data.fixed} for ${data.minkm} KM
           <br>
            Fare (Distance) = Rs. ${data.perkm} /KM
            <br>
            Fare (Waiting) = Rs. ${data.permin} / min (after ${data.freemin} min)
            <br>

            `
            ratediv.html(prettyratedata)
        })
    })
})