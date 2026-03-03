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
formatOrderSummary(orders);
UpdateDeliveryStatus(orders[0], 'cancelled');
