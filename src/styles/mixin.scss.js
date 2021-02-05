/**
 * Custom application mixins available through out the app
 */

// define sass mixin
// Generates single property classes
// -------------------------
@mixin property-variants($base, $property, $variants: ()) {
@each $size, $value in $variants {
    @if $size == 'md' {
            #{$base} {
                #{$property}: $value;
            }

            #{$base}-n {
                #{$property}: $value;
            }
        }

        #{$base}-#{$size} {
        #{$property}: $value;
    }

        #{$base}-n-#{$size} {
        #{$property}: -$value;
    }
    }
}
