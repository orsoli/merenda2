# Esercizio: Rimuovi i Duplicati da un Array

## Descrizione

Questo esercizio richiede di scrivere una funzione che prenda un array di numeri e restituisca un nuovo array con tutti gli elementi duplicati rimossi. L'ordine degli elementi deve rimanere invariato rispetto all'array originale.

## Obiettivo

Scrivi la funzione `rimuoviDuplicati(arr)` nel file `merenda.js`. La funzione deve prendere in ingresso un array di numeri e restituire un nuovo array senza duplicati.

## Struttura dei file

- **index.html**: La pagina principale che mostra l'esercizio e il pulsante per eseguire i test. I risultati dei test vengono visualizzati nella pagina.
- **style.css**: Il file CSS che definisce lo stile semplice e moderno della pagina.
- **script.js**: Il file che contiene i test. Esegue una serie di casi di test sulla funzione `rimuoviDuplicati` e visualizza i risultati.
- **merenda.js**: Il file in cui lo studente deve implementare la funzione `rimuoviDuplicati`.

## Istruzioni

1. Aprire `index.html` in un browser per vedere l'esercizio.
2. Implementare la funzione `rimuoviDuplicati(arr)` in `merenda.js`.
3. Cliccare sul pulsante "Esegui Test" nella pagina per verificare se la funzione è corretta.
4. I risultati dei test verranno mostrati nella sezione "Risultati".

## Test

Sono stati predefiniti 5 test automatici che verificano:
- Casi con duplicati
- Casi senza duplicati
- Casi con array vuoti

## Esempio

```javascript
rimuoviDuplicati([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]
rimuoviDuplicati([7, 7, 7, 7]); // Output: [7]
