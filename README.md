# Ausbildungsfinder für ChatGPT – Einrichtung ohne Programmierkenntnisse

Stand: 02.11.2026

## Was du erhältst

Eine eigenständige, an der Funktion der angegebenen Claude-Anwendung orientierte Website. Sie erstellt Suchaufträge für ChatGPT. Die Recherche findet in ChatGPT statt, nachdem du den Auftrag eingefügt und abgesendet hast. Auf der Website selbst erscheinen keine Live-Stellenangebote. Der Originalquellcode und die Originalgrafiken wurden nicht übernommen.

Die Suche beginnt mit „Was suchst du?“: Ausbildung, Praktikum, berufliche Erprobung, Schulpraktikum oder EQ. Der Ort wird immer manuell als Ort oder Postleitzahl in Deutschland eingegeben. Es gibt keine feste regionale Vorauswahl. Erst nach einer Ortseingabe lassen sich Suchauftrag und Textdownload nutzen. Schulabschluss, Zeitraum, Mobilität und maximale Fahrtzeit grenzen die Suche ein. Die Erreichbarkeit bestimmt die passenden Nachbarorte. Mehrdeutige Ortsangaben muss ChatGPT vor der Recherche klären.

Du kannst einen konkreten Beruf, mehrere Berufe oder ein Berufsfeld eingeben, etwa „IT und Medien“. Fehlt ein Beruf, verlangt der Auftrag eine kurze Rückfrage zu Interessen. Die Prüfung vorhandener Listen ist unter „Vorhandene Liste prüfen“ erreichbar. Sie bleibt eine Zusatzfunktion; der Ort wird dadurch nicht verändert. Vorhandene Betriebe außerhalb des Suchgebiets werden erhalten und auf Abweichungen geprüft.

Die Seite erstellt außerdem Telefon- und E-Mail-Vorlagen. Praxis-Score, Dublettenprüfung, Quellen und Excel-Ausgabe werden im Auftrag angefordert; ihre tatsächliche Erstellung erfolgt erst in ChatGPT und hängt von den dort verfügbaren Funktionen ab.

## 1. Dateien entpacken

Lade die ZIP-Datei herunter. Unter Windows: Rechtsklick → „Alle extrahieren“ → „Extrahieren“. Öffne den entpackten Ordner. Darin findest du index.html, app.js und diese Anleitung. Die HTML-Anleitung zeigt denselben Text im Browser.

## 2. Zuerst lokal ausprobieren

Öffne index.html per Doppelklick in Edge, Chrome oder Firefox. Beide Anwendungsdateien müssen im selben Ordner bleiben. Wähle zuerst die Suchart. Trage dann einen Beruf oder ein Berufsfeld, den Suchort sowie einen Zeitraum ein. Der Ort ist ein Pflichtfeld ohne vorausgewählten Wert. Rechts erscheint der Suchauftrag, sobald ein Ort eingegeben ist.

Klicke „Auftrag kopieren“. Falls der Browser das Kopieren lokaler Dateien verhindert, wird der Text markiert: Drücke Strg + C. Alternativ „Als Text speichern“ verwenden. Auf dem Mac entsprechen die Tastenkombinationen Cmd + C und Cmd + V.

Klicke „ChatGPT öffnen“, melde dich mit deinem Konto an und füge den Auftrag in einen neuen Chat ein. Sende ihn ab. Nutze ein Modell bzw. einen Chat mit verfügbarer Websuche. Falls ChatGPT nicht recherchieren kann, soll es das laut Auftrag offen mitteilen. Für die Listenprüfung lädst du die betreffende Excel-Datei direkt im Chat hoch.

Diese Variante benötigt keinen API-Schlüssel. Die Website selbst verursacht keine API-Aufrufe; für ChatGPT gelten die Grenzen und Bedingungen deines Kontos. Die Eingaben werden nicht dauerhaft im Browser gespeichert. Erst durch dein Einfügen und Absenden erhält ChatGPT den Suchauftrag.

## 3. GitHub öffnen

Öffne https://github.com/ und melde dich an. Lege bei Bedarf über „Sign up“ ein Konto an. In diesem Ablauf brauchst du weder Git noch Node.js auf deinem Computer.

## 4. Ein eigenes Repository anlegen

Klicke oben rechts auf „+“ → „New repository“. Trage als Repository name beispielsweise ausbildungsfinder-chatgpt ein. Wähle für eine zunächst interne Ablage „Private“. Klicke „Create repository“.

Ein Repository ist der Ordner für die Dateien auf GitHub. Der Repository-Name darf vom Namen der ZIP-Datei abweichen. Verändere das fremde Original-Repository nicht.

## 5. Dateien hochladen

Im leeren Repository klicke auf „uploading an existing file“. Bei einem bereits vorhandenen Repository findest du die Funktion unter „Add file“ → „Upload files“.

Ziehe index.html und app.js in das Upload-Feld. Du kannst README.md und ANLEITUNG.html ergänzen. Lade die entpackten Dateien hoch, nicht nur die ZIP-Datei und nicht den übergeordneten Ordner. index.html und app.js sollen direkt auf der obersten Ebene stehen.

Trage bei der Commit-Nachricht beispielsweise „Ausbildungsfinder für ChatGPT hinzufügen“ ein. Klicke „Commit changes“. Danach müssen beide Dateien in der Dateiliste sichtbar sein. Der Standardbranch heißt meistens main; merke dir den tatsächlich angezeigten Namen.

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

Öffne die von GitHub angezeigte Adresse. Wähle beispielsweise „Ausbildung“, „Kaufmann/-frau für Büromanagement“, den Ort „Hamm“, einen passenden Beginn und „ÖPNV“. Prüfe, ob der rechte Text deine Angaben enthält. Kopiere ihn nach ChatGPT und starte die Recherche.

Probiere anschließend „Praktikum“ mit einem anderen Ort aus, etwa Münster. Der Auftrag muss diesen neuen Ort enthalten und darf keine feste Region voraussetzen. Aktiviere zusätzlich „Eine Betriebs- oder Excel-Liste aktualisieren“. Der Auftrag muss nun ausdrücklich auf die im Chat hochzuladende Datei hinweisen. Wenn du die Suchart wechselst, muss dein eingegebener Ort erhalten bleiben. Wenn du den Ort leerst oder nur Leerzeichen eingibst, müssen Kopieren und Textdownload gesperrt sein. Probiere die Seite auch auf einem Smartphone aus.

## 10. Dateien später ändern

Öffne im Repository index.html oder app.js. Klicke auf das Stiftsymbol, ändere die gewünschte Stelle und speichere über „Commit changes“. Du kannst stattdessen lokal bearbeiten und die Datei unter gleichem Namen erneut hochladen. Nach einer erfolgreichen Pages-Bereitstellung lädt Strg + F5 die Seite neu.

Die Darstellung und Beschriftungen stehen in index.html. Die ortsbezogene Suchlogik und der Suchauftrag stehen in app.js. Es gibt keinen Service Worker, dessen Cache zusätzlich zurückgesetzt werden müsste.

## Häufige Probleme

404: Kontrolliere die exakte Pages-Adresse, den Branch, „/ (root)“ und den Dateinamen index.html in Kleinbuchstaben.

Die Seite erscheint, aber der Auftrag bleibt leer: app.js fehlt, liegt in einem Unterordner oder enthält einen Bearbeitungsfehler. Lade die unveränderte app.js erneut hoch und lade die Seite mit Strg + F5 neu.

Kopieren funktioniert nicht: Klicke in den Auftrag, markiere ihn mit Strg + A und kopiere mit Strg + C. Die Funktion „Als Text speichern“ bietet einen zweiten Weg.

ChatGPT liefert keine Quellen: Frage ausdrücklich nach Webrecherche und aufgerufenen Originalquellen. Kann die Sitzung keine Websuche nutzen, sind damit keine aktuellen Stellen bestätigt. Die Website kann ChatGPT-Funktionen nicht freischalten.

Es gibt weniger als zehn belegte Treffer: Das ist als Rechercheergebnis zulässig. Prüfe Suchgebiet, Zeitraum und Beruf. Es dürfen keine Betriebe erfunden werden, um die Zielzahl zu erreichen.

Keine Excel-Datei: Dateierstellung muss in ChatGPT verfügbar sein. Der Auftrag verlangt andernfalls eine CSV als Ersatz. Die Website exportiert nur den Suchauftrag als Text, nicht die Rechercheergebnisse.

## Wenn Ergebnisse direkt auf der Website erscheinen sollen

Dafür wäre eine zusätzliche Ausbaustufe nötig: Browser → geschützter Server mit Zugangskontrolle und Nutzungslimits → OpenAI Responses API mit Websuche → Quellenanzeige auf der Website. Ein API-Schlüssel darf niemals in index.html, app.js oder einem öffentlich ausgelieferten Build stehen. GitHub Secrets machen einen in Browsercode eingebauten Schlüssel nicht geheim.

GitHub Pages allein führt keine solche serverseitige API-Anbindung aus. Dafür brauchst du zusätzlich einen Server oder eine geeignete Serverless-Funktion. Dieser Download enthält bewusst die Arbeitsweise der verlinkten Vorlage mit manueller Übergabe an ChatGPT.

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

JavaScript-Syntax und die Erzeugung der Suchaufträge wurden automatisiert geprüft, einschließlich aller fünf Sucharten, freier Ortsangabe, Ortspflicht, Erhalt des Ortes beim Wechsel der Suchart und Listenprüfung. Die HTML-Verweise wurden auf vorhandene Dateien geprüft. Ein grafischer Browsertest sowie eine Live-Recherche in deinem ChatGPT-Konto oder eine Bereitstellung in deinem GitHub-Konto wurden nicht durchgeführt.
