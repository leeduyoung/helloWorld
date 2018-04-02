import { Injectable } from '@angular/core';

import { Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin } from '@ionic-native/core';

@Plugin(
  {
    pluginName: "mathcalculator",
    plugin: "cordova-plugin-mathcalculator",
    pluginRef: "Mathcalculator",
    repo: 'https://github.com/leeduyoung/MathCalculator.git',
    platforms: ['Android', 'iOS']
  }
)

@Injectable()
export class MathProvider {

  @Cordova()
  add(arg1: any): Promise<string> {
    return;
  }

  @Cordova()
  substract(arg1: any): Promise<string> {
    return;
  }

}
