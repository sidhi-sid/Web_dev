const {db,center,season,batch,course,teacher}=require('./models')
const seed=async()=>{
    try{
        db.sync({alter:true})
        await center.bulkCreate([
            {id:'PP',name:'Pitampura',city:'New Delhi'},
            {id:'DW',name:'Pitampura',city:'New Delhi'},
            {id:'NO',name:'Noida',city:'New Delhi'},
            {id:'OL',name:'Online',city:'New Delhi'}
        ],{
            ignoreDuplicates:true
        })
        await season.bulkCreate([
            {id:'S',name:'Summer'},
            {id:'F',name:'Fall'},
            {id:'W',name:'Winter'},
            {id:'P',name:'Spring'}
        ],{
            ignoreDuplicates:true
        })
        await course.bulkCreate([
            {id:'LP',name:'Launchpad'},
            {id:'CX',name:'Crux'},
            {id:'IB',name:'Interview Bootcamp'},
            {id:'AD',name:'Android Development'}
        ],{
            ignoreDuplicates:true
        })
    }catch(e){
        console.error(e)
    }
}

seed()