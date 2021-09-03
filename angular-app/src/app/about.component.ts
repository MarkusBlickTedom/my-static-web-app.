import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Alles meinem Gott zur Ehr</h2>
        <p>
          Ein erstes Testprojekt in Azure

          Laudetur Jesus Christus!
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
              Code in GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AboutComponent {}
