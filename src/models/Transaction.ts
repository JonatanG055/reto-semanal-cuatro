// models/Transaction.ts

// Clase que representa una transacción en el inventario
export class Transaction {
    constructor(
        public vehicleId: string,       // ID del vehículo involucrado en la transacción
        public amount: number,          // Cantidad involucrada en la transacción
        public type: 'add' | 'remove' | 'update', // Tipo de transacción
        public date: Date,              // Fecha de la transacción
        public description: string      // Descripción de la transacción
    ) {}
}
