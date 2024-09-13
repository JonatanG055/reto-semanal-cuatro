"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const Inventory_1 = require("./controllers/Inventory");
// Crear una instancia del inventario
const vehicleInventory = new Inventory_1.Inventory();
// Agregar vehículos al inventario
const toyota = vehicleInventory.addVehicle("001", "Corolla", "Toyota", 20000, 10);
const honda = vehicleInventory.addVehicle("002", "Civic", "Honda", 22000, 5);
// Actualizar el stock de un vehículo
vehicleInventory.updateStock(toyota.vehicleId, 15);
// Eliminar vehículos del inventario
vehicleInventory.removeVehicle(honda.vehicleId);
// Mostrar todos los vehículos en el inventario
vehicleInventory.showAllVehicles();
// Mostrar el historial de transacciones de un vehículo
toyota.showTransactionHistory();
