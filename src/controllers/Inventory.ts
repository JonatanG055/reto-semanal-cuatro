// controllers/Inventory.ts
import { Vehicle } from "./Vehicle"; // Importa la clase Vehicle

// Clase que representa el inventario de vehículos
export class Inventory {
    private vehicles: Vehicle[] = []; // Lista de vehículos en el inventario

    // Método para agregar un nuevo vehículo al inventario
    addVehicle(
        vehicleId: string, // ID del vehículo
        model: string,     // Modelo del vehículo
        brand: string,     // Marca del vehículo
        price: number,     // Precio del vehículo
        initialStock: number // Stock inicial
    ): Vehicle {
        const newVehicle = new Vehicle(vehicleId, model, brand, price, initialStock);
        this.vehicles.push(newVehicle);
        console.log(`Vehículo agregado: ${model} (${brand}). ID: ${vehicleId}`);
        return newVehicle;
    }

    // Método para buscar un vehículo por su ID
    findVehicle(vehicleId: string): Vehicle | undefined {
        return this.vehicles.find(vehicle => vehicle.vehicleId === vehicleId);
    }

    // Método para actualizar el stock de un vehículo
    updateStock(vehicleId: string, newStock: number): void {
        const vehicle = this.findVehicle(vehicleId);
        if (vehicle) {
            vehicle.updateStock(newStock);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    // Método para eliminar un vehículo del inventario
    removeVehicle(vehicleId: string): void {
        const index = this.vehicles.findIndex(vehicle => vehicle.vehicleId === vehicleId);
        if (index !== -1) {
            this.vehicles.splice(index, 1);
            console.log(`Vehículo con ID ${vehicleId} eliminado del inventario.`);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    // Método para mostrar todos los vehículos en el inventario
    showAllVehicles(): void {
        if (this.vehicles.length === 0) {
            console.log('No hay vehículos en el inventario.');
        } else {
            this.vehicles.forEach(vehicle => vehicle.showDetails());
        }
    }
}
