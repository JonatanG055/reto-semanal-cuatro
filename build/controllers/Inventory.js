"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
// controllers/Inventory.ts
const Vehicle_1 = require("./Vehicle"); // Importa la clase Vehicle
// Clase que representa el inventario de vehículos
class Inventory {
    constructor() {
        this.vehicles = []; // Lista de vehículos en el inventario
    }
    // Método para agregar un nuevo vehículo al inventario
    addVehicle(vehicleId, // ID del vehículo
    model, // Modelo del vehículo
    brand, // Marca del vehículo
    price, // Precio del vehículo
    initialStock // Stock inicial
    ) {
        const newVehicle = new Vehicle_1.Vehicle(vehicleId, model, brand, price, initialStock);
        this.vehicles.push(newVehicle);
        console.log(`Vehículo agregado: ${model} (${brand}). ID: ${vehicleId}`);
        return newVehicle;
    }
    // Método para buscar un vehículo por su ID
    findVehicle(vehicleId) {
        return this.vehicles.find(vehicle => vehicle.vehicleId === vehicleId);
    }
    // Método para actualizar el stock de un vehículo
    updateStock(vehicleId, newStock) {
        const vehicle = this.findVehicle(vehicleId);
        if (vehicle) {
            vehicle.updateStock(newStock);
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    }
    // Método para eliminar un vehículo del inventario
    removeVehicle(vehicleId) {
        const index = this.vehicles.findIndex(vehicle => vehicle.vehicleId === vehicleId);
        if (index !== -1) {
            this.vehicles.splice(index, 1);
            console.log(`Vehículo con ID ${vehicleId} eliminado del inventario.`);
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    }
    // Método para mostrar todos los vehículos en el inventario
    showAllVehicles() {
        if (this.vehicles.length === 0) {
            console.log('No hay vehículos en el inventario.');
        }
        else {
            this.vehicles.forEach(vehicle => vehicle.showDetails());
        }
    }
}
exports.Inventory = Inventory;
