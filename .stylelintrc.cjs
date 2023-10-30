module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order', 'stylelint-config-recommended-scss'],
  rules: {
    'custom-property-pattern': '^[a-z][a-zA-Z0-9]+$',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'extend', 'use', 'return', 'for', 'else'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'media-feature-name-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['composes'],
      },
    ],
    'function-name-case': null,
    'function-url-quotes': null,
  },
};
