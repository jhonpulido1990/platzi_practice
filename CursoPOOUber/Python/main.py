#!/usr/bin/python3

from car import Car
from account import Account

if __name__ == '__main__':
    car = Car("AMS132", Account("andres herrera","ORA132"))
    print(vars(car))
    print(vars(car.driver))