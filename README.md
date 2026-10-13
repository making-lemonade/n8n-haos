# n8n for Home Assistant

Add-on minimale per eseguire l'immagine ufficiale di n8n su Home Assistant. Il repository contiene solo i file necessari all'add-on: non contiene database, workflow, credenziali o configurazioni personali dell'istanza.

## Installare la propria istanza

1. Da Home Assistant, apri **Impostazioni → App → App Store**.
2. Dal menu in alto a destra scegli **Repository** e aggiungi l'URL GitHub di questo repository o del tuo fork.
3. Installa **n8n**.
4. Nella configurazione dell'app, inserisci le variabili n8n richieste come righe `NOME=valore` nell'opzione `environment`. Puoi usare l'interfaccia o il suo editor YAML.
5. Avvia l'app e apri la Web UI.

La porta predefinita è 5678. Se è già occupata, cambia la porta host nella sezione Network dell'app.

## Dati e segreti

Le opzioni dell'app, comprese le variabili che contengono segreti, vengono salvate da Home Assistant sul proprio dispositivo e passate direttamente al container all'avvio. Non inserirle in questo repository, negli esempi o nei commit GitHub.

Database SQLite, workflow, credenziali n8n e chiave generata automaticamente sono conservati nell'area dati persistente dell'app Home Assistant. Crea un backup prima di disinstallare o migrare l'app.

## Usare un fork o pubblicare una propria copia

Puoi fare un fork di questo repository e aggiungere l'URL del fork ad Home Assistant. Il repository deve essere pubblico perché Home Assistant possa scaricarlo come repository remoto; una copia privata può essere installata solo trasferendo i file sul dispositivo come app locale.

Prima di rendere pubblico un fork, verifica che contenga solo codice e documentazione e che nessuna opzione personale o segreto sia stata salvata nei file o nella cronologia Git.

## Versioni

L'add-on usa l'immagine ufficiale n8n, fissata nel `Dockerfile`. Consulta `n8n/CHANGELOG.md` per le modifiche.
