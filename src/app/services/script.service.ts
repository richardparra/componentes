import { Injectable } from '@angular/core';

import { Script } from '../models/script.model';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor() {}

  public loadScript(myscript: Script) {
    return new Promise((resolve, reject) => {
      if (myscript.id && document.getElementById(myscript.id)) {
        resolve({ id: myscript.id, loaded: true, status: 'Already Loaded' });
      }
      let body = document.body;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = '';
      script.src = myscript.url;
      script.id = myscript.id;
      script.onload = () => {
        resolve({ id: myscript.id, loaded: true, status: 'Loaded' });
      };
      script.onerror = (error: any) =>
        resolve({ id: myscript.id, loaded: false, status: 'Loaded' });
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  public removeScript(scriptId: string[]) {
    const scriptList = scriptId.map((id) => {
      return document.getElementById(`${id}`);
    });
    Array.from(scriptList).forEach((element) => {
      if (element != null) {
        element.remove();
      }
    });
  }
}
