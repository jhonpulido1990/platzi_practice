#!/usr/bin/python3

from car import Car

if __name__ == '__main__':
    car = Car()
    car.licence = "AMS132"
    car.driver = "andres herrera"
    print(vars(car))