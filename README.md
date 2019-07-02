# Resizable panel

React doesn't make it at all easy to implement a resizable panel. The problem is that
the mouse movements that guide the resize are not constrained to the resize handle element, nor
to the element that is resized.

In general, these are the moving parts:
- a mouse down event needs to be captured on the resize handle
- from the moment a mouse down on the handle is detected, mouse movemements should be captured
over the entire window / screen; the dimensions of the resizable element should adapt to the
position of the mouse during this capturing phase;
- a mouseUp event terminates the capturing phase. Again, this is an event that occurs on window /
screen.