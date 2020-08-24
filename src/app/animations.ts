import { 
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
    animateChild
} from '@angular/animations';

// First Match
export const slideInAnimation = 
trigger('routeAnimations', [
    transition('HomePage => ProjectsPage', [
        // Parent view use relative position
        style({ position: 'relative' }),
        // Child views use absolute position
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%'
            })
        ]),
        /* Matches the view that is entering and hides it
        by positioning it to the far right. */
        query(':enter', [
            style({ left: '300%',})  //top left edge is far right of right border
        ]),
        query(':leave', [
            style({ left: '0%',})  //top left edge is on right border
        ]),
        // Called on the view that is leaving, to run its child animations.
        query(':leave', animateChild()),
        // Make the the transitions run in parallel
        group([
            // Queries the view that is leaving and animates it to slide far to the left.
            query(':leave', [
                animate('0.5s ease-in-out', style({ left: '-300%' }))
            ]),
            // Queries the view that is entering and animates it to slide in from the right
            query(':enter', [
                animate('.5s ease-in-out', style({ left: '0%' }))
            ])
        ]),
        // Called on the new view to run its child animations after the main animation completes.
        query(':enter', animateChild()),
    ]),
    
    transition('* <=> *', [
        // Parent view use relative position
        style({ position: 'relative' }),
        // Child views use absolute position
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true}),
        // Matches the view that is added and hides the newly added view
        //by positioning it to the far left.
        query(':enter', [
            style({ left: '-300%' })
        ], { optional: true}),
        // Called on the view that is leaving, to run its child animations.
        query(':leave', animateChild(), { optional: true}),
        // Make the inner animations run in parallel.
        group([
            // Queries the view that is leaving and animates it to slide far to the right.
            query(':leave', [
                animate('0.5s ease-in-out', style({ left: '300%' }))
            ], { optional: true}),
            // Queries the view that is entering and animates it to slide in from the left
            query(':enter', [
                animate('0.5s ease-in-out', style({ left: '0%' }))
            ], { optional: true})
        ]),
        // Called on the new view to run its child animations after the main animation completes.
        query(':enter', animateChild(), { optional: true}),
    ]),
    
]);