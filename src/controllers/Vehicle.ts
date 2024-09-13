// controllers/Vehicle.ts
import { Transaction } from "../models/Transaction"; // Importa la clase Transaction

// Clase que representa un vehículo en el inventario
export class Vehicle {
    private transactions: Transaction[] = []; // Historial de transacciones
    private stock: number; // Cantidad disponible en el inventario

    constructor(
        public vehicleId: string, // ID único del vehículo
        public model: string,     // Modelo del vehículo
        public brand: string,     // Marca del vehículo
        public price: number,     // Precio del vehículo
        initialStock: number      // Cantidad inicial disponible
    ) {
        this.stock = initialStock;
    }

    // Método para agregar más unidades del vehículo al inventario
    addStock(amount: number): void {
        if (amount > 0) {
            this.stock += amount;
            this.addTransaction(amount, 'add', 'Stock aumentado');
            console.log(`Se agregaron ${amount} unidades. Stock actual: ${this.stock}`);
        } else {
            console.log('La cantidad debe ser positiva.');
        }
    }

    // Método para eliminar unidades del vehículo del inventario
    removeStock(amount: number): void {
        if (amount > 0 && amount <= this.stock) {
            this.stock -= amount;
            this.addTransaction(amount, 'remove', 'Stock reducido');
            console.log(`Se eliminaron ${amount} unidades. Stock actual: ${this.stock}`);
        } else {
            console.log('Cantidad insuficiente o inválida.');
        }
    }

    // Método para actualizar el stock del vehículo
    updateStock(newStock: number): void {
        if (newStock >= 0) {
            this.stock = newStock;
            this.addTransaction(newStock, 'update', 'Stock actualizado');
            console.log(`El stock ha sido actualizado. Stock actual: ${this.stock}`);
        } else {
            console.log('El stock no puede ser negativo.');
        }
    }

    // Método para mostrar el historial de transacciones del vehículo
    showTransactionHistory(): void {
        if (this.transactions.length === 0) {
            console.log('No hay transacciones registradas.');
        } else {
            this.transactions.forEach(transaction => {
                console.log(`[${transaction.date}] - ${transaction.description}`);
            });
        }
    }

    // Método para mostrar los detalles del vehículo
    showDetails(): void {
        console.log(`Vehículo: ${this.vehicleId}\nModelo: ${this.model}\nMarca: ${this.brand}\nPrecio: ${this.price}\nStock: ${this.stock}`);
    }

    // Método privado para añadir una transacción al historial
    private addTransaction(amount: number, type: 'add' | 'remove' | 'update', description: string): void {
        const transaction = new Transaction(this.vehicleId, amount, type, new Date(), description);
        this.transactions.push(transaction);
    }
}
