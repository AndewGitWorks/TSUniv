interface User4
{
    name: string,
    age: number,
    parents:{
        mother: string,
        father: string
    }
}
let user4: User4 = 
{
    name: 'john',
    age:30,
    parents:{
        mother: 'Anna',
        father: 'Eric'
    }
}
let event4 = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31'
    }
}
interface Event4{
    name:string,
    time:{
        start:string,
        finish:string,
    }
}
let emlpTask4 = {
    name: 'andrew',
    position:{
        name: 'programmer',
        salary:1000
    },
    addr:{
        country: 'belarus',
        city:'minsk',
    }
}
interface EmplTask4{
    name: string,
    position:{
        name: string,
        salary: number,
    },
    addr:{
        country: string,
        city:string
    }
}