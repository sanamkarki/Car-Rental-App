public with sharing class testingApex {
   @AuraEnabled(cacheable=true)
   public static List<Car__c> testingMethod(){

    return [SELECT Id, Name,Car_Type__c,
    Contact__r.Name,Per_Day_Rent__c,Picture__c,	Available_For_Rent__c 
    FROM Car__c
    WHERE Available_For_Rent__c = true ];
}}