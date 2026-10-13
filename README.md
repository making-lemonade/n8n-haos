<div align="center">

# n8n for Home Assistant

<img src="https://img.shields.io/badge/n8n-workflows-EA4B71?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n">
<img src="https://img.shields.io/badge/Home%20Assistant-add--on-18BCF2?style=for-the-badge&logo=homeassistant&logoColor=white" alt="Home Assistant add-on">
<img src="https://img.shields.io/badge/Docker-official%20image-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker official image">

**Automazioni n8n sul tuo Home Assistant**

[🇮🇹 Italiano](#italiano) · [🇬🇧 English](#english)

</div>

---

## 🇮🇹 Italiano

Add-on minimale per eseguire l'immagine ufficiale di n8n su Home Assistant. Il repository contiene solo i file necessari all'add-on: non contiene database, workflow, credenziali o configurazioni personali dell'istanza.

### 🚀 Installare n8n in Home Assistant

Per aggiungere un repository remoto, Home Assistant deve poter leggere il repository GitHub. **Questo repository è privato**, quindi non può essere installato direttamente dall'App Store finché resta privato.

Se il repository è pubblico:

1. In Home Assistant apri **Impostazioni → App → App Store**.
2. Dal menu in alto a destra scegli **Repository** e aggiungi l'URL GitHub.
3. Installa **n8n**.
4. Nella configurazione dell'app, inserisci le variabili n8n richieste come righe `NOME=valore` nell'opzione `environment`. Puoi usare l'interfaccia o l'editor YAML.
5. Avvia l'app e apri la Web UI.

Con il repository privato, puoi invece installare l'add-on come app locale copiando la cartella `n8n` nella cartella `/addons` di Home Assistant e aggiornando le app locali nell'App Store.

La porta predefinita è **5678**. Se è già occupata, cambia la porta host nella sezione Network dell'app.

### 🔐 Dati e segreti

Le opzioni dell'app, comprese le variabili che contengono segreti, vengono salvate da Home Assistant sul proprio dispositivo e passate al container all'avvio. Non inserirle nei file, negli esempi o nei commit GitHub.

Database SQLite, workflow, credenziali n8n e chiave generata automaticamente sono conservati nell'area dati persistente dell'app Home Assistant. Crea un backup prima di disinstallare o migrare l'app. Se imposti `N8N_ENCRYPTION_KEY`, mantienila invariata per continuare a leggere le credenziali già cifrate.

### 📦 Usare un fork o pubblicare una propria copia

Puoi fare un fork del repository e aggiungere l'URL del fork ad Home Assistant. Per l'installazione remota il fork deve essere pubblico. Prima di renderlo pubblico, verifica che file e cronologia Git non contengano segreti o dati della tua istanza.

L'add-on usa l'immagine ufficiale n8n, fissata nel `Dockerfile`. Consulta [`n8n/CHANGELOG.md`](n8n/CHANGELOG.md) per le modifiche.

---

## 🇬🇧 English

A minimal Home Assistant add-on that runs the official n8n image. This repository contains only the files needed by the add-on; it does not contain an instance database, workflows, credentials, or personal configuration.

### 🚀 Install n8n in Home Assistant

Home Assistant must be able to read a GitHub repository to add it as a remote repository. **This repository is private**, so it cannot be installed directly from the Add-on Store while it remains private.

If the repository is public:

1. In Home Assistant, open **Settings → Apps → App Store**.
2. Open the top-right menu, choose **Repositories**, and add the GitHub URL.
3. Install **n8n**.
4. In the add-on configuration, enter the n8n variables as `NAME=value` lines under `environment`. Use the UI or its YAML editor.
5. Start the add-on and open its Web UI.

While the repository is private, you can install the add-on locally by copying the `n8n` folder into Home Assistant's `/addons` directory and refreshing local apps in the App Store.

The default port is **5678**. If it is already in use, change the host port in the add-on's Network section.

### 🔐 Data and secrets

Home Assistant stores add-on options, including secret values, on the Home Assistant device and passes them to the container at startup. Do not put them in repository files, examples, or GitHub commits.

The n8n SQLite database, workflows, credentials, and automatically generated encryption key are stored in the add-on's persistent data directory. Back up the add-on before uninstalling or migrating it. If you set `N8N_ENCRYPTION_KEY`, keep it unchanged so n8n can still decrypt existing credentials.

### 📦 Using a fork or publishing your own copy

You can fork this repository and add your fork's URL to Home Assistant. A remote repository must be public for Home Assistant to install it. Before making a fork public, check its files and Git history for secrets or data from your instance.

The add-on uses the official n8n image, pinned in the `Dockerfile`. See [`n8n/CHANGELOG.md`](n8n/CHANGELOG.md) for changes.
