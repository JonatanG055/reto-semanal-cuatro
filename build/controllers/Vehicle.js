"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
// controllers/Vehicle.ts
const Transaction_1 = require("../models/Transaction"); // Importa la clase Transaction
// Clase que representa un vehículo en el inventario
class Vehicle {
    constructor(vehicleId, // ID único del vehículo
    model, // Modelo del vehículo
    brand, // Marca del vehículo
    price, // Precio del vehículo
    initialStock // Cantidad inicial disponible
    ) {
        this.vehicleId = vehicleId;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.transactions = []; // Historial de transacciones
        this.stock = initialStock;
    }
    // Método para agregar más unidades del vehículo al inventario
    addStock(amount) {
        if (amount > 0) {
            this.stock += amount;
            this.addTransaction(amount, 'add', 'Stock aumentado');
            console.log(`Se agregaron ${amount} unidades. Stock actual: ${this.stock}`);
        }
        else {
            console.log('La cantidad debe ser positiva.');
        }
    }
    // Método para eliminar unidades del vehículo del inventario
    removeStock(amount) {
        if (amount > 0 && amount <= this.stock) {
            this.stock -= amount;
            this.addTransaction(amount, 'remove', 'Stock reducido');
            console.log(`Se eliminaron ${amount} unidades. Stock actual: ${this.stock}`);
        }
        else {
            console.log('Cantidad insuficiente o inválida.');
        }
    }
    // Método para actualizar el stock del vehículo
    updateStock(newStock) {
        if (newStock >= 0) {
            this.stock = newStock;
            this.addTransaction(newStock, 'update', 'Stock actualizado');
            console.log(`El stock ha sido actualizado. Stock actual: ${this.stock}`);
        }
        else {
            console.log('El stock no puede ser negativo.');
        }
    }
    // Método para mostrar el historial de transacciones del vehículo
    showTransactionHistory() {
        if (this.transactions.length === 0) {
            console.log('No hay transacciones registradas.');
        }
        else {
            this.transactions.forEach(transaction => {
                console.log(`[${transaction.date}] - ${transaction.description}`);
            });
        }
    }
    // Método para mostrar los detalles del vehículo
    showDetails() {
        console.log(`Vehículo: ${this.vehicleId}\nModelo: ${this.model}\nMarca: ${this.brand}\nPrecio: ${this.price}\nStock: ${this.stock}`);
    }
    // Método privado para añadir una transacción al historial
    addTransaction(amount, type, description) {
        const transaction = new Transaction_1.Transaction(this.vehicleId, amount, type, new Date(), description);
        this.transactions.push(transaction);
    }
}
exports.Vehicle = Vehicle;
