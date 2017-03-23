function scripttask18() {
	
	var dadosHTML = "";

	dadosHTML +="Teste de email <br>";
	dadosHTML += "campo1: "+ hAPI.getCardValue("campo1");
	dadosHTML += "campo2: "+ hAPI.getCardValue("campo2");

	
	var jsonContent={
    		"to" : "destino@xxx.com", //emails of recipients separated by ";"
    		"from" : "sender@xxx.com", // sender
    		"subject" : "teste email via API", //   subject
    		 "templateId" : "TPLTASK_SEND_EMAIL", // template usado como modelo.
    		 "dialectId"  : "pt_BR", //Email dialect , if not informed receives pt_BR , email dialect ("pt_BR", "en_US", "es")
    		 "param" : {"SERVER_URL":"http://meufluig.xxx.com/",
    			 "WorkflowMailContent":dadosHTML} //  Map with variables to be replaced in the template    	
    }
 
    //sequencia dos parâmetros. Consumer Key, Consumer Secret, Token Access, Token Secret		
    //configurar através do painel de controle: http://tdn.totvs.com/pages/viewpage.action?pageId=185736325
    var consumer = oauthUtil.getNewAPIConsumer("8b17ef5e-79e3-4527-ff12-xxxxxxxxxxxx", "eaa7b746-354b-42ba-be7a-aed15dt832e4b8352de0-62e-456d-a0f8-xxxxxxxxxxxx", "ce3d6a96-75b9-4b6c-8181-xxxxxxxxxxxx",
            "ed7a8116-5cb7-4e43-b7f6-57157d9186216fb7dabd-6607-4d36-bf60-xxxxxxxxxxxx");
    consumer.post("/public/alert/customEmailSender", JSON.stringify(jsonContent));
}