#!/bin/bash

# Sposta la directory di lavoro nella cartella dello script [cite: 2]
cd "$(dirname "$0")"

# Pulizia terminale e intestazione estetica [cite: 1]
clear
echo -e "\e[1;32m================================================"
echo "    TOUR VIRTUALE - AVVIO IN CORSO..."
echo -e "================================================\e[0m"
echo ""

echo "Avvio del server locale..."
echo "Il browser si aprirà automaticamente."
echo ""
echo "IMPORTANTE: NON CHIUDERE QUESTA FINESTRA!"
echo "Per terminare il tour, chiudere questa finestra o premere Ctrl+C." [cite: 3]
echo ""
echo "Server attivo su: http://localhost:8000"
echo "================================================"
echo ""

# Attesa di 2 secondi 
sleep 2

# Apre l'URL nel browser predefinito di Linux
# xdg-open è il comando standard per Linux
xdg-open "http://localhost:8000" 2>/dev/null

# Avvia il server HTTP locale usando Python 3 [cite: 5]
# Questo gestisce correttamente tipi MIME, HTML e immagini [cite: 5]
python3 -m http.server 8000
