interface Customer {
    id: number;
    name: string;
    phone?: string;
}
type OrderIdTask8 = number | string;
type DeliveryStatusTask8 = 'pending' | 'in_transit' | 'delivered' | 'cancelled';
type DeliveryPriorityTask8 = 'low' | 'medium' | 'high';
type CoordinatesTask8 = {
    latitude: number;
    longitude: number;
};

interface DeliveryOrderTask8 {
    readonly id: OrderIdTask8;
    customer: Customer;
    status: DeliveryStatusTask8;
    priority: DeliveryPriorityTask8;
    weightKg: number;
    pricePerKg: number;
    fromTo: [string, string];
    destinationCoords?: CoordinatesTask8;
    comment?: string;
}

// Данные заказов
let orders: DeliveryOrderTask8[] = [
    {
        id: 3001,
        customer: {
            id: 1,
            name: 'Иван Петров',
            phone: '+7 (999) 123-45-67'
        },
        status: 'delivered',
        priority: 'medium',
        weightKg: 5.5,
        pricePerKg: 150,
        fromTo: ['Москва', 'Санкт-Петербург'],
        comment: 'Осторожно, хрупкое'
    },
    
    {
        id: 3002,
        customer: {
            id: 2,
            name: 'ООО "Ромашка"'
        },
        status: 'in_transit',
        priority: 'high',
        weightKg: 1200,
        pricePerKg: 45,
        fromTo: ['Новосибирск', 'Владивосток'],
        destinationCoords: {
            latitude: 43.1155,
            longitude: 131.8855
        }
    },
    
    {
        id: 3003,
        customer: {
            id: 3,
            name: 'Анна Смирнова',
            phone: '+7 (495) 765-43-21'
        },
        status: 'pending',
        priority: 'low',
        weightKg: 2.3,
        pricePerKg: 200,
        fromTo: ['Казань', 'Екатеринбург'],
        destinationCoords: {
            latitude: 56.8380,
            longitude: 60.6055
        }
    },
    
    {
        id: 3004,
        customer: {
            id: 4,
            name: 'ИП Кузнецов'
        },
        status: 'cancelled',
        priority: 'medium',
        weightKg: 35,
        pricePerKg: 80,
        fromTo: ['Краснодар', 'Ростов-на-Дону'],
        comment: 'Отменён по просьбе клиента'
    }
];

// Функции для работы с заказами
function calculateOrderTotal(order: DeliveryOrderTask8[]): number {
    let total = 0;
    order.forEach(element => {
        total += element.weightKg * element.pricePerKg;
    });
    return total;
}
function formatOrderSummary(order: DeliveryOrderTask8[]): void {
    order.forEach(element => {
        const totalPrice = element.weightKg * element.pricePerKg;
        console.log(`Заказ ${element.id} для клиента ${element.customer.name}: ${totalPrice} руб. Статус: ${element.status}, Приоритет: ${element.priority}`);
    });
}
function UpdateDeliveryStatus(order: DeliveryOrderTask8, newStatus: DeliveryStatusTask8): void {
    order.status = newStatus;
}
function GetOrdersByStatus(orders: DeliveryOrderTask8[], status: DeliveryStatusTask8): DeliveryOrderTask8[] {
    return orders.filter(order => order.status === status);
}

// Примеры использования
console.log('Заказов в массиве:', orders.length);

const hasNoPhone = orders.some(order => !order.customer.phone);
console.log('Есть заказ без телефона:', hasNoPhone);

const hasCoords = orders.some(order => order.destinationCoords !== undefined);
console.log('Есть заказ с координатами:', hasCoords);

const uniqueStatuses = new Set(orders.map(order => order.status));
console.log('Количество уникальных статусов:', uniqueStatuses.size);
console.log('Статусы:', Array.from(uniqueStatuses));
console.log('Все заказы:');
console.log(orders);

formatOrderSummary(orders);
UpdateDeliveryStatus(orders[0], 'cancelled');

interface OrdersReport {
    totalOrders: number;
    deliveredCount: number;
    inTransitCount: number;
    cancelledCount: number;
    totalRevenue: number;
    highPriorityOrders: DeliveryOrderTask8[];
}


function buildReport(list: DeliveryOrderTask8[]): OrdersReport {
    const totalOrders = list.length;
    
    const deliveredCount = list.filter(order => order.status === 'delivered').length;
    const inTransitCount = list.filter(order => order.status === 'in_transit').length;
    const cancelledCount = list.filter(order => order.status === 'cancelled').length;
    
    const totalRevenue = list.reduce((sum, order) => sum + calculateOrderTotal(orders), 0);
    
    const highPriorityOrders = list.filter(order => order.priority === 'high');
    
    return {
        totalOrders,
        deliveredCount,
        inTransitCount,
        cancelledCount,
        totalRevenue,
        highPriorityOrders
    };
}

function formatOrder(order: DeliveryOrderTask8): string {
    const customerName = order.customer.name;
    const customerPhone = order.customer.phone || 'телефон не указан';
    const route = `${order.fromTo[0]} → ${order.fromTo[1]}`;
    const cost = calculateOrderTotal(orders);
    
    return `Заказ ${order.id}: ${customerName} (${customerPhone}), маршрут: ${route}, стоимость: ${cost} руб., статус: ${order.status}`;
}

const report = buildReport(orders);

console.log('=== ОТЧЕТ ПО ЗАКАЗАМ ===');
console.log('Объект отчета:');
console.log(JSON.stringify(report, null, 2));

console.log('\n=== ЗАКАЗЫ ВЫСОКОГО ПРИОРИТЕТА ===');
if (report.highPriorityOrders.length > 0) {
    report.highPriorityOrders.forEach((order, index) => {
        console.log(`${index + 1}. ${formatOrder(order)}`);
    });
} else {
    console.log('Нет заказов с высоким приоритетом');
}

console.log('\n=== ДЕТАЛИ ОТЧЕТА ===');
console.log(`Всего заказов: ${report.totalOrders}`);
console.log(`Доставлено: ${report.deliveredCount}`);
console.log(`В пути: ${report.inTransitCount}`);
console.log(`Отменено: ${report.cancelledCount}`);
console.log(`Ожидают: ${report.totalOrders - report.deliveredCount - report.inTransitCount - report.cancelledCount}`);
console.log(`Общая выручка: ${report.totalRevenue} руб.`);