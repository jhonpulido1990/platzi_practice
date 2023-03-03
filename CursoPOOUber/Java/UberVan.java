import java.util.ArrayList;
import java.util.Map;


class UberVan extends Car {

    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberVan(String licence, Account driver) {
        super(licence, driver);
    }
}
