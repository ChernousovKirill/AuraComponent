({
    fetchHouse : function(component, event, helper) {
        helper.fetchHouseHelper(component, event, helper);
    }, 
 createNewHouse : function(component, event, helper) {
        var recordEvent=$A.get("e.force:createRecord");
        recordEvent.setParams({
            "entityApiName": "House__c"
        });
        recordEvent.fire();
 }
    })
