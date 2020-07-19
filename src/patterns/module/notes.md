This definitions were taken from this [post](https://stackoverflow.com/a/22918556/7028003) on stack stackoverflow

###The Basic Module Pattern
The Module Pattern must satisfy the following:

- Private members live in the closure.
- Public members are exposed in the return object.

###The Revealing Module Pattern
The Revealing Module Pattern is the most famous and most popular of the Module Pattern variants. It has a number of advantages over the other alternatives, such as

- Rename public functions without changing function body.
- Change members from public to private or vice versa by modifying a single line, without changing the function body.

#####The RMP satisfies three additional conditions in addition to those in the original:

- All members, whether public or private, are defined in the closure.
- The return object is an object literal with no function definitions. All right hand side expressions are closure variables
- All references are via the closure variables, not the return object.

###The Module Pattern with Object Literal
This is probably the oldest variant of the Module Pattern. Unlike RMP, there's no sexy official name for this variant.

It satisfies the following conditions, in addition to the original:

- Private members are defined in the closure.
- Public members are defined in the return object literal.
- References to public members are via this, whenever possible.

###The Module Pattern with Return Object Stub
This variant also has no official name.

It satisfies the following conditions, in addition to the original:

- An empty return object stub is defined at the beginning.
- Private members are defined in the closure.
- Public members are defined as members of the stub
- References to public members are via the stub object
