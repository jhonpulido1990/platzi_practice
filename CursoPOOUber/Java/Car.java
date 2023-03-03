class Car {
    Integer id;
    String licence;
    Account driver;
    Integer passegenger;

    public Car(String licence, Account driver) {
        this.licence = licence;
        this.driver = driver;
    }

    void printDataCar() {
        System.out.println("License: " + licence + "; Name Driver: " + driver.name);
    }
}
