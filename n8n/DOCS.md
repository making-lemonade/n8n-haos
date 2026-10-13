# n8n for Home Assistant

Questa app avvia l'immagine ufficiale n8n. Il piccolo entrypoint legge le opzioni salvate da Home Assistant e passa le variabili d'ambiente a n8n; non modifica l'immagine o il comportamento applicativo di n8n.

## Configurazione

Nella configurazione dell'app, aggiungi una voce per ogni variabile d'ambiente n8n nel formato `NOME=valore`. Esempio:

```yaml
environment:
  - GENERIC_TIMEZONE=Europe/Rome
  - TZ=Europe/Rome
  - N8N_ENCRYPTION_KEY=una-chiave-lunga-e-casuale
```

La stessa opzione si può modificare dall'interfaccia di Home Assistant o dal relativo editor YAML. Non inserire segreti nel repository GitHub. Home Assistant conserva queste opzioni nella configurazione dell'app.

Se non specifichi `N8N_ENCRYPTION_KEY`, n8n genera una chiave e la salva nella propria cartella dati. Se imposti una chiave esplicita, mantienila invariata: cambiarla rende illeggibili le credenziali già cifrate.

Ogni voce viene passata come variabile d'ambiente; il primo `=` separa il nome dal valore. Le righe vuote e quelle che iniziano con `#` sono ignorate. Non è necessario racchiudere i valori tra virgolette.

## Rete

La porta interna 5678 viene pubblicata sulla porta 5678 del dispositivo Home Assistant e la Web UI apre quell'indirizzo. Se la porta host è già occupata, cambiala nella sezione Network della configurazione dell'app.

Per webhook, OAuth e trigger raggiungibili dall'esterno può essere necessario configurare `WEBHOOK_URL`, `N8N_HOST`, `N8N_PROTOCOL` e le impostazioni del proxy in base al dominio e al proxy effettivamente usati. Non esporre n8n direttamente su Internet senza proteggere l'accesso.

## Persistenza e aggiornamenti

Database SQLite, workflow, credenziali e configurazione di n8n sono conservati in `/home/node/.n8n`, montata sull'area dati persistente dell'app Home Assistant. Disinstallare l'app può rimuovere i suoi dati: crea un backup prima di operazioni di manutenzione.

L'immagine ufficiale è fissata alla versione indicata nel `Dockerfile`; per aggiornare n8n occorre aggiornare quella versione e pubblicare una nuova versione dell'app.