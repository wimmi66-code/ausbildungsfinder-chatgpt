# Ausbildungsfinder für ChatGPT und Microsoft Copilot – Einrichtung ohne Programmierkenntnisse

Stand: 02.11.2026

## Was du erhältst

Eine eigenständige, an der Funktion der angegebenen Claude-Anwendung orientierte Website. Sie erstellt Suchaufträge für ChatGPT und Microsoft Copilot. Die Recherche findet im gewählten KI-Chat statt, nachdem du den Auftrag eingefügt und abgesendet hast. Auf der Website selbst erscheinen keine Live-Stellenangebote. Der Originalquellcode und die Originalgrafiken wurden nicht übernommen.

Die Suche beginnt mit „Was suchst du?“: Ausbildung, Praktikum, berufliche Erprobung, Schulpraktikum oder EQ. Der Ort wird immer manuell als Ort oder Postleitzahl in Deutschland eingegeben. Es gibt keine feste regionale Vorauswahl. Erst nach einer Ortseingabe lassen sich Suchauftrag und Textdownload nutzen. Schulabschluss, Zeitraum, Mobilität und maximale Fahrtzeit grenzen die Suche ein. Die Erreichbarkeit bestimmt die passenden Nachbarorte. Mehrdeutige Ortsangaben muss das gewählte KI-System vor der Recherche klären.

Du kannst einen konkreten Beruf, mehrere Berufe oder ein Berufsfeld eingeben, etwa „IT und Medien“. Fehlt ein Beruf, verlangt der Auftrag eine kurze Rückfrage zu Interessen. Die Prüfung vorhandener Listen ist unter „Vorhandene Liste prüfen“ erreichbar. Sie bleibt eine Zusatzfunktion; der Ort wird dadurch nicht verändert. Vorhandene Betriebe außerhalb des Suchgebiets werden erhalten und auf Abweichungen geprüft.

Die Seite erstellt außerdem Telefon- und E-Mail-Vorlagen. Praxis-Score, Dublettenprüfung, Quellen und Excel-Ausgabe werden im Auftrag angefordert; ihre tatsächliche Erstellung erfolgt erst im gewählten KI-Chat und hängt von den dort verfügbaren Funktionen ab.

## 1. Dateien entpacken

Lade die ZIP-Datei herunter. Unter Windows: Rechtsklick → „Alle extrahieren“ → „Extrahieren“. Öffne den entpackten Ordner. Darin findest du index.html, app.js und diese Anleitung. Die HTML-Anleitung zeigt denselben Text im Browser.

## 2. Zuerst lokal ausprobieren

Öffne index.html per Doppelklick in Edge, Chrome oder Firefox. Beide Anwendungsdateien müssen im selben Ordner bleiben. Wähle zuerst die Suchart. Trage dann einen Beruf oder ein Berufsfeld, den Suchort sowie einen Zeitraum ein. Der Ort ist ein Pflichtfeld ohne vorausgewählten Wert. Rechts erscheint der Suchauftrag, sobald ein Ort eingegeben ist.

Klicke „Auftrag kopieren“. Falls der Browser das Kopieren lokaler Dateien verhindert, wird der Text markiert: Drücke Strg + C. Alternativ „Als Text speichern“ verwenden. Auf dem Mac entsprechen die Tastenkombinationen Cmd + C und Cmd + V.

Klicke auf „ChatGPT öffnen“ oder „Microsoft Copilot öffnen“. Melde dich an, soweit dein Zugang das erfordert, und füge denselben Suchauftrag in einen neuen Chat ein. Sende ihn ab. Nutze einen Chat mit verfügbarer Websuche. Für dienstliche Anfragen öffne den von deiner Einrichtung freigegebenen Zugang; bei Microsoft 365 Copilot kann das dein gewohnter Microsoft-365-Zugang sein. Falls keine Websuche verfügbar oder sie von der Organisation deaktiviert ist, muss das KI-System das laut Auftrag offen mitteilen. Für die Listenprüfung lädst du die betreffende Excel-Datei im Chat hoch, sofern verfügbar. Ohne Dateiupload kannst du einen anonymisierten Tabellenausschnitt einfügen; damit ist keine vollständige Arbeitsmappenprüfung möglich. Wenn das Eingabefeld den langen Auftrag nicht annimmt, kannst du ihn über „Als Text speichern“ herunterladen und als TXT-Datei anhängen, sofern unterstützt. Den Auftrag nicht unbemerkt kürzen.

Diese Variante benötigt keinen API-Schlüssel. Die Website selbst verursacht keine API-Aufrufe; für das jeweilige KI-System gelten die Grenzen und Bedingungen deines Kontos. Die Eingaben werden nicht dauerhaft im Browser gespeichert. Erst durch dein Einfügen und Absenden erhält der gewählte KI-Dienst den Suchauftrag.

## 3. GitHub öffnen

Öffne https://github.com/ und melde dich an. Lege bei Bedarf über „Sign up“ ein Konto an. In diesem Ablauf brauchst du weder Git noch Node.js auf deinem Computer.

## 4. Ein eigenes Repository anlegen

Klicke oben rechts auf „+“ → „New repository“. Trage als Repository name beispielsweise ausbildungsfinder-chatgpt ein. Wähle für eine zunächst interne Ablage „Private“. Klicke „Create repository“.

Ein Repository ist der Ordner für die Dateien auf GitHub. Der Repository-Name darf vom Namen der ZIP-Datei abweichen. Verändere das fremde Original-Repository nicht.

## 5. Dateien hochladen

Im leeren Repository klicke auf „uploading an existing file“. Bei einem bereits vorhandenen Repository findest du die Funktion unter „Add file“ → „Upload files“.

Ziehe index.html und app.js in das Upload-Feld. Du kannst README.md und ANLEITUNG.html ergänzen. Lade die entpackten Dateien hoch, nicht nur die ZIP-Datei und nicht den übergeordneten Ordner. index.html und app.js sollen direkt auf der obersten Ebene stehen.

Trage bei der Commit-Nachricht beispielsweise „Ausbildungsfinder hinzufügen“ ein. Klicke „Commit changes“. Danach müssen beide Dateien in der Dateiliste sichtbar sein. Der Standardbranch heißt meistens main; merke dir den tatsächlich angezeigten Namen.

## 6. Über den Zugriff entscheiden

Du kannst die Dateien im privaten Repository belassen und die Website lokal aus dem heruntergeladenen Ordner benutzen. Dafür ist kein Hosting nötig.

GitHub Pages ist bei GitHub Free für öffentliche Repositories verfügbar. Für Pages aus privaten Repositories gelten andere Tarifvoraussetzungen. Ein privates Repository bedeutet außerdem nicht automatisch eine private Pages-Website: GitHub weist darauf hin, dass Pages-Websites grundsätzlich öffentlich erreichbar sein können. Für einen wirklich geschützten Zugriff brauchst du eine passende private Pages-Konfiguration mit unterstütztem Enterprise-Zugang oder ein Hosting mit Anmeldung. Eine schwer zu erratende URL ist kein Zugriffsschutz.

Aktiviere die nachfolgenden Veröffentlichungsschritte nur, wenn du den Zugriff bewusst freigeben möchtest und dein Tarif die gewählte Konfiguration unterstützt. Für diese Lieferung wurde nichts veröffentlicht.

## 7. GitHub Pages einschalten, wenn Veröffentlichung gewünscht ist

Öffne im Repository „Settings“. Wähle links unter „Code and automation“ den Eintrag „Pages“.

Unter „Build and deployment“ wähle bei „Source“ den Eintrag „Deploy from a branch“. Wähle als Branch main beziehungsweise deinen vorhandenen Branch. Wähle beim Ordner „/ (root)“. Klicke „Save“.

Die Seite benötigt keinen Build-Befehl, kein npm install, keine GitHub Secrets und keinen API-Schlüssel. Falls GitHub Pages wegen Repository-Sichtbarkeit oder Tarif nicht verfügbar ist, ändere die Sichtbarkeit nicht unüberlegt. Du kannst weiterhin lokal arbeiten.

## 8. Bereitstellung kontrollieren

Warte, bis der Bereitstellungsvorgang abgeschlossen ist. Den Status findest du unter „Actions“ und auf der „Pages“-Einstellungsseite. Ein erfolgreicher Durchlauf wird dort entsprechend angezeigt. Die tatsächlich erzeugte Website-Adresse findest du bei „Visit site“.

Bei einem Repository mit dem Namen ausbildungsfinder-chatgpt sieht die Adresse normalerweise so aus:
https://DEIN-GITHUB-NAME.github.io/ausbildungsfinder-chatgpt/

Ersetze DEIN-GITHUB-NAME durch deinen tatsächlichen GitHub-Namen. Das Beispiel ist kein bereits eingerichteter Link. Ein projektbezogener Repository-Name darf nicht mit einer persönlichen Domain verwechselt werden.

## 9. Die veröffentlichte Seite testen

Öffne die von GitHub angezeigte Adresse. Wähle beispielsweise „Ausbildung“, „Kaufmann/-frau für Büromanagement“, den Ort „Hamm“, einen passenden Beginn und „ÖPNV“. Prüfe, ob der rechte Text deine Angaben enthält. Kopiere ihn wahlweise nach ChatGPT oder Microsoft Copilot und starte die Recherche.

Probiere anschließend „Praktikum“ mit einem anderen Ort aus, etwa Münster. Der Auftrag muss diesen neuen Ort enthalten und darf keine feste Region voraussetzen. Aktiviere zusätzlich „Eine Betriebs- oder Excel-Liste aktualisieren“. Der Auftrag muss nun ausdrücklich auf die im Chat hochzuladende Datei hinweisen. Wenn du die Suchart wechselst, muss dein eingegebener Ort erhalten bleiben. Wenn du den Ort leerst oder nur Leerzeichen eingibst, müssen Kopieren und Textdownload gesperrt sein. Probiere die Seite auch auf einem Smartphone aus.

## 10. Dateien später ändern

Öffne im Repository index.html oder app.js. Klicke auf das Stiftsymbol, ändere die gewünschte Stelle und speichere über „Commit changes“. Du kannst stattdessen lokal bearbeiten und die Datei unter gleichem Namen erneut hochladen. Nach einer erfolgreichen Pages-Bereitstellung lädt Strg + F5 die Seite neu.

Die Darstellung und Beschriftungen stehen in index.html. Die ortsbezogene Suchlogik und der Suchauftrag stehen in app.js. Es gibt keinen Service Worker, dessen Cache zusätzlich zurückgesetzt werden müsste.

## Häufige Probleme

404: Kontrolliere die exakte Pages-Adresse, den Branch, „/ (root)“ und den Dateinamen index.html in Kleinbuchstaben.

Die Seite erscheint, aber der Auftrag bleibt leer: app.js fehlt, liegt in einem Unterordner oder enthält einen Bearbeitungsfehler. Lade die unveränderte app.js erneut hoch und lade die Seite mit Strg + F5 neu.

Kopieren funktioniert nicht: Klicke in den Auftrag, markiere ihn mit Strg + A und kopiere mit Strg + C. Die Funktion „Als Text speichern“ bietet einen zweiten Weg.

Das KI-System liefert keine Quellen: Frage ausdrücklich nach Webrecherche und aufgerufenen Originalquellen. Kann die Sitzung keine Websuche nutzen, sind damit keine aktuellen Stellen bestätigt. Die Website kann Websuche oder Kontofunktionen nicht freischalten.

Es gibt weniger als zehn belegte Treffer: Das ist als Rechercheergebnis zulässig. Prüfe Suchgebiet, Zeitraum und Beruf. Es dürfen keine Betriebe erfunden werden, um die Zielzahl zu erreichen.

Keine Excel-Datei: Dateierstellung muss im gewählten KI-Chat verfügbar sein. Der Auftrag verlangt andernfalls eine CSV als Ersatz. Die Website exportiert nur den Suchauftrag als Text, nicht die Rechercheergebnisse.

## Wenn Ergebnisse direkt auf der Website erscheinen sollen

Dafür wäre eine zusätzliche Ausbaustufe nötig: Browser → geschützter Server mit Zugangskontrolle und Nutzungslimits → OpenAI Responses API mit Websuche → Quellenanzeige auf der Website. Ein API-Schlüssel darf niemals in index.html, app.js oder einem öffentlich ausgelieferten Build stehen. GitHub Secrets machen einen in Browsercode eingebauten Schlüssel nicht geheim.

GitHub Pages allein führt keine solche serverseitige API-Anbindung aus. Dafür brauchst du zusätzlich einen Server oder eine geeignete Serverless-Funktion. Dieser Download enthält bewusst die Arbeitsweise der verlinkten Vorlage mit manueller Übergabe an ChatGPT oder Microsoft Copilot.

## Quellen und Orientierung

Ausgangsanwendung, eingesehen am 02.11.2026:
https://wimmi66-code.github.io/Ausbildungsfinder/

GitHub: Veröffentlichung aus Branch konfigurieren und Hinweis zur öffentlichen Erreichbarkeit:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

OpenAI: Responses API und Einrichtung einer serverseitigen Integration:
https://developers.openai.com/api/docs/quickstart

OpenAI: Websuche über die API für eine mögliche spätere Erweiterung:
https://developers.openai.com/api/docs/guides/tools-web-search

## Prüfstand dieser Lieferung

JavaScript-Syntax und die Erzeugung der Suchaufträge wurden automatisiert geprüft, einschließlich aller fünf Sucharten, freier Ortsangabe, Ortspflicht, Erhalt des Ortes beim Wechsel der Suchart und Listenprüfung. Die HTML-Verweise wurden auf vorhandene Dateien geprüft. Ein grafischer Browsertest sowie eine Live-Recherche in deinem ChatGPT- oder Copilot-Konto oder eine Bereitstellung in deinem GitHub-Konto wurden nicht durchgeführt.


## Quellenprüfung und Schutz vor erfundenen Angaben

Der Suchauftrag enthält jetzt einen ausdrücklichen Quellenplan. Bei Praktikumssuchen im EN-Kreis/Hagen müssen drei Einstiegsquellen versucht und im Quellenprotokoll dokumentiert werden: https://ha-en.praktikum-nrw.de/node/291635, https://www.ausbildungsfinder.com/matching/praktikumsstellen-finden und https://www.hwk-do.de/ausbildungsplaetze-und-praktika-finden/ . Weitere Quellen sind BA-Jobsuche, Ausbildung.NRW, das bundesweite IHK-Portal und Lehrstellenradar sowie die jeweils konkreten Unternehmensseiten.

Das optionale Feld „Schulvorgaben oder zusätzliche Quellen“ dient unter anderem für Fachbereich, Block-/Wochenmodell und schulische Terminquellen. Persönliche Zugangsdaten gehören dort nicht hinein. Die BK-Witten-Pinnwand wurde für die Überarbeitung eingesehen; ihre Zugriffsadresse ist nicht fest im öffentlich hochladbaren Quellcode gespeichert. Für einen konkreten Auftrag kann die Schulseite bei Bedarf eingefügt werden.

Die Ausgabe unterscheidet A (konkrete Anzeige), B (allgemeine Praktikumsmöglichkeit), C (unbestätigte Initiativanfrage) und D (ausgeschlossen oder nicht prüfbar). Nur passende A-Treffer gehören in die Hauptliste. Auch A bestätigt keine tatsächliche freie Kapazität. Portalangaben gelten nicht als durch den Betrieb bestätigt. Unternehmensquellen sind bevorzugt; fehlen sie, bleibt der Portalstatus erkennbar.

Das Quellenprotokoll muss tatsächliche Seitenprüfungen von geplanten, erfolglosen und unterlassenen Prüfungen unterscheiden. Veröffentlichungsdatum und Abrufdatum bleiben getrennt. Unbekannte Kontakte und Fahrtzeiten werden nicht ergänzt. Widersprüchliche Datumsangaben dürfen nicht stillschweigend korrigiert werden. Ein Score ersetzt keinen Beleg.

Diese Regeln verringern Fehler, garantieren aber keine fehlerfreien KI-Ergebnisse. Die Anwendung erzeugt weiterhin einen Prompt; sie erzwingt oder kontrolliert die anschließenden Werkzeugaufrufe im gewählten KI-System technisch nicht. Quellen und Verfügbarkeit müssen vor einer Vermittlung nachgeprüft werden. Ein deterministisch geführtes Quellenprotokoll mit technischer Kontrolle wäre ein weiterer Entwicklungsschritt mit eigener Rechercheanbindung.


## Ergänzung: Region Stadt Hamm (Westfalen)

Geprüft und in den Suchauftrag aufgenommen am 02.11.2026:

- Stadt Hamm, Praktikumsportal: https://hamm.praktikum-nrw.de/node/277974 . Vorrangige Quelle für Schulpraktika und passende betriebliche Erprobungen. Die Detailangebote müssen nach Zielgruppe und Dauer unterschieden werden; das Portal enthält auch spezielle FOS-, Erzieher- und PiA-Angebote.
- Kreishandwerkerschaft Hellweg-Lippe, Ausbildungsbörse: https://service.kh-hl.de/ausbildungsboerse/ . Für handwerkliche Ausbildungsstellen in Hamm und passenden Nachbarorten. Praktikumsangebote dürfen aus Ausbildungsanzeigen nicht abgeleitet werden.
- Ausbildung.NRW: https://www.ausbildung.nrw/ . Bereits vorhandene Quelle, jetzt ausdrücklich für Ausbildungssuchen in Hamm vorgegeben. Die IHK zu Dortmund verweist auf dieses Portal: https://www.ihk.de/dortmund/menue/bildung/ausbildung/azubi-marketing/ihk-lehrstellenboerse-nrw-6350588 . IHK-Wegweiser und Portal sind keine zwei unabhängigen Nachweise derselben Stelle.
- Stadt Hamm, Berufsfelderkundungsportal: https://hamm.bfe-nrw.de/node/268060 . Nur für passende Tagesangebote oder zur ergänzenden Betriebsermittlung. Kein Ersatz für ein mehrwöchiges Schülerpraktikum. Bei der Prüfung waren noch BFE-Termine des Schuljahres 2025/26 sichtbar; aktuelle Termine daher immer neu prüfen.
- Kreis Unna, PRAXISPORTAL regional: https://kreis-unna.praktikum-nrw.de/node/291586 . Ergänzung, wenn die vorgegebene Erreichbarkeit Orte im Kreis Unna einschließt. Keine pauschale Ausweitung auf alle Nachbarorte.

BA-Jobsuche, HWK Dortmund, Lehrstellenradar und Unternehmensseiten bleiben entsprechend Suchart und Beruf eingebunden. Die HSHL-Jobbörse wurde geprüft, aber wegen der Ausrichtung auf Studierende und Alumni nicht als Standardquelle für Schülerpraktika aufgenommen. Messen und Ausstellerlisten dienen nur als Kontaktansatz.

Technische Prüfung: JavaScript-Syntax, Erhalt der EN-Quellen, Hamm-Quellenplan, Sucharten und Übergabe der Orts-/Schulangaben wurden kontrolliert. Die Portale wurden inhaltlich über Webabrufe geprüft; es wurden keine Buchungen, Bewerbungen oder Zugänge eingerichtet. Die Webseite bleibt ein Auftragsersteller und führt selbst keine Portalabfragen aus.


## Fehlerbehebung: Eingaben erscheinen nicht im Suchauftrag

Die ältere index.html besitzt noch kein Feld schoolSources. Die bisherige app.js griff trotzdem darauf zu; nach der Ortseingabe brach deshalb die Auftragserstellung ab. Die korrigierte app.js behandelt dieses Feld als optional und funktioniert mit der HTML-Version mit freier Ortseingabe sowohl mit als auch ohne Schulvorgabenfeld.

Zur Reparatur genügt jetzt der Austausch der app.js aus diesem Paket. Lade sie im vorhandenen GitHub-Repository direkt neben index.html hoch und speichere mit Commit changes. Warte die erfolgreiche Bereitstellung ab und lade die Website mit Strg + F5 neu. Teste Praktikum, Büro und 59071: Rechts muss der Suchauftrag diese Angaben enthalten. Für das zusätzliche Schulvorgabenfeld musst du auch die mitgelieferte index.html ersetzen.

Die Fehlerbehebung wurde mit fehlendem und vorhandenem schoolSources-Feld geprüft, einschließlich Eingabeänderung und Kopieren.


## Nutzung mit ChatGPT und Microsoft Copilot

Oberfläche und Suchauftrag sind für beide KI-Systeme formuliert. Es gibt zwei gleichwertige Öffnen-Buttons. Kopieren und Textdownload bleiben unabhängig von der Wahl des Dienstes. Der neue Textdownload heißt Suchauftrag-Ausbildungsfinder.txt. Die geprüften Quellen für Hamm und den EN-Kreis sowie Belegstatus und Quellenprotokoll gelten unverändert für beide.

Dateiupload, Websuche und Dateierstellung richten sich nach dem tatsächlich verwendeten Produkt, Konto und den Einstellungen der Organisation. Der Prompt verlangt bei fehlenden Funktionen eine offene Angabe und, soweit sinnvoll, eine CSV-Ausgabe als Text. Er verspricht keine identischen Suchergebnisse in beiden Diensten und keinen automatischen Datentransfer.

Microsoft beschreibt den Dateiupload unter https://support.microsoft.com/de-de/microsoft-365-copilot/file-upload-in-microsoft-copilot . Die Websuche in Microsoft-Copilot-Umgebungen kann durch Organisationsrichtlinien gesteuert werden: https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access . Geprüft am 02.11.2026.

Aktualisierung: index.html UND app.js zusammen im bestehenden GitHub-Repository ersetzen, Commit changes ausführen und die erfolgreiche Bereitstellung abwarten. Danach die Website mit Strg + F5 neu laden. Diese Erweiterung benötigt keinen neuen API-Schlüssel. Der vorhandene Repository-Name und die bisherige Website-Adresse müssen nicht geändert werden.


## Kolping-Layout

Das Erscheinungsbild wurde an die Websites Kolping Ruhr (https://www.kolping-ruhr.de/Angebote-und-Produkte/) und Kolping Westfalen/Hamm (https://www.kolping-hamm.de/) angelehnt: Arial, weiße Kopfzeile, Kolping-Orange, graue Flächen, Großbuchstaben in den Abschnittsüberschriften und eckige Bedienelemente. Die Original-Logos stammen von den beiden Websites und liegen im Ordner assets. Für die Nutzung des Downloads ist kein Abruf externer Schriften oder Logo-Dateien erforderlich. Die Suchlogik in app.js ist bei dieser Layoutänderung unverändert geblieben.

Wichtig für GitHub: index.html ersetzen und den gesamten Ordner assets mit kolping-ruhr.png und kolping-westfalen.png neben index.html hochladen. Die zuletzt bereitgestellte app.js kann bestehen bleiben; im ZIP liegt dieselbe aktuelle Version bei. Nach Commit changes und erfolgreicher Bereitstellung mit Strg + F5 neu laden. Auch lokal muss assets neben index.html liegen.

Assetquellen, eingesehen am 02.11.2026:
https://www.kolping-ruhr.de/images/logo2020.png?v3
https://www.kolping-hamm.de/images/logo2020.png?v3
