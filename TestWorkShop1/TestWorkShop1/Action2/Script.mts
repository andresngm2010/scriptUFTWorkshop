wait 2
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito").WebButton("Pagar multa").Click @@ script infofile_;_ZIP::ssf34.xml_;_
wait 2
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("provincia").Select DataTable("PROVINCIA", dtGlobalSheet) @@ script infofile_;_ZIP::ssf35.xml_;_
wait 2
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("canton").Select DataTable("CANTON", dtGlobalSheet) @@ script infofile_;_ZIP::ssf36.xml_;_
wait 2
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("agencia").Select "Servipagos" @@ script infofile_;_ZIP::ssf38.xml_;_
wait 10
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebButton("PAGAR").Click @@ script infofile_;_ZIP::ssf37.xml_;_

