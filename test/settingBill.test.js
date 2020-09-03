describe('the bill with settings factory function' , function(){

    it('should be able set call cost' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setCallCost(1.85)
        assert.equal(1.85, settingBill.getCallCost());

        let settingBill2 = billWithSettings();
        
        settingBill2.setCallCost(2.75)
        assert.equal(2.75, settingBill2.getCallCost());

    });
    
    it('should be able set the sms cost' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setSmsCost(0.85)
        assert.equal(0.85, settingBill.getSmsCost());

        let settingBill2 = billWithSettings();
        
        settingBill.setSmsCost(0.75)
        assert.equal(0.75, settingBill.getSmsCost());

    });

    it('should be able set the sms cost ans the call cost' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setSmsCost(0.85)
        assert.equal(0.85, settingBill.getSmsCost());

        settingBill.setCallCost(2.75)
        assert.equal(2.75, settingBill.getCallCost());

        let settingBill2 = billWithSettings();

        settingBill2.setSmsCost(0.65)
        assert.equal(0.65, settingBill2.getSmsCost());

        settingBill2.setCallCost(1.85)
        assert.equal(1.85, settingBill2.getCallCost())

    });

    it('should be able set the warning level' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setWarningLevel(20)
        assert.equal(20, settingBill.getWarningLevel());


    });


    it('should be able set the critical level' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setCriticalLevel(35)
        assert.equal(35, settingBill.getCriticalLevel());


    });

    it('should be able set the  warning and the critical level' , function(){

        let settingBill = billWithSettings();
        
        settingBill.setCriticalLevel(15)
        assert.equal(15, settingBill.getCriticalLevel());
        settingBill.setWarningLevel(10)
        assert.equal(10, settingBill.getWarningLevel());


    });

    


});