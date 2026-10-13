# n8n for Home Assistant

Questa app avvia l'immagine ufficiale di n8n con un piccolo adattatore che passa al container le variabili configurate in Home Assistant. Workflow, database e credenziali restano nell'area dati persistente dell'app.

## Configurazione

Aggiungi una voce per ogni variabile d'ambiente n8n nell'opzione `environment`, nel formato `NOME=valore`. Esempio:

```yaml
environment:
  - GENERIC_TIMEZONE=Europe/Rome
  - TZ=Europe/Rome
  - N8N_ENCRYPTION_KEY=INSERISCI_QUI_UNA_CHIAVE_CASUALE
```

Imposta i valori nella configurazione dell'app in Home Assistant, tramite interfaccia o editor YAML. Home Assistant conserva questi valori sul proprio dispositivo e li passa al container; non vengono scritti nei file di questo repository. Non fare commit di credenziali o chiavi private.

Se non specifichi `N8N_ENCRYPTION_KEY`, n8n genera una chiave e la salva nella cartella dati persistente. Se imposti una chiave, conservala e non cambiarla: le credenziali già cifrate non potranno essere lette con una chiave diversa.

Ogni voce viene passata come variabile d'ambiente. Il primo `=` separa nome e valore; righe vuote e righe che iniziano con `#` vengono ignorate. Non racchiudere i valori tra virgolette.

## Rete

La porta interna 5678 è pubblicata sulla porta 5678 dell'host Home Assistant e la Web UI apre quell'indirizzo. Se la porta host è occupata, cambiala nella sezione Network della configurazione dell'app.

Per webhook, OAuth e trigger che devono essere raggiungibili dall'esterno può essere necessario configurare `WEBHOOK_URL`, `N8N_HOST`, `N8N_PROTOCOL` e il proxy usato. Non esporre n8n direttamente su Internet senza proteggere l'accesso.

## Persistenza e aggiornamenti

n8n conserva database SQLite, workflow, credenziali e configurazione in `/home/node/.n8n`, montata sull'area dati persistente dell'app. Crea un backup prima di disinstallare o migrare l'app.

L'immagine ufficiale è fissata nel `Dockerfile`; per aggiornare n8n occorre aggiornare il tag dell'immagine e pubblicare una nuova versione dell'app.

## Installare un fork

Per usare la propria copia, fai un fork di questo repository e aggiungi l'URL del fork tramite **Impostazioni → App → App Store → Repository**. Home Assistant deve poter scaricare il repository: per l'installazione remota il fork deve essere pubblico. In alternativa, puoi trasferire i file come app locale. Prima di rendere pubblico un fork, controlla che i file e la cronologia Git non contengano segreti o dati della tua istanza.
