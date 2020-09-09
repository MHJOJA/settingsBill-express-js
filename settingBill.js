module.exports = function (value){

    var callCost = 0;
    var smsCost = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    
    
    
    function setCallCost(callCost){
        theCallCost = callCost
        
     }
    
    function getCallCost(){
        return theCallCost;
    }
    
    function setSmsCost(smsCost){
        theSmsCost = smsCost
        
     }
    
    function getSmsCost(){
        return theSmsCost;
    }
    
    function setWarningLevel (warningLevel){
        theWarningLevel = warningLevel;
    }
    
    function getWarningLevel (warningLevel){
        return theWarningLevel
    }
    
    
    function setCriticalLevel (criticalLevel){
        theCriticalLevel = criticalLevel;;
    }
    function getCriticalLevel (criticalLevel){
        return theCriticalLevel
    }
    

    function setSettings (settings){
       
        smsCost = Number(settings.smsCost);
        callCost = Number(settings.callCost);
        warningLevel = Number(settings.warningLevel);
        criticalLevel = Number(settings.criticalLevel);
    }
    function getSettings(){
        return {
            smsCost,
            callCost,
            criticalLevel,
            warningLevel
        }
    }
    
    function recordAction (action){
        let cost = 0;
        if (action=== 'sms'){
            cost = smsCost;
        }
        else if (action === 'call'){
            cost = callCost
        }
        actionList.push({
            type : action,
            cost,
            timestamp : new Date()
        })
    }

   
    
    
    
        return {
            getCallCost,
            setCallCost,
            setSmsCost,
            recordAction,
            getSmsCost,
            setWarningLevel,
            getWarningLevel,
            setCriticalLevel,
            getCriticalLevel,
            setSettings,
            getSettings
        }
    }