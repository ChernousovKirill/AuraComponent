({
    fetchHouseHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
                {label: 'Name', fieldName: 'Name', type: 'Text'},
                {label: 'Adress', fieldName: 'Adress__c', type: 'Text'},
                {label: 'Price', fieldName: 'Priece__c', type: 'Currency'},
                {label: 'Child', fieldName: 'Number_Child__c', type: 'Integer '}
            ]);
        var action = component.get("c.fetchHouses");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.houseList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
