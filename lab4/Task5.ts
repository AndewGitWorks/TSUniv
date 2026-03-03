let emlpTask5 = {
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
interface PositionTask5{
    name: string,
    salary: number
}
interface AddrTask5{
    country: string,
    city: string
}
interface emlpTask5WithNewEntities{
    name: string,
    position: PositionTask5,
    addr: AddrTask5
}
interface Parent {
    name: string;
    age: number;
    parents: null;
}

interface UserTask5 {
    name: string;
    age: number;
    parents: {
        mother: Parent;
        father: Parent;
    };
}

let userTask5: UserTask5 = {
    name: 'john',
    age: 30,
    parents: {
        mother: {
            name: 'jane',
            age: 30,
            parents: null
        },
        father: {
            name: 'eric',
            age: 30,
            parents: null
        }
    }
};