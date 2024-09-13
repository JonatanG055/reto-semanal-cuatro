"use strict";
// models/Transaction.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
// Clase que representa una transacción en el inventario
class Transaction {
    constructor(vehicleId, // ID del vehículo involucrado en la transacción
    amount, // Cantidad involucrada en la transacción
    type, // Tipo de transacción
    date, // Fecha de la transacción
    description // Descripción de la transacción
    ) {
        this.vehicleId = vehicleId;
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.description = description;
    }
}
exports.Transaction = Transaction;
