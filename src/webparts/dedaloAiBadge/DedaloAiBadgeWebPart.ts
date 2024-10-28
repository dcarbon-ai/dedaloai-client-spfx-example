
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';


export interface IDedaloAiBadgeWebPartProps {
  scriptUrl: string;
  description: string;
  apiKey: string;
  projectId: string;
  options: string;
}

export default class DedaloAiBadgeWebPart extends BaseClientSideWebPart<IDedaloAiBadgeWebPartProps> {

  public render(): void {
   
    this.loadExternalScript();
  }

  private loadExternalScript(): void {
    const scriptUrl = this.properties.scriptUrl || 'https://dedalo-js.fra1.cdn.digitaloceanspaces.com/v1.1.0/stage/cjs/index.js';

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.type = 'text/javascript';
      // Add data-attributes to the script element
      const apiKey = this.properties.apiKey || 'your-api-key';
      const projectId = this.properties.projectId || '1';
      const options = this.properties.options || '{"badgeOptions": {"draggable": true, "position": "br"}}';
      scriptElement.setAttribute('data-apikey', apiKey);
      scriptElement.setAttribute('data-projectid', projectId);
      scriptElement.setAttribute('data-options', options);

      scriptElement.onload = () => {
        console.log('Script jQuery caricato da CDN');
      };
      document.body.appendChild(scriptElement);
    }
  }

  protected getPropertyPaneConfiguration() : IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: "Impostazioni della WebPart" },
          groups: [
            {
              groupName: "Configurazione",
              groupFields: [
                PropertyPaneTextField('apiKey', {
                  label: "Chiave API",
                  description: "Inserisci la tua chiave API",
                  placeholder: "Inserisci la tua chiave API",
                }),
                PropertyPaneTextField('projectId', {
                  label: "Project ID",
                  description: "Inserisci il tuo Project ID",
                  placeholder: "Inserisci il tuo Project ID",
                }),
                PropertyPaneTextField('options', {
                  label: "Opzioni (JSON)",
                  description: "Inserisci le opzioni (JSON)",
                  placeholder: "Inserisci le opzioni (JSON)",
                }),
              ]
            }
          ]
        }
      ]
    };
  }

}
