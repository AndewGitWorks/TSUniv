interface User {
    name: string,
    age: number
}
let user: User = {name:"John",age: 12}
interface Employee
{
    name: string,
    age:number,
    salaryDay: number
}
let empl1: Employee = 
{
    name: "Name1",
    age: 20,
    salaryDay: 1000
}
let empl2: Employee = 
{
    name: "Name2",
    age: 20,
    salaryDay: 1000
}
let empl3: Employee = 
{
    name: "Name3",
    age: 20,
    salaryDay: 1000
}
interface Time
{
    hour: number,
    minute: number,
    second: number
}
let span: Time = 
{
    hour: 10,
    minute: 20,
    second: 30
}
let span2: Time = 
{
    hour: 10,
    minute: 20,
    second: 30
}
let span3: Time = 
{
    hour: 10,
    minute: 20,
    second: 30
}
interface OrderItem
{
    name: string,
    quantity: number
}
interface Order
{
    clientName: string,
    createdAt: Date,
    items: OrderItem[]
}
let item1: OrderItem = 
{
    name: "Milk",
    quantity: 1
}
let item2: OrderItem = 
{
    name: "Beer",
    quantity: 3
}
let item3: OrderItem = 
{
    name: "Vodka",
    quantity: 4
}
let order: Order = 
{
    clientName: "Client",
    createdAt: new Date(),
    items : [item1,item2,item3]
}
console.log(order);