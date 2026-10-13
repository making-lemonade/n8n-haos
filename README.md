<div align="center">

# n8n for Home Assistant

<img src="https://img.shields.io/badge/n8n-workflows-EA4B71?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n">
<img src="https://img.shields.io/badge/Home%20Assistant-add--on-18BCF2?style=for-the-badge&logo=homeassistant&logoColor=white" alt="Home Assistant add-on">
<img src="https://img.shields.io/badge/Docker-official%20image-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker official image">
<img src="https://img.shields.io/badge/n8n-2.42.7-EA4B71?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n 2.42.7">

**Automazioni n8n sul tuo Home Assistant**

[🇮🇹 Italiano](#italiano) · [🇬🇧 English](#english)

</div>

---

## 🇮🇹 Italiano

Add-on minimale per eseguire l'immagine ufficiale di n8n su Home Assistant. Il repository contiene solo i file necessari all'add-on: non contiene database, workflow, credenziali o configurazioni personali dell'istanza.

**Versione n8n inclusa: 2.42.7**, fissata nel Dockerfile. [Note ufficiali della release](https://github.com/n8n-io/n8n/releases/tag/n8n%402.42.7).

### 🚀 Installare n8n in Home Assistant

L'indirizzo GitHub di questo repository è **https://github.com/making-lemonade/n8n**. Al momento il repository è privato: Home Assistant non può installarlo come repository remoto finché resta privato.

Per usarlo adesso, installalo come app locale:

1. Copia la cartella `n8n` del repository nella cartella `/addons` di Home Assistant.
2. In Home Assistant apri **Impostazioni → App → App Store** e aggiorna le app locali.
3. Apri l'app **n8n** e vai nella scheda **Configurazione**.
4. Inserisci queste due voci nell'opzione `environment` per usare il fuso orario italiano:

   ```yaml
   environment:
     - GENERIC_TIMEZONE=Europe/Rome
     - TZ=Europe/Rome
   ```

   `GENERIC_TIMEZONE` imposta il fuso usato da n8n, ad esempio dai nodi di pianificazione; `TZ` imposta il fuso orario del container. Sono già sufficienti per iniziare a usare l'interfaccia web.

5. Salva, avvia l'app e apri la Web UI sulla porta **5678**.

La chiave `N8N_ENCRYPTION_KEY` è facoltativa: se non la imposti, n8n ne genera una e la conserva nell'area dati persistente dell'app. Se decidi di impostarla, usa una chiave casuale privata e non cambiarla: serve a cifrare le credenziali e deve restare al sicuro fuori da GitHub. Fai un backup prima di disinstallare o migrare l'app.

Per installare il repository da remoto tramite l'App Store, il repository deve essere pubblico. In quel caso: apri **Impostazioni → App → App Store → menu ⋮ → Repository**, aggiungi l'indirizzo GitHub indicato sopra e installa **n8n**.

### 🔐 Dati e segreti

Le opzioni dell'app, comprese le variabili che contengono segreti, vengono salvate da Home Assistant sul proprio dispositivo e passate al container all'avvio. Non inserirle nei file, negli esempi o nei commit GitHub.

Database SQLite, workflow, credenziali n8n e configurazione sono conservati nell'area dati persistente dell'app Home Assistant. Se imposti `N8N_ENCRYPTION_KEY`, mantienila invariata per continuare a leggere le credenziali già cifrate.

### 📦 Usare un fork o pubblicare una propria copia

Puoi fare un fork del repository e aggiungere l'URL del fork ad Home Assistant. Per l'installazione remota il fork deve essere pubblico. Prima di renderlo pubblico, verifica che file e cronologia Git non contengano segreti o dati della tua istanza.

L'add-on usa l'immagine ufficiale n8n, fissata nel `Dockerfile`. Consulta [`n8n/CHANGELOG.md`](n8n/CHANGELOG.md) per le modifiche.

---

## 🇬🇧 English

A minimal Home Assistant add-on that runs the official n8n image. This repository contains only the files needed by the add-on; it does not contain an instance database, workflows, credentials, or personal configuration.

**Included n8n version: 2.42.7**, pinned in the Dockerfile. [Official release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.42.7).

### 🚀 Install n8n in Home Assistant

The GitHub address for this repository is **https://github.com/making-lemonade/n8n**. The repository is currently private, so Home Assistant cannot install it as a remote repository while it remains private.

To use it now, install it as a local app:

1. Copy the repository's `n8n` folder into Home Assistant's `/addons` directory.
2. In Home Assistant, open **Settings → Apps → App Store** and refresh local apps.
3. Open the **n8n** app and go to its **Configuration** tab.
4. Add these two entries under the `environment` option to use the Italy time zone:

   ```yaml
   environment:
     - GENERIC_TIMEZONE=Europe/Rome
     - TZ=Europe/Rome
   ```

   `GENERIC_TIMEZONE` sets n8n's time zone, for example for schedule nodes; `TZ` sets the container time zone. These are enough to get started with the web interface.

5. Save, start the app, and open the Web UI on port **5678**.

The `N8N_ENCRYPTION_KEY` setting is optional: if you do not set it, n8n generates a key and stores it in the app's persistent data area. If you choose to set it, use a private random key and never change it; it encrypts credentials and must remain safe outside GitHub. Back up the app before uninstalling or migrating it.

To install the repository remotely through the App Store, it must be public. Then open **Settings → Apps → App Store → ⋮ menu → Repositories**, add the GitHub address above, and install **n8n**.

### 🔐 Data and secrets

Home Assistant stores app options, including secret values, on the Home Assistant device and passes them to the container at startup. Do not put them in repository files, examples, or GitHub commits.

The n8n SQLite database, workflows, credentials, and configuration are stored in the app's persistent data area. If you set `N8N_ENCRYPTION_KEY`, keep it unchanged so n8n can still decrypt existing credentials.

### 📦 Using a fork or publishing your own copy

You can fork this repository and add your fork's URL to Home Assistant. A remote repository must be public for Home Assistant to install it. Before making a fork public, check its files and Git history for secrets or data from your instance.

The add-on uses the official n8n image, pinned in the `Dockerfile`. See [`n8n/CHANGELOG.md`](n8n/CHANGELOG.md) for changes.
