class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        Car car = new Car();
        car.licence = "AMQ123";
        car.driver = "andres herrera";
        car.passegenger = 4;
        car.printDataCar();

        Car car2 = new Car();
        car2.licence = "QMT321";
        car2.driver = "andrea betancour";
        car2.passegenger = 4;
        car2.printDataCar();
    }
}