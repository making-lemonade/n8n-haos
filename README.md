# n8n for Home Assistant

Repository Home Assistant per avviare n8n usando l'immagine ufficiale `docker.n8n.io/n8nio/n8n`. Il repository contiene soltanto l'integrazione minima per renderlo installabile come app di Home Assistant e inoltrare le opzioni configurate in Home Assistant alle variabili d'ambiente di n8n.

## Installazione

1. Aggiungi questo repository all'App Store di Home Assistant.
2. Installa **n8n**.
3. Apri la configurazione dell'app. L'opzione `environment` accetta una lista di righe `NOME_VARIABILE=valore`; inserisci qui le impostazioni n8n e i segreti. Puoi gestirla dalla schermata dell'app o tramite l'editor YAML della configurazione dell'app.
4. Avvia l'app e apri la Web UI. n8n conserva database, workflow, credenziali e chiave generata automaticamente nell'area dati persistente dell'app.

L'istanza n8n usa la porta 5678 sul dispositivo Home Assistant. Se la porta è già occupata, cambia la porta host nella sezione Network dell'app.

## Nota sulla visibilità

Home Assistant deve poter leggere il repository GitHub per installarlo. Se questo repository resta privato, il normale App Store di Home Assistant non può scaricarlo. Per aggiungerlo come repository remoto, rendilo pubblico; in alternativa, trasferisci i file sul dispositivo e installa l'app localmente.

## Versioni

L'immagine ufficiale n8n è fissata nel `Dockerfile`. Gli aggiornamenti del componente e dell'immagine vengono mantenuti separati.