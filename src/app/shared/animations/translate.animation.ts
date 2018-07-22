import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

export const translateAnimation = trigger('translateAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ left: '50%', transform: 'translateX(-50%)' })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ left: '50%', transform: 'translateX(-50%)' }), animate('0.3s', style({ transform: 'translateX(-150%)' }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ left: '50%', transform: 'translateX(150%)' }), animate('0.3s', style({ transform: 'translateX(-100%)' }))],
      { optional: true }
    )
  ])
]);
