public class HouseController{
  @AuraEnabled
  public static List <House__c> fetchHouses() {
      List<House__c> houseList = [SELECT Id, Name, Adress__c, Priece__c, Number_Child__c FROM House__c];
      return houseList;
  }
}
