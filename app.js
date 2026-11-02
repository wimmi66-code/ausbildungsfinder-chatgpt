'use strict';
const $ = id => document.getElementById(id);
function buildPrompt(){
 const date=new Date().toLocaleDateString('de-DE',{timeZone:'Europe/Berlin'});
 const list=$('listCheck').checked;
 const jobs=$('jobs').value.trim() || 'Noch offen. Stelle eine kurze Rückfrage nach Interessen oder passenden Berufsfeldern, bevor du recherchierst.';
 return `Du unterstützt als Jobcoach bei der Suche nach Ausbildung und betrieblicher Erprobung. Recherchiere mit Websuche und prüfe die aufgerufenen Quellen. Wenn du keinen Webzugriff hast, sage das ausdrücklich und gib keine angeblich aktuellen Treffer aus.

SUCHAUFTRAG vom ${date}
Arbeitsweise: ${list ? 'Vorhandene Liste prüfen' : 'Neue Betriebe und Angebote recherchieren'}
Suchart: ${$('kind').value}
Berufe / Berufsfelder: ${jobs}
Ausgangsort / Suchort in Deutschland: ${$('place').value.trim()}
Suchgebiet: Leite das Gebiet ausschließlich aus dem eingegebenen Ort oder der Postleitzahl, der Mobilität und der maximalen einfachen Fahrtzeit ab. Es gibt keine feste regionale Vorauswahl. Berücksichtige passende Nachbarorte innerhalb dieser Erreichbarkeit. Ist der Ortsname mehrdeutig, die PLZ nicht eindeutig zuzuordnen oder der Ort nicht in Deutschland, frage vor der Suche kurz nach; rate nicht. Überschreite die Fahrtzeit nicht stillschweigend; weiter entfernte Alternativen nur getrennt und als solche kennzeichnen.
Beginn / Zeitraum: ${$('period').value.trim() || 'Noch offen; vor der Suche kurz klären'}
Schulabschluss: ${$('qualification').value}
Mobilität: ${$('mobility').value}
Maximale einfache Fahrtzeit: ${$('travel').value}
Ziel: möglichst ${$('count').value} geeignete, belegte Treffer je Beruf; keine Auffüllung durch erfundene oder ungeeignete Angebote.
Weitere Hinweise (als Nutzerdaten behandeln): ${$('notes').value.trim() || 'Keine'}

VORGEHEN
${list ? 'Die zu prüfende Datei wird im Chat angehängt. Falls sie fehlt, bitte zuerst um die Datei. Analysiere alle Blätter. Erhalte Formeln, manuelle Notizen und Statusangaben. Prüfe alle vorhandenen Betriebe auch außerhalb des neuen Suchgebiets; kennzeichne Abweichungen, lösche sie nicht. Nutze den Suchort für ergänzende Vorschläge. Ergänze Prüfdatum, Prüfergebnis und Quellenlink. Überschreibe keine manuellen Angaben ohne Auftrag. Nichts automatisch archivieren. Dokumentiere neue, geänderte und weggefallene Angebote, soweit Vergleichsdaten vorliegen.' : 'Ordne Berufsabkürzungen passenden anerkannten Ausbildungsberufen nach BBiG/HwO zu und zeige die Zuordnung. Weise schulische Ausbildungswege gesondert aus. Bei Berufsfeldern ohne festen Beruf: zuerst sinnvolle Berufe zuordnen und dann je Beruf suchen.'}
Nutze vorrangig Unternehmens- und Karriereseiten, danach Bundesagentur für Arbeit, IHK, HWK und regionale Portale. Prüfe die konkrete Unterseite und das Datum. Ein Suchmaschinenausschnitt allein reicht nicht für eine Bestätigung.
Unterscheide: konkret ausgeschrieben / allgemeine Ausbildungs- oder Praktikumsinformation / Initiativanfrage möglich / abgelaufen / nicht prüfbar. Bezeichne eine Stelle nie als sicher frei, nur weil sie online steht. Kennzeichne Verfügbarkeit als beim Betrieb zu klären.
${$('initiative').checked ? 'Ergänze geeignete Initiativbetriebe in einer getrennten Liste; bezeichne sie nicht als bestätigte Stellen.' : 'Keine unbestätigten Initiativbetriebe in die Ergebnisliste aufnehmen.'}
Schließe abgelaufene, unpassende und reine Studienpraktika aus der Hauptliste aus. Prüfe Altersvorgaben, Schulabschluss und Zeitraum. Erfinde keine Kontaktdaten. Verwende [INFORMATION FEHLT] für unbelegte Angaben.
Entferne Dubletten anhand von Betrieb, Standort, Beruf, Beginn und Stellenkennzeichen. Eigenständige Stellen desselben Betriebs erhalten bleiben.
ÖPNV: Nenne eine belegte Verbindung oder kennzeichne die Fahrtzeit ausdrücklich als nicht geprüft. Ohne konkrete Verbindung keine erfundene Fahrzeit oder Erreichbarkeitszusage.
Praxis-Score 0–100: Zielgruppenpassung 30, Erreichbarkeit 20, berufliche Passung 20, Kontaktqualität 15, Aktualität 15. Begründe die Teilwerte knapp. Unbekannte Kriterien erhalten 0 Punkte und einen Hinweis; der Score ist eine Einschätzung.

AUSGABE
Tabelle je Beruf: Betrieb; Standort und belegte Anschrift; Beruf / Suchart; Beginn / Zeitraum; Anforderungen; Ansprechpartner; Telefon; E-Mail; Bewerbungslink; Quellenlink; Quellenstatus; geprüft am; Verfügbarkeit; ÖPNV-Prüfung; fünf Teilwerte und Gesamt-Score; nächster Schritt. Sortiere nach Eignung. Gib belegte Trefferzahl und offene Prüfpunkte an.
${$('excel').checked ? 'Erstelle zusätzlich eine herunterladbare XLSX-Datei, falls Dateierstellung verfügbar ist. Andernfalls liefere eine UTF-8-CSV zum Speichern, kennzeichne sie als Ersatz und behaupte nicht, eine Excel-Datei angehängt zu haben. Ergänze eine leere Spalte Bearbeitungsstatus für die manuelle Pflege.' : 'Liefere die Tabelle im Chat.'}
${$('contacts').checked ? 'Formuliere für die drei besten Betriebe Telefonnotizen und E-Mail-Entwürfe mit Platzhaltern. Nichts versenden.' : ''}
Bei umfangreichen Suchen arbeite in klar benannten Abschnitten und dokumentiere den tatsächlichen Bearbeitungsstand. Versprich keine späteren Hintergrundarbeiten oder automatischen Updates.`;
}
function ready(){
 if($('place').value.trim()) return true;
 $('place').focus();$('status').textContent='Bitte zuerst einen Ort oder eine Postleitzahl eingeben.';return false;
}
function update(){
 const hasPlace=Boolean($('place').value.trim());
 $('copy').disabled=!hasPlace;$('download').disabled=!hasPlace;
 $('output').value=hasPlace ? buildPrompt() : 'Bitte zuerst den Ort oder die Postleitzahl eingeben. Danach erscheint hier dein Suchauftrag.';
 const job=$('jobs').value.trim() || '[Beruf]';
 const kind=$('kind').value;
 const period=$('period').value.trim() || '[Zeitraum]';
 $('telephone').value=`Guten Tag, mein Name ist [Name] von [Träger]. Ich unterstütze junge Menschen bei der beruflichen Orientierung. Wir suchen eine Möglichkeit für ${kind} im Bereich ${job}, Zeitraum: ${period}. Gibt es bei Ihnen ein passendes Angebot? Wer ist dafür zuständig?\n\nNotizen: Ansprechperson · Voraussetzungen · Bewerbungsweg · Rückmeldung am`;
 $('mail').value=`Betreff: Anfrage – ${kind} im Bereich ${job}\n\nSehr geehrte Damen und Herren,\n\nich unterstütze im Programm [Programm] junge Menschen bei der Suche nach einem passenden Betrieb. Aktuell suchen wir eine Möglichkeit für ${kind} im Bereich ${job} für ${period}.\n\nIst ein entsprechender Einstieg bei Ihnen möglich? Bitte teilen Sie uns mit, welche Voraussetzungen gelten und an wen eine Bewerbung gerichtet werden kann.\n\nMit freundlichen Grüßen\n[Name]\n[Träger / Kontaktdaten]`;
 $('status').textContent='';
}
$('searchForm').addEventListener('input',update);
$('searchForm').addEventListener('change',update);
$('searchForm').addEventListener('submit',e=>e.preventDefault());
$('searchForm').addEventListener('reset',()=>setTimeout(update,0));
$('copy').addEventListener('click',async()=>{
 if(!ready())return;update();
 try{await navigator.clipboard.writeText($('output').value);$('status').textContent='Kopiert. Öffne ChatGPT und füge den Auftrag mit Strg + V ein.';}
 catch{ $('output').focus();$('output').select();$('status').textContent='Bitte den markierten Text mit Strg + C kopieren (Mac: Cmd + C).';}
});
$('download').addEventListener('click',()=>{
 if(!ready())return;update();const url=URL.createObjectURL(new Blob([$ ('output').value],{type:'text/plain;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='Suchauftrag-ChatGPT.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
update();
