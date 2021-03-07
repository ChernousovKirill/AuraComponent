({	    doInit: function(component, event, helper) {
        helper.House(component);
    },
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey'+searchKey);
        var action = component.get("c.findByName");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.houses", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },

 createNewHouse : function(component, event, helper) {
        var recordEvent=$A.get("e.force:createRecord");
        recordEvent.setParams({
            "entityApiName": "House__c"
        });
        recordEvent.fire();
 }
    })
