Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito").WebEdit("dato").Set DataTable("PLACA", dtGlobalSheet) @@ script infofile_;_ZIP::ssf1.xml_;_
wait 2
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito").WebButton("Consultar").Click
