# Pubblica su GitHub Pages

Segue una checklist e i comandi da eseguire nel terminale (`zsh`) per creare il repository remoto `nometuor_adige` su GitHub e pubblicare il sito con GitHub Pages.

Prerequisiti (macOS):
- Git installato (macOS ha git preinstallato in genere)
- `gh` (GitHub CLI) opzionale ma comodo: https://cli.github.com/

Opzione A — creare e pubblicare (consigliata se hai `gh` configurato):

1. Apri un terminale nella cartella del progetto:
```bash
cd "/Volumes/Extreme SSD/Immagini e video/Giulia_immagini_video/drone/tour_virtuale"
```
2. Inizializza git locale (se non è già un repo):
```bash
git init
git add .
git commit -m "Initial commit: virtual tour"
```
3. Crea il repo remoto e push (usando `gh`):
```bash
gh repo create YOUR_GITHUB_USERNAME/nometuor_adige --public --source=. --remote=origin --push
```
Sostituisci `YOUR_GITHUB_USERNAME` con il tuo username GitHub. `gh` ti chiederà autorizzazioni la prima volta.

4. Abilita GitHub Pages (il workflow CI creato qui pubblicherà automaticamente dalla branch `main`):
   - Lascia che la GitHub Action che ho aggiunto (file `/.github/workflows/pages.yml`) faccia il deploy quando `main` riceve un push.

Opzione B — senza `gh` (crea il repo dal sito GitHub):
1. Crea il repo `nometuor_adige` sul sito github.com (clic su New repository → nome `nometuor_adige`).
2. Poi in locale:
```bash
git init
git add .
git commit -m "Initial commit: virtual tour"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nometuor_adige.git
git branch -M main
git push -u origin main
```

Opzione C — deploy manuale via branch `gh-pages` (se preferisci):
```bash
git checkout -b gh-pages
git push -u origin gh-pages
```
poi abilita Pages su branch `gh-pages` nelle impostazioni del repository.

Nota sul workflow automatico che ho aggiunto:
- `/.github/workflows/pages.yml` crea un artefatto dalla root del repository e chiama `actions/deploy-pages` per pubblicare la root su GitHub Pages. Dopo il push su `main` GitHub Pages sarà pubblicato automaticamente.

Controlli dopo il push
- Vai su `https://github.com/YOUR_GITHUB_USERNAME/nometuor_adige/actions` per vedere l'Action di deploy.
- Quando l'Action ha successo, la pagina sarà disponibile su `https://YOUR_GITHUB_USERNAME.github.io/nometuor_adige/` (potrebbero servire pochi minuti).

Se vuoi che io esegua la creazione remota direttamente da qui, dovrai fornirmi o eseguire i comandi `gh` in locale e autorizzare il push (per motivi di sicurezza non posso usare le tue credenziali automaticamente). Posso guidarti passo passo.
