#!/usr/bin/python3

from car import Car

class UberBlack(Car):
    typeCarAccepted = []
    seatsMaterial = []


    def __init__(self, licence, driver, typeCarAccepted, seatsMaterial):
        super().__init__(licence, driver)
        self.seatsMaterial = seatsMaterial
        self.typeCarAccepted = typeCarAccepted
