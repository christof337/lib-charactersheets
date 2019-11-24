import { elementClass, isEmpty } from '../util';
import { log, error } from '../log';
import { __, _e } from '../i18n';

export let dl = {
  name: 'dl',
  defaults: {
    div: false,
    min: false,
    defs: []
  },
  render(args, reg, doc) {
    let defs = Object.keys(args.defs).map(term => {
      let termdef = args.defs[term];
      let icon = '';
      if (isEmpty(termdef))
        return '';
      switch (term) {
        case 'duration': term = "_{Duration}"; break;
        case 'range': term = "_{Range}"; break;
        case 'target': term = "_{Target}"; break;
        case 'area': term = "_{Area}"; break;
        case 'save': term = "_{Saving Throw}"; break;
        case 'critical_success': icon = 'save-crit-succeed'; term = "_{Critical Success}"; break;
        case 'success': icon = 'save-succeed'; term = "_{Success}"; break;
        case 'failure': icon = 'save-fail'; term = "_{Failure}"; break;
        case 'critical_failure': icon = 'save-crit-fail'; term = "_{Critical Failure}"; break;
        case 'sustain': term = "_{Sustain}"; break;
      }

      if (args.min)
        term = "";

      if (icon !== "") icon = `<i class='icon icon_${icon} size_small'></i>`;
      // log("p", "dl", term, termdef);
      return `<div><dt>${icon}${_e(term, doc)}</dt><dd>${_e(termdef, doc)}</dd></div> `;
    });

    const dlCls = elementClass('dl', null, args, ['div']);
    return `<dl${dlCls}>${defs.join("")}</dl>`;
  }
}
