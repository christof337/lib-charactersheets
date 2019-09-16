import { esc } from '../util';
import { __ } from '../i18n';
import { fieldIdent, fieldRadioIdent, fieldInner } from './field';

function defaultFrameRender(args, reg, doc) {
  var ident = args.control == 'radio' ? fieldRadioIdent(args.id, args.value) : fieldIdent(args.id);
  var label = args.label ? `<label${ident.for}>${esc(__(args.label), true)}</label>` : '';
  var legend = args.legend ? `<legend>${esc(__(args.legend), true)}</legend>` : '';

  return `${legend}${label}${fieldInner(args, reg, doc)}`;
};

// Register the faux-elements

export let field_frame_above = {
  name: 'frame:above',
  defaults: {
    label: false,
    legend: false,
  },
  render: defaultFrameRender,
}

export let field_frame_left = {
  name: 'frame:left',
  defaults: {
    label: false,
    legend: false,
  },
  render: defaultFrameRender
}

export let field_frame_right = {
  name: 'frame:right',
  defaults: {
    label: false,
    legend: false,
  },
  render(args, reg, doc) {
    var ident = (args.control == 'radio') ? fieldRadioIdent(args.id, args.value) : fieldIdent(args.id);
    var label = args.label ? `<label${ident.for}>${esc(__(args.label, doc), true)}</label>` : '';
    var legend = args.legend ? `<legend>${esc(__(args.legend, doc), true)}</legend>` : '';

    return `${fieldInner(args, reg, doc)}${legend}${label}`;
  }
}

export let field_frame_h_label = {
  name: 'frame:h-label',
  defaults: {
    label: false,
  },
  render(args, reg, doc) {
    var ident = fieldIdent(args.id);
    var label = args.label ? `<label class='field__h-label'${ident.for}>${esc(__(args.label, doc), true)}</label>` : '';
    // WRONG! The h-label is supposed to go inside the box!
    return `${label}${fieldInner(args, reg, doc)}`;
  }
}

export let field_frame_none = {
  name: 'frame:none',
  render(args, reg, doc) {
    return fieldInner(args, reg, doc);
  }
}

export let field_frame_annotation = {
  name: 'frame:annotation',
  render(args, reg, doc) {
    var ident = fieldIdent(args.id);
    var label = args.label ? `<label${ident.for}>${esc(__(args.label, doc), true)}</label>` : '';
    return `${label}${fieldInner(args, reg, doc)}`;
  }
}

export let field_frame_circle = {
  name: 'frame:circle',
  defaults: {
    border: 'full'
  },
  render: defaultFrameRender
}
