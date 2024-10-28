# dedaloai-client-spfx-example

## Summary

Questo repository contiene un esempio su come includere il badge di DedaloAI come webpart in SharePoint Framework.

## Set-up dell'ambiente di test

Creare una site collection in SharePoint Online. 

## Build e deploy

Clonare il repository e installare le dipendenze con il comando `npm install`.

Compilare il progetto con il comando `gulp bundle --ship` e `gulp package-solution --ship`.

Caricare il pacchetto `.sppkg` generato nella cartella `sharepoint/solution` in SharePoint App Catalog.

All'interno della site collection creata in precedenza, creare una nuova app catalog.

Aggiungere l'app caricata all'app catalog.

Creare una nuova pagina in una delle librerie di siti della site collection.

Aggiungere la webpart alla pagina desiderata.

### Configurazione
Una volta aggiunta la webpart alla pagina è possibile configurarla tramite il pannello di configurazione.
Le proprietà configurabili sono:
- **URL dello script**: URL dello script di DedaloAI (valore demo: `https://dedalo-js.fra1.cdn.digitaloceanspaces.com/v1.1.0/stage/cjs/index.js`)
- **API Key**: chiave di accesso all'API di DedaloAI (valore demo: `demo-api-key`)
- **Project ID**: ID del progetto di DedaloAI (valore demo: `1`)
- **Options**: opzioni aggiuntive per la visualizzazione del badge in formato JSON (valore demo: `{}`)

## Test

Se tutto è andato a buon fine, il badge di DedaloAI sarà visibile nella pagina.