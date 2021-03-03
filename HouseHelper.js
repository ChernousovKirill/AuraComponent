({      
    House: function(component) {
        var action = component.get('c.getHouses');
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.houses', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
