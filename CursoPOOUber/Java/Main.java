class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        Car car = new Car("AMQ123", new Account("andres herrera", "AND123") );
        car.passegenger = 4;
        car.printDataCar();

        Car car2 = new Car("QMT321", new Account("andrea betancour", "NSE321") );
        car2.passegenger = 4;
        car2.printDataCar();
    }
}