// ! Создаем тип enum для перечесления кастомных переменных
enum OrderStatus{
    Pending = "Pending",
    Shipping = "Shipping",
    Cancelled = "Cancelled",
};
// ! Создаем сущность Customer с nullable полем phone
interface Customer{
    id: number,
    name: string,
    email: string,
    phone?: string,
};
// ! Создаем сущность Order с readonly полем id и nullable notes
interface Order
{
    readonly id: number,
    customer: Customer,
    productName: string,
    quantity: number,
    price: number,
    status: OrderStatus,
    notes?: string,
};
// ! Функция рассчета стоимости
function CalculateTotal(order: Order): number {
    return order.price * order.quantity;
}
// ! Консольный вывод сущностей
function printOrderSummary(order:Order): void{
    const total = CalculateTotal(order);
    console.log(
        `Order #${order.id} | Status: ${order.status} | Total: $${total}`
    );
    console.log(
        `Customer: ${order.customer.name} (${order.customer.email})`
    );
    if(order.notes)
    {
        console.log(`Note: ${order.notes}`);
    }
    console.log('--------------------------------------------------');
}
type Coordinates = [number,number];
function UpdateOrderStatus(order:Order, newStatus: OrderStatus): Order{
    return {...order, status: newStatus};
}
let orderDatabase: Order[] = [];
class DataStorage<T>
{
    private data: T[] = [];
    AddItem (item: T): void
    {
        this.data.push(item);
    }
    GetItems(): T[]{
        return [...this.data];
    }
    RemoveItems(index:number):void {
        if(index >= 0 && index < this.data.length){
            this.data.splice(index, 1);
        }
    }
}
const orderStorage = new DataStorage<Order>();
const customer1: Customer = {id: 1, name: "Name", email: "email@email.com"};
const customer2: Customer = {id: 1, name: "Name", email: "email@email.com", phone: "+7 777 777 77 77"};
const order1: Order = {
    id: 1001,
    customer: customer1,
    productName: "Laptop Lenovo",
    quantity: 1,
    price: 1200,
    status: OrderStatus.Pending,
};
const order2: Order = {
    id: 1002,
    customer: customer2,
    productName: "Laptop Apple",
    quantity: 2,
    price: 2500,
    status: OrderStatus.Shipping,
    notes: "Leave at front door",
};
orderStorage.AddItem(order1);
orderStorage.AddItem(order2);
console.log("==== INITIAL ====");
orderStorage.GetItems().forEach(printOrderSummary);
const updateOrder1 = UpdateOrderStatus(order1, OrderStatus.Shipping);
console.log("==== UPDATE RECIEVED ====");
printOrderSummary(updateOrder1);
const logStorage = new DataStorage<string>();
logStorage.AddItem("System started");
logStorage.AddItem("User logged in");
console.log("=== SYSTEM LOGS ===");
console.log(logStorage.GetItems());