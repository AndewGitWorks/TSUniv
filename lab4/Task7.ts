enum DeliveryStatus{
    Created,
    InTransit,
    Delivered,
    Cancelled
}
type DeliveryPriority = 'Low' | 'Medium' | 'High';
type OrderId = number;
type Coordinates = [number, number];
let currentStatus: DeliveryStatus = DeliveryStatus.Created;
let priority: DeliveryPriority = 'High';
let orderId: OrderId = 12345;
let warehouseCords: Coordinates = [40.7128, -74.0060];
console.log(`Order ${orderId} is currently ${DeliveryStatus[currentStatus]} with priority ${priority}.`);
console.log(`Warehouse coordinates: Latitude ${warehouseCords[0]}, Longitude ${warehouseCords[1]}.`);